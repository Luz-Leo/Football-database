'use strict'

import express from 'express';
import pg from 'pg'
import 'dotenv/config'

//CONFIG
const PORT = process.env.PORT || 3001 ;
const app = express();

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
