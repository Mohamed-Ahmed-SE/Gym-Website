import express from 'express';
import {
    getMemberships,
    getMembership,
    getUserMembership,
    purchaseMembership,
    cancelMembership,
} from '../controllers/membership.controller.js';
import { protect } from '../middleware/auth.middleware.js';

const router = express.Router();

router.get('/', getMemberships);
router.get('/:id', getMembership);
router.get('/user/:userId', protect, getUserMembership);
router.post('/purchase', protect, purchaseMembership);
router.put('/cancel/:id', protect, cancelMembership);

export default router;
