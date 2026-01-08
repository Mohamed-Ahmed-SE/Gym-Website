import express from 'express';
import {
    createIntent,
    confirm,
    getUserPayments,
} from '../controllers/payment.controller.js';
import { protect } from '../middleware/auth.middleware.js';

const router = express.Router();

router.post('/create-intent', protect, createIntent);
router.post('/confirm', protect, confirm);
router.get('/user/:userId', protect, getUserPayments);

export default router;
