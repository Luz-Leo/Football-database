import pool from "../../db/db.js";

async function getById(id) {

    const res = await pool.query('SELECT * from players WHERE player_id = $1', [id])
    return res;
}

async function createPlayer(data) {

    let player = await pool.query(
        'INSERT INTO players ("fname", "lname", "age", "country", "position", "club", "matches", "scored", "assist") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)',
        [data.fname, data.lname, data.age, data.country, data.position, data.club, data.matches, data.scored, data.assist])
    return player;
}

async function updatePlayer(id, data) {
    await pool.query('UPDATE players SET fname = $1, lname = $2, age = $3, country = $4, position = $5, club = $6, matches = $7, scored = $8, assist = $9 WHERE player_id = $10',
        [data.fname, data.lname, data.age, data.country, data.position, data.club, data.matches, data.scored, data.assist, id]
    )
}

async function deletePlayer(id) {
    await pool.query('DELETE FROM players WHERE player_id = $1', [id])
}

export default { getById, createPlayer, updatePlayer, deletePlayer }