const User = require('../models/User')
const register = async (req, res) => {
    res.json(req.body)
}

const login = async (req, res) => {
    res.send('login user')
}

module.exports = {  // ✅ Correct! (with 's')
    register,
    login,
}