const dns = require('dns')
dns.setServers(['8.8.8.8', '1.1.1.1'])

require('dotenv').config()                    // ✅ FIXED: 'require' not 'equire'
require('express-async-errors')
const express = require('express')
const app = express()

app.use(express.json())

const authRouter = require('./routes/auth')
const jobsRouter = require('./routes/jobs')

//error handlers
// const notFoundMiddleware = require('./middleware/not-found')
// const errorHandlerMiddleware = require('./middleware/error-handler')

const connectDB = require('./db/connect')

//routes
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/jobs', jobsRouter)

// app.use(notFoundMiddleware)
// app.use(errorHandlerMiddleware)

const port = process.env.PORT || 3000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => {
            console.log(`server is listening on port ${port}...`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()