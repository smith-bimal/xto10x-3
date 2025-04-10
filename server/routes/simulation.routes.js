import express from 'express';
import {
    createSimulation,
    getSimulations,
    updateSimulation,
    deleteSimulation,
    getSimulationWithBehavior
} from '../controllers/simulation.controller.js';

const router = express.Router();

router.post('/:userId', createSimulation);
router.get('/:userId', getSimulations);
router.get('/:userId/behavior', getSimulationWithBehavior);
router.put('/:id', updateSimulation);
router.delete('/:id', deleteSimulation);

export default router;