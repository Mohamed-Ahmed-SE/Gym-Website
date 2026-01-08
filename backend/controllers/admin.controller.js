import User from '../models/User.js';
import Booking from '../models/Booking.js';
import Payment from '../models/Payment.js';
import Program from '../models/Program.js';
import Membership from '../models/Membership.js';

// @desc    Get dashboard statistics
// @route   GET /api/admin/stats
// @access  Private/Admin
export const getStats = async (req, res) => {
    try {
        const totalUsers = await User.countDocuments();
        const activeMemberships = await User.countDocuments({ membershipStatus: 'active' });
        const totalBookings = await Booking.countDocuments();
        const confirmedBookings = await Booking.countDocuments({ status: 'confirmed' });
        
        const totalRevenue = await Payment.aggregate([
            { $match: { status: 'succeeded' } },
            { $group: { _id: null, total: { $sum: '$amount' } } },
        ]);

        const monthlyRevenue = await Payment.aggregate([
            {
                $match: {
                    status: 'succeeded',
                    createdAt: {
                        $gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
                    },
                },
            },
            { $group: { _id: null, total: { $sum: '$amount' } } },
        ]);

        res.json({
            users: {
                total: totalUsers,
                activeMemberships,
            },
            bookings: {
                total: totalBookings,
                confirmed: confirmedBookings,
            },
            revenue: {
                total: totalRevenue[0]?.total || 0,
                monthly: monthlyRevenue[0]?.total || 0,
            },
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get all users
// @route   GET /api/admin/users
// @access  Private/Admin
export const getUsers = async (req, res) => {
    try {
        const users = await User.find()
            .select('-password')
            .populate('membership')
            .sort({ createdAt: -1 });
        
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Update user
// @route   PUT /api/admin/users/:id
// @access  Private/Admin
export const updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        ).select('-password');
        
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get all bookings
// @route   GET /api/admin/bookings
// @access  Private/Admin
export const getAllBookings = async (req, res) => {
    try {
        const bookings = await Booking.find()
            .populate('user', 'name email')
            .populate('program')
            .populate('trainer')
            .sort({ bookingDate: -1 });
        
        res.json(bookings);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get revenue analytics
// @route   GET /api/admin/revenue
// @access  Private/Admin
export const getRevenue = async (req, res) => {
    try {
        const { period = 'month' } = req.query;
        
        let startDate;
        const endDate = new Date();
        
        switch (period) {
            case 'week':
                startDate = new Date();
                startDate.setDate(startDate.getDate() - 7);
                break;
            case 'month':
                startDate = new Date();
                startDate.setMonth(startDate.getMonth() - 1);
                break;
            case 'year':
                startDate = new Date();
                startDate.setFullYear(startDate.getFullYear() - 1);
                break;
            default:
                startDate = new Date();
                startDate.setMonth(startDate.getMonth() - 1);
        }

        const revenue = await Payment.aggregate([
            {
                $match: {
                    status: 'succeeded',
                    createdAt: { $gte: startDate, $lte: endDate },
                },
            },
            {
                $group: {
                    _id: { $dateToString: { format: '%Y-%m-%d', date: '$createdAt' } },
                    total: { $sum: '$amount' },
                    count: { $sum: 1 },
                },
            },
            { $sort: { _id: 1 } },
        ]);

        res.json(revenue);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
