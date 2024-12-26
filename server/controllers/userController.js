const User = require('../models/user')

exports.getUser = async (req, res) => {
  try {
    const userId = req.body.userId
    const user = await User.findById(userId)

    if (!user) {
      return res.status(404).json({ message: "user not found" })
    }
    res.status(200).json({ message: "user found", user: user })
  }
  catch (err) {
    console.error(err);
    res.status(500).json({ message: "internal error" })
  }

}

exports.createUser = async (req, res) => {
  try {
    const newUser = req.body.user
    const checkUser = await User.findById(newUser.id)
    if (checkUser) {
      return res.status(409).json({ message: "Username or email already exists" });

    }
    const newUserCreation = await User.create({

    })
  } catch (err) {
    return res.status(500).json({ message: "internal server error" })
  }
}