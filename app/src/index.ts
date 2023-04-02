import express from 'express'
import routes from './routes'

const app = express()

app.use(routes)

const PORT = process.env.APP_PORT

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))