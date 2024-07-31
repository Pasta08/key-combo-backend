// userController.js
import { openConnection, closeConnection } from '../config/db.js'
import { findAllUsers, findUserById, createUser } from '../models/userModel.js'

export const findAllUsersService = async (req, res) => {
    await openConnection()
    try {
        const allUsers = await findAllUsers()
        console.log(allUsers)
        return allUsers
    } catch (error) {
        console.error('Error retrieving user:', error)
        res.status(500).json({ message: 'Internal server error' })
    } finally {
        closeConnection()
    }
}
export const findUserByIdService = async (id) => {
    await openConnection()
    try {
        const user = await findUserById(id)
        return user
    } catch (error) {
        console.error('Error retrieving user:', error)
    } finally {
        closeConnection()
    }
}
export const createUserService = async (userData) => {
    console.log(userData)
    await openConnection()
    try {
        const user = await createUser(userData)
        return user
    } catch (error) {
        console.error('Error creating user:', error)
    } finally {
        closeConnection()
    }
}
