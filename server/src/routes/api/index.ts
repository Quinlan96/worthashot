import { Router } from 'express' 
import cardRouter from './cards'
import categoryRouter from './categories'
import qrRouter from './qr'

const router: Router = Router()

router.use(cardRouter)
router.use(categoryRouter)
router.use(qrRouter)

export default router;