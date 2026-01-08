import express from 'express';
import {
    getPrograms,
    getProgram,
    createProgram,
    updateProgram,
    deleteProgram,
} from '../controllers/program.controller.js';
import { protect, admin } from '../middleware/auth.middleware.js';

const router = express.Router();

router.get('/', getPrograms);
router.get('/:id', getProgram);
router.post('/', protect, admin, createProgram);
router.put('/:id', protect, admin, updateProgram);
router.delete('/:id', protect, admin, deleteProgram);

export default router;
