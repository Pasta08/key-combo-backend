import mongoose from 'mongoose'
// import { dbLoggerMiddleware } from '../utils/dbLoggerMiddleware.js'
/**
 * @openapi
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         -first_name
 *         -last_name
 *         - username
 *         - email
 *         - password
 *       properties:
 *         username:
 *           type: string
 *           description: The user's username
 *         first_name:
 *           type: string
 *           description: The user's first name
 *         last_name:
 *           type: string
 *           description: The user's surname
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
 *         first_name: johndoe
 *         last_name: johndoe
 *         email: john@example.com
 *         password: hashedpassword123
 */
const userSchema = new mongoose.Schema(
    {
        username: { type: String, required: true },
        first_name: { type: String, required: true },
        last_name: { type: String, required: true },
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

export const createUser = async (userData) => {
    try {
        const newUser = new User({
            username: userData.username,
            first_name: userData.first_name,
            last_name: userData.last_name,
            email: userData.email,
            password: userData.password,
            score: userData.score,
            combo_duration_in_seconds: userData.combo_duration_in_seconds,
            total_key_pressed: userData.total_key_pressed
        });

        const savedUser = await newUser.save();
        
        console.log('User created successfully:', savedUser);
        return savedUser;
    } catch (error) {
        console.error('Error creating user:', error);
        throw error;
    }
}
export default User
