const dns = require('dns')
dns.setServers(['8.8.8.8', '1.1.1.1'])

require('dotenv').config()        
require('express-async-errors')
const express = require('express')
const app = express()

///connecting to the database
const connectDB = require('./db/connect')

// ✅ COMMENT OUT AUTH FOR NOW (until you build it)
const authenticateUser = require('./middleware/authentication')

//routers
const authRouter = require('./routes/auth')
const jobsRouter = require('./routes/jobs')

//error handlers
const notFoundMiddleware = require('./middleware/not-found')  // ✅ Fixed: 'require', not 'requrie'
const errorHandlerMiddleware = require('./middleware/error-handler')

app.use(express.json())

// routes
app.get('/', (req, res) => {
  res.send('jobs api');
});

//routes
app.use('/api/v1/auth', authRouter)


app.use('/api/v1/jobs',authenticateUser ,jobsRouter)  // ← No auth for now

// app.use(notFoundMiddleware)
// app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => {
            console.log(`server is listening on port ${port}....`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()