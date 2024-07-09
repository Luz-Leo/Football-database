'use strict'

import express from 'express';
const router = express.Router()

router.get('/data', (req, res, next) => {
    try {
        res.status(200).send(players);
    } catch (e) {
        console.error(e)
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
        
    }
});