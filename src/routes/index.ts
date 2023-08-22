import express from 'express'
import { getUserContent } from 'src/controllers/userController';

const router = express.Router()

router.get('/user/:id', getUserContent)

export default router;