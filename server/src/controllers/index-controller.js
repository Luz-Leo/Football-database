import pool from '../../db/db.js'
import { getOrSetCache } from '../utils/utils.js';

const getPlayers = async (req, res) => {
  const players = await getOrSetCache('players', 3600, async () => {
    const data = await pool.query('SELECT * FROM players')
    return data
  })
  res.status(200).json({ message: 'sucess', players: players.rows })
}

export default { getPlayers };