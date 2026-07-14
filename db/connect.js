const mongoose = require('mongoose')

const connectDB = (url) => {
    return mongoose.connect(url, {
        serverSelectionTimeoutMS: 5000,
        socketTimeoutMS: 45000,
        maxPoolSize: 10,
        family: 4,
        retryWrites: true,
        retryReads: true,
    })
    .then(() => console.log('✅ Connected to Database'))
    .catch((err) => console.log('❌ Database Connection Error:', err.message))
}

module.exports = connectDB