import {
    createUserService,
    findAllUsersService,
    findUserByIdService,
} from '../services/userServices.js'


export async function getAllUserHandler(req, res) {
    try {
        const users = await findAllUsersService()
        res.status(200).json({
            status: 'success',
            message: 'Users retrieved successfully',
            data: {
                users: users
            },
            count: users.length
        })
    } catch (error) {
        console.error('Error retrieving users:', error)
        res.status(500).json({
            status: 'error',
            message: 'An error occurred while retrieving users',
            error: error.message
        })
    }
}
export async function getUserByIdHandler(req, res) {
    const userId = req.params.id
    try {
        const user = await findUserByIdService(userId)
        if (!user) {
            return res.status(404).json({
                status: 'fail',
                message: 'User not found',
                data: null
            })
        }
        console.info('Found user with id:', userId)
        res.status(200).json({
            status: 'success',
            message: 'User retrieved successfully',
            data: {
                user: user
            }
        })
    } catch (error) {
        console.error('Error retrieving user:', error)
        res.status(500).json({
            status: 'error',
            message: 'An error occurred while retrieving the user',
            error: error.message
        })
    }
}

export async function createUserHandler(req, res) {
    try {
        const userData = req.body;  // Assuming the user data is sent in the request body
        const newUser = await createUserService(userData);
        res.status(201).json({
            status: 'success',
            message: 'User created successfully',
            data: {
                user: newUser
            }
        });
    } catch (error) {
        console.error('Error in createUserHandler:', error);
        if (error.code === 11000) {  // MongoDB duplicate key error
            res.status(409).json({
                status: 'fail',
                message: 'A user with this email already exists',
                error: error.message
            });
        } else {
            res.status(400).json({
                status: 'error',
                message: 'Failed to create user',
                error: error.message
            });
        }
    }
}