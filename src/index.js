import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import userRoutes from './routes/userRoutes.js'
import swaggerDocs from './utils/swagger.js'
import { openConnection } from './config/db.js'
// Load environment variables from .env file
dotenv.config()

// eslint-disable-next-line no-undef
const port = process.env.PORT || 3000

const app = express()
app.use(express.json())
app.use(morgan('dev'))
app.use('/api/v1', userRoutes)

app.get('/', (req, res) => {
  res.send('Server started!')
})
openConnection()
app.listen(port, () => {
  console.log(`Express is listening at http://localhost:${port}`)
  swaggerDocs(app, port)
})
