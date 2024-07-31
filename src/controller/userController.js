import {
    findAllUsersService,
    findUserByIdService,
} from '../services/userServices.js'

export async function createUserHandler(req, res) {
    console.log(req, res)
    console.log('ciao')
    // }
}
export async function getAllUserHandler(req, res) {
    try {
        const userId = await findAllUsersService()
        res.status(201).json({
            message: 'User retrieved succesfully',
            data: userId
        })
    } catch (error) {
        console.error('Error creating user:', error)
        res.status(400).json({ message: error.message })
    }
}
export async function getUserByIdHandler(req, res) {
    const userId = req.params.id
    try {
        const user = await findUserByIdService(userId)
        console.info('Found user with id: ' + userId)
        console.log(user)
        res.status(201).json({ message: 'User retrieved succesfully' })
    } catch (error) {
        console.error('Error creating user:', error)
        res.status(400).json({ message: error.message })
    }
}
