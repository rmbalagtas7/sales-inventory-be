const User = require("../models/users");
const jwt = require("jsonwebtoken");

exports.auth = async (req, res) => {
    try {
        const user = await User.findOne({ $or: [{ email: req.body.email }, { username: req.body.email }] })

        if (!user) {
            return res.send({ success: false, message: 'Cannot find a user with that account' })
        }

        const match = await user.comparePassword(req.body.password)
        if (!match) {
            return res.send({ success: false, message: "Invalid Login Credentials" })
        }

        const access_token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: 86400
        })

        res.send({ success: true, access_token, user })
    } catch (error) {
        console.log(error)
        res.send({ success: false, error })
    }
}