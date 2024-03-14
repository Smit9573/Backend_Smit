const { userModal } = require('../model/index')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const bcrypt  = require("bcrypt")

const creatUser = async(req, res) => {
    const body = req.body
    console.log(body);
    try {
        const bcryptPassword = await bcrypt.hash(body.password, 10)
        console.log(bcryptPassword);
        const newAddUser = await userModal.create({
            name: body.name,
            email:body.email,
            password: bcryptPassword
        })
        res.json({message:'New User Created Sucessfully!', data:newAddUser}) 
    } catch (error) {
        return res.status(400).send(error)
    }
}

const getUser = async (req, res) => {
    const allUserData = await userModal.find({})
    res.json({message:'All User Get Sucessfully!', data:allUserData}) 
}

const updateUser = async (req, res) => {
    const body = req.body
    const updatedUser = await userModal.findByIdAndUpdate(body._id, { $set: {password : body.password} }, { new: true })
    res.json({message:'Update User Sucessfully!', data:updatedUser}) 
}

const deleteUser = async (req, res) => {
    const body = req.body
    const deletedUser = await userModal.findByIdAndDelete(body._id)
    res.json({ message: 'Delete User Sucessfully!', data: deletedUser})
}

const login = async (req, res) => {
    const user = await userModal.findOne({ email: req.body.email })
    if (!user) {
        res.status(404).json({ message: "User Not Found" })
    }
    if (req.body.password !== user.password) {
        res.status(401).json({message: "Password is Incorrect!"})
    }
    const tokenData = {
        _id: user._id
    }
    const token = jwt.sign(tokenData, process.env.SECRET_KEY)
    await userModal.updateOne({_id: user._id}, { $set: { token: token } })
    res.json({token})
}

module.exports = {
    creatUser,
    getUser,
    updateUser,
    deleteUser,
    login
}

