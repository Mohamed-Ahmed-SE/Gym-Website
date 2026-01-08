import Booking from '../models/Booking.js';
import Program from '../models/Program.js';

// @desc    Get all bookings (user's bookings or all for admin)
// @route   GET /api/bookings
// @access  Private
export const getBookings = async (req, res) => {
    try {
        const query = req.user.role === 'admin' ? {} : { user: req.user._id };
        
        const bookings = await Booking.find(query)
            .populate('user', 'name email')
            .populate('program', 'title duration intensity image')
            .populate('trainer', 'name role image')
            .populate('payment')
            .sort({ bookingDate: -1, bookingTime: -1 });
        
        res.json(bookings);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get single booking
// @route   GET /api/bookings/:id
// @access  Private
export const getBooking = async (req, res) => {
    try {
        const booking = await Booking.findById(req.params.id)
            .populate('user', 'name email')
            .populate('program')
            .populate('trainer')
            .populate('payment');
        
        if (!booking) {
            return res.status(404).json({ message: 'Booking not found' });
        }
        
        // Check if user owns booking or is admin
        if (req.user.role !== 'admin' && booking.user._id.toString() !== req.user._id.toString()) {
            return res.status(403).json({ message: 'Not authorized' });
        }
        
        res.json(booking);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Create booking
// @route   POST /api/bookings
// @access  Private
export const createBooking = async (req, res) => {
    try {
        const { programId, trainerId, bookingDate, bookingTime, notes } = req.body;

        // Check if program exists
        const program = await Program.findById(programId);
        if (!program) {
            return res.status(404).json({ message: 'Program not found' });
        }

        // Check availability
        const existingBooking = await Booking.findOne({
            program: programId,
            bookingDate: new Date(bookingDate),
            bookingTime,
            status: { $in: ['pending', 'confirmed'] },
        });

        if (existingBooking) {
            return res.status(400).json({ message: 'Time slot already booked' });
        }

        // Check capacity
        const bookingsCount = await Booking.countDocuments({
            program: programId,
            bookingDate: new Date(bookingDate),
            bookingTime,
            status: { $in: ['pending', 'confirmed'] },
        });

        if (bookingsCount >= program.capacity) {
            return res.status(400).json({ message: 'Class is full' });
        }

        const booking = await Booking.create({
            user: req.user._id,
            program: programId,
            trainer: trainerId || program.instructorId,
            bookingDate: new Date(bookingDate),
            bookingTime,
            notes,
        });

        const populatedBooking = await Booking.findById(booking._id)
            .populate('program')
            .populate('trainer');

        res.status(201).json(populatedBooking);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Update booking
// @route   PUT /api/bookings/:id
// @access  Private
export const updateBooking = async (req, res) => {
    try {
        const booking = await Booking.findById(req.params.id);
        
        if (!booking) {
            return res.status(404).json({ message: 'Booking not found' });
        }

        // Check authorization
        if (req.user.role !== 'admin' && booking.user.toString() !== req.user._id.toString()) {
            return res.status(403).json({ message: 'Not authorized' });
        }

        const updatedBooking = await Booking.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        ).populate('program').populate('trainer');

        res.json(updatedBooking);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Cancel booking
// @route   DELETE /api/bookings/:id
// @access  Private
export const cancelBooking = async (req, res) => {
    try {
        const booking = await Booking.findById(req.params.id);
        
        if (!booking) {
            return res.status(404).json({ message: 'Booking not found' });
        }

        // Check authorization
        if (req.user.role !== 'admin' && booking.user.toString() !== req.user._id.toString()) {
            return res.status(403).json({ message: 'Not authorized' });
        }

        booking.status = 'cancelled';
        await booking.save();

        res.json({ message: 'Booking cancelled successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Check availability
// @route   GET /api/bookings/availability
// @access  Public
export const checkAvailability = async (req, res) => {
    try {
        const { programId, date, time } = req.query;

        if (!programId || !date || !time) {
            return res.status(400).json({ message: 'Program ID, date, and time are required' });
        }

        const program = await Program.findById(programId);
        if (!program) {
            return res.status(404).json({ message: 'Program not found' });
        }

        const bookingsCount = await Booking.countDocuments({
            program: programId,
            bookingDate: new Date(date),
            bookingTime: time,
            status: { $in: ['pending', 'confirmed'] },
        });

        const available = bookingsCount < program.capacity;
        const spotsLeft = program.capacity - bookingsCount;

        res.json({
            available,
            spotsLeft,
            capacity: program.capacity,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
