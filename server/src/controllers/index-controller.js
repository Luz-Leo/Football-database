import Player from '../models/player.js'

export async function getPlayers(req, res, next){
    try {
        const players = await Player.find()
        res.status(200).send(players);

    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

export default {getPlayers}