import express from 'express';
import jwt from 'jsonwebtoken';
import pool from '../../db/db.js';
import { generateAccessToken } from '../utils/utils.js';

const router = express.Router()

router.delete('/', async (req, res) =>{
    await pool.query('DELETE FROM token WHERE refresh_token = $1', [req.body.token])
    res.sendStatus(204);  
})

export default router;