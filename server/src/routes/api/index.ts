import { Router } from 'express' 
import cardRouter from './cards'

const router: Router = Router()

router.use(cardRouter)

export default router;