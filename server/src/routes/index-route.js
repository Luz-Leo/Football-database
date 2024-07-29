import express from 'express';
import authenticateToken from '../middleware/authenticateToken.js';
import controller from '../controllers/index-controller.js'

const router = express.Router()

router.get('/players', authenticateToken, controller.getPlayers)

export default router;