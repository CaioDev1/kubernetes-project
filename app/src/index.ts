import dotenv from 'dotenv'
import express from 'express'
import routes from './routes'

dotenv.config()

const app = express()

app.use(routes)

const PORT = process.env.APP_PORT

console.log(process.env)

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))