import express from 'express';
import bcrypt from 'bcrypt';
import pool from '../../db/db.js'

const router = express.Router()

router.post('/', async (req, res) => {
    const { name, username, email, password } = req.body
    try {

        const hashedPassword = await bcrypt.hash(password, 10)
        pool.query('INSERT INTO users (name, username, email, password) VALUES ($1, $2, $3, $4)',
            [name, username, email, hashedPassword])

        res.status(200).send({ message: "Account created sucessfully" })
    } catch (err) {
        res.send({ message: err })
    }

})

export default router;