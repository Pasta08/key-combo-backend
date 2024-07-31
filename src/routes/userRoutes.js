import express from 'express'
import {
    createUserHandler,
    getAllUserHandler,
    getUserByIdHandler,
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

/**
 * @openapi
 * /api/v1/users/{id}:
 *   get:
 *     summary: Get a user by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The user ID
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: User not found
 */
router.get('/users/:id', getUserByIdHandler)

export default router
