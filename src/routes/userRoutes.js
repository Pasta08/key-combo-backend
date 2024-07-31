import express from 'express'
import {
    createUserHandler,
    getAllUserHandler,
} from '../controller/userController.js'

const router = express.Router()
console.log('routing')
/**
 * @openapi
 * /api/v1/users:
 *   post:
 *     summary: Create a new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 */
router.post('/users', createUserHandler)

/**
 * @openapi
 * /api/v1/users:
 *   get:
 *     tag:
 *       - Users
 *     description: Respond if running
 *     responses:
 *       200:
 *         description: App is up and running
 */
router.get('/users', getAllUserHandler)

export default router
