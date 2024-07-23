import pool from '../../db/db.js'

const getPlayers = async (req, res) => {
    const result = await pool.query('SELECT * FROM players')
    res.status(200).json(result.rows)
  }

export default {getPlayers};