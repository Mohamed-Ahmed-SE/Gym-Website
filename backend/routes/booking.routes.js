import express from 'express';
import {
    getBookings,
    getBooking,
    createBooking,
    updateBooking,
    cancelBooking,
    checkAvailability,
} from '../controllers/booking.controller.js';
import { protect } from '../middleware/auth.middleware.js';

const router = express.Router();

router.get('/availability', checkAvailability);
router.get('/', protect, getBookings);
router.get('/:id', protect, getBooking);
router.post('/', protect, createBooking);
router.put('/:id', protect, updateBooking);
router.delete('/:id', protect, cancelBooking);

export default router;
