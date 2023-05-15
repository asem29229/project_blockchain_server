import express from "express"
import mongoose from "mongoose"
import userAuth from "../../models/user-auth.js"

const routerUser = express.Router()

//Add new user to data base
routerUser.post('/AddUser', async (req, res) => {
    console.log(req.body)
    try {
        // Check if email already exists
        const existingUser = await userAuth.findOne({ email: req.body.email });
        if (existingUser) {
            return res.send("This email already exists");
        }

        const newUser = new userAuth({
            firstName: req.body.firstName,
            lastName:req.body.lastName,
            email: req.body.email,
            password: req.body.password,
        });

        await newUser.save();
        res.send("User added");
    } catch (error) {
        console.error(error);
        res.status(500).send("Error adding user");
    }
});



export default routerUser;
