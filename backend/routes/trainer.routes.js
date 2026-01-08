import express from 'express';
import {
    getTrainers,
    getTrainer,
    createTrainer,
    updateTrainer,
} from '../controllers/trainer.controller.js';
import { protect, admin } from '../middleware/auth.middleware.js';

const router = express.Router();

router.get('/', getTrainers);
router.get('/:id', getTrainer);
router.post('/', protect, admin, createTrainer);
router.put('/:id', protect, admin, updateTrainer);

export default router;
