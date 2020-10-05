import express from 'express'

import Card from '../../models/Card'

const router = express.Router()

router.get('/qr/:code', async (req, res, next) => {
    const card = await Card.query()
        .where('code', req.params.code)
        .first()

    res.json(card)
})

export default router