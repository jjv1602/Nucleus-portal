const asyncHandler = require('express-async-handler')
const User = require("../models/userModels")

const registerUser = async (req, res) => {

    // taking name,email and pwd from user
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email });
    // If user exists then show error
    if (userExists) {
        res.status(404);
        throw new Error("User already exists");
    }

    // else if user does not exist then create a new for this we use .create function
    const user = await User.create({
        name,
        email,
        password,
    });

    // if user is successfully created that is the input follows the schema then this condition ->if(user)
    if (user) {
        // send response in json file
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            // token: generateToken(user._id),
        });
    } else {
        res.status(400);
        throw new Error("User not found");
    }
    // // Returning name and email to user
    // res.json({
    //     name,
    //     email,
    // });
};
module.exports = { registerUser }