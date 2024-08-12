import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import pool from '../../db/db.js';
import { createClient } from 'redis';
import { generateAccessToken } from '../utils/utils.js';

const client = await createClient()
    .on('error', err => console.log('Redis Client Error', err))
    .connect();

const router = express.Router()

router.post('/', async (req, res) => {
    const user = await pool.query('SELECT * FROM users WHERE username = $1', [req.body.username])
    if (user.rows == null)
        return res.status(400).json({ message: "Cannot find user" })

    try {
        if (await bcrypt.compare(req.body.password, user.rows[0].password)) {

            const account = user.rows[0]
            const accessToken = generateAccessToken(account)
            const refreshToken = jwt.sign(account, process.env.REFRESH_TOKEN_SECRET)
            await pool.query('INSERT INTO tokens (username, refresh_token) VALUES ($1, $2)', [account.username, refreshToken])
            await client.set(`accesstoken:${account.username}`, accessToken)
            res.status(200).json({ message: "success", accessToken: accessToken})

        } else {
            res.status(401).json({ message: "Wrong password" })
        }

    } catch (e) {

        res.status(500).json({ message: "Internal Server error" })
    }

})

export default router;