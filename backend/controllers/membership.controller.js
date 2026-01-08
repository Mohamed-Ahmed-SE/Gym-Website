import Membership from '../models/Membership.js';
import User from '../models/User.js';

// @desc    Get all memberships
// @route   GET /api/memberships
// @access  Public
export const getMemberships = async (req, res) => {
    try {
        const memberships = await Membership.find({ isActive: true }).sort({ price: 1 });
        res.json(memberships);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get single membership
// @route   GET /api/memberships/:id
// @access  Public
export const getMembership = async (req, res) => {
    try {
        const membership = await Membership.findById(req.params.id);
        
        if (!membership) {
            return res.status(404).json({ message: 'Membership not found' });
        }
        
        res.json(membership);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get user's membership
// @route   GET /api/memberships/user/:userId
// @access  Private
export const getUserMembership = async (req, res) => {
    try {
        const user = await User.findById(req.params.userId).populate('membership');
        
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        
        res.json({
            membership: user.membership,
            status: user.membershipStatus,
            expiry: user.membershipExpiry,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Purchase membership
// @route   POST /api/memberships/purchase
// @access  Private
export const purchaseMembership = async (req, res) => {
    try {
        const { membershipId, paymentIntentId } = req.body;
        const userId = req.user._id;

        const membership = await Membership.findById(membershipId);
        if (!membership) {
            return res.status(404).json({ message: 'Membership not found' });
        }

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Calculate expiry date (30 days from now for monthly)
        const expiryDate = new Date();
        expiryDate.setDate(expiryDate.getDate() + 30);

        user.membership = membershipId;
        user.membershipStatus = 'active';
        user.membershipExpiry = expiryDate;

        await user.save();

        res.json({
            message: 'Membership purchased successfully',
            membership: user.membership,
            expiry: user.membershipExpiry,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Cancel membership
// @route   PUT /api/memberships/cancel/:id
// @access  Private
export const cancelMembership = async (req, res) => {
    try {
        const user = await User.findById(req.user._id);
        
        if (!user || !user.membership) {
            return res.status(404).json({ message: 'No active membership found' });
        }

        user.membershipStatus = 'cancelled';
        await user.save();

        res.json({ message: 'Membership cancelled successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
