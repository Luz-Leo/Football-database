import express from 'express';
import pool from '../../db/db.js'
import bcrypt from 'bcrypt'

const router = express.Router()

router.post('/', async (req, res) => {
    const user = await pool.query('SELECT * FROM users WHERE username = $1', [req.body.username])
    if (user.rows[0] == null)
        return res.status(400).json("Cannot find user")
    try {
        if(await bcrypt.compare(req.body.password, user.rows[0].password)){
            res.status(200).send(' ')
            
        }else{
            res.status(401).json('Wrong password')
        }
        
    } catch (e) {
        res.status(500).send(e)
    }

})

export default router;