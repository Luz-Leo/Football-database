import repository from '../repositories/player-repository.js'
import validate from '../validatiors/validation.js'


export async function getById(req, res) {
    res.send(res.player)
}

export async function createPlayer(req, res) {

    let isValid = validate(req.body)
    if (isValid.length > 0) {
        res.status(400).json(isValid)
        return;
    }

    try {
        await repository.createPlayer(req.body)
        res.status(201).send({
            message: 'Player added to the database sucessfully!'
        });

    } catch (err) {
        res.status(400).json({ message: err.message })
    }

}

export async function updatePlayer(req, res) {
    try {
        await repository.updatePlayer({ _id: req.params.id }, req.body)
        res.status(201).send({ message: "Player updated sucessfully" })

    } catch (err) {
        res.status(400).json({ message: err.message })

    }
}

export async function deletePlayer(req, res) {
    try {
        await res.player.deleteOne()
        res.json({ message: "Player deleted succesfully" })
    } catch (err) {
        res.status(500).json(({ message: err.message }))
    }
}

export default { getById, createPlayer, updatePlayer, deletePlayer };
