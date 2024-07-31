import { MongoClient } from 'mongodb'
import dotenv from 'dotenv';
dotenv.config();
// eslint-disable-next-line no-undef
const mongoUri = process.env.MONGO_URI
if (!mongoUri) {
    throw new Error('Missing MONGODB_URI environment variable');
}
const client = new MongoClient(mongoUri);
export const mongoConnect = async () => {
    
    if(!client) {
        await client.connect()
    }
    return client.db('k-combo-db')

}

export const closeConnection = async () => {
    return client.close()
}

