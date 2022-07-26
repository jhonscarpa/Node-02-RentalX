import express from 'express'

import { categoriesRoutes } from './routes/categories.routes'

const app = express()
app.use(express.json())
app.use('/categories', categoriesRoutes)

app.listen(8080, () => console.log('Server started on port 8080 🚀🚀🚀'))
