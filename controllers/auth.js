const User = require('../models/User')
const { StatusCodes } = require('http-status-codes')
const bcrypt = require('bcryptjs')  // ← FIXED: 'bcrypt' not 'bycrypt'

const register = async (req, res) => {
    const { name, email, password } = req.body

    const salt = await bcrypt.genSalt(10)          // ← FIXED: 'bcrypt' not 'bycrypt'
    const hashedPassword = await bcrypt.hash(password, salt)  // ← FIXED: 'bcrypt' not 'bycrpt'
    const tempUser = { name, email, password: hashedPassword }

    const user = await User.create({ ...tempUser })
    res.status(StatusCodes.CREATED).json({ user })
}

const login = async (req, res) => {
    res.send('login user')
}

module.exports = {
    register,
    login,
}