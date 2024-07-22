import express from 'express';
import Player from '../models/player.js'
import getPlayer from '../middleware/getPlayer.js';
import controller from '../controllers/index-controller.js'
const router = express.Router()

router.get('/players', controller.getPlayers)

export default router;