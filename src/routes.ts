import express from 'express';

export const routes = express.Router()

//  INDEX
routes.get('/', (req, res) => {
    return res.json({ mensagem: `Server running...` })
})