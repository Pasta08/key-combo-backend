import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

// eslint-disable-next-line no-undef
const mongoUri = process.env.MONGO_URI

if (!mongoUri) {
    throw new Error('Missing MONGO_URI environment variable')
}

export const openConnection = async () => {
    try {
        await mongoose.connect(mongoUri, {
            dbName: 'k-combo-db', // Explicitly specify the database name
        })
        console.log('Connected to MongoDB')
    } catch (error) {
        console.error('Error connecting to MongoDB:', error)
        throw error
    }
}

export const closeConnection = async () => {
    try {
        await mongoose.connection.close()
        console.log('Closed MongoDB connection')
    } catch (error) {
        console.error('Error closing MongoDB connection:', error)
        throw error
    }
}

export const getDatabaseInfo = async () => {
    const db = mongoose.connection.db
    const collections = await db.listCollections().toArray()
    return {
        databaseName: db.databaseName,
        collections: collections.map((col) => col.name),
    }
}
