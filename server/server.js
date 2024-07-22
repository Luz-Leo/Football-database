'use strict'

import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config'

//CONFIG
const PORT = process.env.PORT || 3001 ;
const app = express();

//DATABASE
mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on('error', (error)=> console.error(error))
db.once('open', ()=>console.log('Connected to Database'))

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
