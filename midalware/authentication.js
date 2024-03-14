const jwt = require('jsonwebtoken')
const { userModal } = require('../model/index')
require('dotenv').config()

const auth = async (req, res, next) => { 
    try {
        let token = req.headers['authorization']
        token = token.split(' ')[1]
        let data = jwt.verify(token, process.env.SECRET_KEY)
        console.log("🚀 ~ auth ~ data:", data)
        if (!data) {
            return res.status(402).json({message:"Invalid Token"})
        }
        const user = await userModal.findById({ _id: data._id })
        console.log(user);
        if (!token) {
            res.status(401).json({ message: 'Token is missing.' })
        }
        else if (!user || token != user.token) {
            res.status(403).json({ message: "You are not authorized to perform this action." })
        } 
        next()
    } catch (error) {
        console.log("🚀 ~ auth ~ error:", error)
        
        return res.status(500).json({ error:error.message });
    }
        
}

module.exports = auth