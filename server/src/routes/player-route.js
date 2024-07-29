import express from 'express';
import getPlayer from '../middleware/getPlayer.js';
import authenticateToken from '../middleware/authenticateToken.js';
import controller from '../controllers/player-controller.js';
const router = express.Router()

router.get('/:id', authenticateToken, controller.getById)

router.post('/', authenticateToken, controller.createPlayer)

router.get('/edit/:id', authenticateToken, controller.getById)

router.put('/edit/:id', authenticateToken, getPlayer, controller.updatePlayer)

router.delete('/edit/:id', authenticateToken,  getPlayer, controller.deletePlayer)

export default router;