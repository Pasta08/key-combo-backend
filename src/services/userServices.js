// userController.js
import { openConnection, closeConnection } from '../config/db.js'
import { findAllUsers, findUserById } from '../models/userModel.js'
// eslint-disable-next-line no-unused-vars
export const createUser = async (req, res) => {
    console.log('chiamo')
}

export const findAllUsersService = async (req, res) => {
    await openConnection()
    try {
        const allUsers = await findAllUsers()
    } catch (error) {
        console.error('Error retrieving user:', error)
        res.status(500).json({ message: 'Internal server error' })
    } finally {
        closeConnection()
    }
}
