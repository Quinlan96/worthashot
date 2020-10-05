import express from 'express'

import Category from '../../models/Category'

const router = express.Router()

router.get('/categories', async (req, res, next) => {
    const categories = await Category.query()

    res.json(categories)
})

router.post('/categories', async (req, res, next) => {
    const data: Partial<Category> = req.body

    const category = await Category.query().insertGraph(data)

    res.json(category)
})

export default router