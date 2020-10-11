import express from 'express'
import shortid from 'shortid'

import Card from '../../models/Card'
import Suggestion from '../../models/Suggestion'

const router = express.Router()

router.get('/cards', async (req, res, next) => {
    const cards = await Card
        .query()
        .withGraphFetched('suggestions')

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

router.post('/cards/:id/suggestions', async (req ,res, next) => {
    const data: Partial<Suggestion> = {
        card_id: parseInt(req.params.id),
        text: req.body.text
    }

    const suggestion = await Suggestion.query().insertGraph(data)

    res.json(suggestion)
})  

export default router