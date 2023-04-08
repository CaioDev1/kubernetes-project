import dotenv from 'dotenv'
import dotenvExpand from 'dotenv-expand'
import express from 'express'
import routes from './routes'

const env = dotenv.config()
dotenvExpand.expand(env)

const app = express()

app.use(routes)

const PORT = process.env.APP_PORT

console.log(process.env)

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))