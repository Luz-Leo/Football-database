/*eslint no-unused-vars: */
import Player from '../models/player.js'
import express from 'express';
import getPlayer from '../middleware/getPlayer.js';
import controller from '../controllers/player-controller.js'
const router = express.Router()

router.get('/:id', getPlayer, controller.getById)

router.post('/', controller.createPlayer)

router.patch('/edit/:id', getPlayer, controller.updatePlayer)

router.delete('/edit/:id', getPlayer, controller.deletePlayer)

export default router;