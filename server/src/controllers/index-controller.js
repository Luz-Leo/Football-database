import pool from '../server.js'

export const getPlayers = async (req, res) => {
    pool.query('SELECT * FROM players ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      res.status(200).json(results.rows)
    })
  }

export default {getPlayers}