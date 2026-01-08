import express from 'express';
import {
    getStats,
    getUsers,
    updateUser,
    getAllBookings,
    getRevenue,
} from '../controllers/admin.controller.js';
import { protect, admin } from '../middleware/auth.middleware.js';

const router = express.Router();

router.get('/stats', protect, admin, getStats);
router.get('/users', protect, admin, getUsers);
router.put('/users/:id', protect, admin, updateUser);
router.get('/bookings', protect, admin, getAllBookings);
router.get('/revenue', protect, admin, getRevenue);

export default router;
