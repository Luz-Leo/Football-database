import express from 'express';
import controller from '../controllers/index-controller.js'

const router = express.Router()

router.get('/players', controller.getPlayers)

export default router;