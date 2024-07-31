import mongoose from 'mongoose'

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

const User = mongoose.model('User', userSchema)

export const findAllUsers = async () => {
    try {
        console.log('Attempting to find users...')
        console.log('Current database:', mongoose.connection.db.databaseName)
        console.log('Current collection:', User.collection.name)

        const users = await User.find()
        console.log(`Found ${users.length} users`)
        return users
    } catch (error) {
        console.error('Error finding users:', error)
        throw error
    }
}
export const findUserById = async () => {
    try {
        console.log('Attempting to find users...')
        console.log('Current database:', mongoose.connection.db.databaseName)
        console.log('Current collection:', User.collection.name)

        const user = await User.findById('66a94708b0964ddb73910f4b')
        console.log(`Found ${user}`)
        return user
    } catch (error) {
        console.error('Error finding users:', error)
        throw error
    }
}

export default User
