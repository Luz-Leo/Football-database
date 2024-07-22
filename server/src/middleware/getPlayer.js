import repository from '../repositories/player-repository.js'

export default async function getPlayer(req, res, next) {
    let player;
    try {
        player = await repository.getById(req.params.id)
        if (player == null) {
            return res.status(400).json({ message: 'Cannot find player' })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }

    res.player = player
    next()
}