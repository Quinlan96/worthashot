import express from 'express'
import shortid from 'shortid'

import Card from '../../models/Card'

const router = express.Router()

router.get('/cards', async (req, res, next) => {
    const cards = await Card.query()

    res.json(cards)
})

router.post('/cards', async (req, res, next) => {
    const data: Partial<Card> = {
        code: shortid.generate(),
        text: req.body.text,
        notes: req.body.notes,
        qr_enabled: req.body.qr_enabled,
        category_id: req.body.category_id
    }

    const card = await Card.query().insertGraph(data)

    res.json(card)
})

export default router