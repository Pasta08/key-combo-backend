import mongoose from 'mongoose'
// import { dbLoggerMiddleware } from '../utils/dbLoggerMiddleware.js'
/**
 * @openapi
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - username
 *         - email
 *         - password
 *       properties:
 *         username:
 *           type: string
 *           description: The user's username
 *         email:
 *           type: string
 *           format: email
 *           description: The user's email address
 *         password:
 *           type: string
 *           description: The user's password (hashed)
 *         score:
 *           type: number
 *           description: The user's score
 *           default: 0
 *         combo_duration_in_seconds:
 *           type: number
 *           description: Duration of the user's combo in seconds
 *           default: 0
 *         total_key_pressed:
 *           type: number
 *           description: Total number of keys pressed by the user
 *           default: 0
 *         created_at:
 *           type: string
 *           format: date-time
 *           description: The timestamp when the user was created
 *       example:
 *         username: johndoe
 *         email: john@example.com
 *         password: hashedpassword123
 *         score: 100
 *         combo_duration_in_seconds: 60
 *         total_key_pressed: 500
 *         created_at: '2023-06-07T10:00:00Z'
 */
const userSchema = new mongoose.Schema(
    {
        username: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        score: { type: Number, default: 0 },
        combo_duration_in_seconds: { type: Number, default: 0 },
        total_key_pressed: { type: Number, default: 0 },
        created_at: { type: Date, default: Date.now },
    },
    { collection: 'User' }
)
// dbLoggerMiddleware(userSchema)

const User = mongoose.model('User', userSchema)

export const findAllUsers = async () => {
    try {
        const users = await User.find()
        return users
    } catch (error) {
        console.error('Error finding users:', error)
        throw error
    }
}
export const findUserById = async (_id) => {
    try {
        const user = await User.findById(_id)
        return user
    } catch (error) {
        console.error('Error finding users:', error)
        throw error
    }
}

export default User
