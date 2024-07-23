'use strict'

import express from 'express';
import pg from 'pg'
import 'dotenv/config'

//CONFIG
const PORT = process.env.PORT || 3001 ;
const app = express();

//DATABASE
const { Pool } = pg
const pool = new Pool({
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    host: process.env.PG_HOST,
    port: process.env.PG_PORT
})

//
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

//Routes
import playerRouter from './src/routes/player-route.js'
import indexRouter from './src/routes/index-route.js'

app.use('/player', playerRouter)
app.use('/', indexRouter )

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT} port`);
})
