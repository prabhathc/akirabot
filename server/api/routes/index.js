import express from 'express'
import authController from '../components/controllers/authController.js'
import userDataController from '../components/controllers/userDataController.js'

const router = express.Router()

// Auth Routes for user
router.get('/auth/redirect', authController.redirectToken);
router.get('/auth/refresh', authController.refreshToken);
router.get('/auth/logout', authController.revokeToken);

// Routes to get information of user
router.get('/user', userDataController.getUser);
router.get('/user/guilds', userDataController.userGuild);
router.get('/user/guild_members/:id', userDataController.userGuildMembers);

export default router;