import express from 'express'
import authController from '../controllers/authController.js'

const router = express.Router()

router.get('/auth/redirect', authController.redirectToken);
router.get('/auth/refresh', authController.refreshToken);

router.get('/user', authController.getUser);
router.get('/user/guilds', authController.userGuild);

export default router