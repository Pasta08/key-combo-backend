import express from 'express'
import {
    createUserHandler,
    getAllUserHandler,
    getUserByIdHandler,
} from '../controller/userController.js'

/**
 * @openapi
 * tags:
 *   name: Users
 *   description: User management and retrieval
 * 
 * /api/v1/users:
 *   post:
 *     tags: [Users]
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
 *   get:
 *     tags: [Users]
 *     summary: Get all users
 *     description: Retrieve a list of all users
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 * 
 * /api/v1/users/{id}:
 *   get:
 *     tags: [Users]
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
 * 
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - username
 *         - first_name
 *         - surname
 *         - email
 *         - password
 *       properties:
 *         username:
 *           type: string
 *         first_name:
 *           type: string
 *         surname:
 *           type: string
 *         email:
 *           type: string
 *           format: email
 *         password:
 *           type: string
 *         score:
 *           type: number
 *           default: 0
 *         combo_duration_in_seconds:
 *           type: number
 *           default: 0
 *         total_key_pressed:
 *           type: number
 *           default: 0
 *         created_at:
 *           type: string
 *           format: date-time
 */

const router = express.Router()

router.post('/users', createUserHandler)
router.get('/users', getAllUserHandler)
router.get('/users/:id', getUserByIdHandler)

export default router