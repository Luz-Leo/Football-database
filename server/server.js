'use strict'

import express from 'express';
import 'dotenv/config'

//CONFIG
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.json());

//Routes
import playerRouter from './src/routes/player-route.js'
import indexRouter from './src/routes/index-route.js'
import signupRouter from './src/routes/signup-route.js'
import loginRouter from './src/routes/login-route.js'

app.use('/', indexRouter)
app.use('/player', playerRouter)
app.use('/login', loginRouter)
app.use('/signup', signupRouter)


app.listen(PORT, () => {
    console.log(`Server listening on ${PORT} port`);
})
