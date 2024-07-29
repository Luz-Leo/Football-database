import express from 'express';
import jwt from 'jsonwebtoken';
import pool from '../../db/db.js';
import { generateAccessToken } from '../utils/utils.js';

const router = express.Router()

router.post('/', async (req, res) => {
    let refreshToken = req.body.token;

    if (refreshToken == null) return res.sendStatus(401)
    
    const token_db = await pool.query('SELECT * FROM token WHERE refresh_token = $1', [refreshToken])
    if (token_db == null) return res.sendStatus(403)

    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) =>{
        if (err) return res.sendStatus(403)
           
        const accessToken = generateAccessToken({ name: user.name})
        res.json({accessToken:accessToken})
    })
})


export default router;