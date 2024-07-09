'use strict'

import express from 'express';
import players from '../players.json' assert { type: "json" };
import {addPlayer, editPlayer, removePlayer} from './src/utils/functions.js';

//config
const JSON_FILE = "../players.json";
const PORT = process.env.PORT || 3001 ;

const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.get('/data', (req, res, next) => {
    try {
        res.status(200).send(players);
    } catch (e) {
        console.error(e)
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
        
    }
});

app.get('/player/:id', function (req, res, next) {
    try {
        var id = req.params.id;
        const data = players.filter((player)=> player.id == id)
        res.status(200).send(data[0]);
    } catch (e) {
        res.status(500).send({
            message: e
        });
    }

})

app.get('/player/edit/:id', function (req, res, next) {
    try {
        var id = req.params.id;
        const data = players.filter((player)=> player.id == id)
        res.status(200).send(data[0]);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }

})

app.put('/player/edit/:id', function (req, res, next){
    try{
        
        var id = req.params.id;
        editPlayer(req.body, id, JSON_FILE)

        res.status(200).send({
            message: "Player's info was updated.",
        });

    } catch (e){

    }
})

app.post('/newplayer', (req, res, next) => {
    try {

        addPlayer(req.body, JSON_FILE);

        res.status(200).send({
            message: 'New player  was added to the database',
        });

    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
})

app.delete('/player/:id', (req, res, next)=>{
    try{
        
        var id = req.params.id;
        removePlayer(id, JSON_FILE)

        res.status(200).send({
            message: "Player's info was deleted.",
        });

    } catch (e){

    }

})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT} port`);
})
