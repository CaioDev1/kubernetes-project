import dotenv from 'dotenv'
import dotenvExpand from 'dotenv-expand'
import express from 'express'
import cors from 'cors'
import routes from './routes'
import { handler } from './middlewares/errorHandler'

const env = dotenv.config()
dotenvExpand.expand(env)

const app = express()

app.use(express.json())
app.use(cors())
app.use(routes)
app.use(handler)

const PORT = process.env.APP_PORT

console.log(process.env)

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))