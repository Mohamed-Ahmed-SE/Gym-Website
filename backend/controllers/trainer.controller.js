import Trainer from '../models/Trainer.js';

// @desc    Get all trainers
// @route   GET /api/trainers
// @access  Public
export const getTrainers = async (req, res) => {
    try {
        const trainers = await Trainer.find({ isActive: true }).sort({ name: 1 });
        res.json(trainers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get single trainer
// @route   GET /api/trainers/:id
// @access  Public
export const getTrainer = async (req, res) => {
    try {
        const trainer = await Trainer.findById(req.params.id);
        
        if (!trainer) {
            return res.status(404).json({ message: 'Trainer not found' });
        }
        
        res.json(trainer);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Create trainer
// @route   POST /api/trainers
// @access  Private/Admin
export const createTrainer = async (req, res) => {
    try {
        const trainer = await Trainer.create(req.body);
        res.status(201).json(trainer);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Update trainer
// @route   PUT /api/trainers/:id
// @access  Private/Admin
export const updateTrainer = async (req, res) => {
    try {
        const trainer = await Trainer.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        
        if (!trainer) {
            return res.status(404).json({ message: 'Trainer not found' });
        }
        
        res.json(trainer);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
