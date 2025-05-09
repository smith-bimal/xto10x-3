import { Router } from 'express';
import {
  generateRecommendations,
} from '../controllers/ai.controller.js';
import { authenticateToken } from '../middlewares/auth.middleware.js';

const router = Router();

router.post('/recommendations', authenticateToken, generateRecommendations);

export default router;
