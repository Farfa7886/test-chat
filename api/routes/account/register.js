const express = require("express");
const router = express.Router();
const User = require("../../models/user.js")
const jwt = require("jsonwebtoken")
const config = require("../../config").apiConfigiguration

router.post("/register", async (req, res) => {
    const { username, password } = req.body;
    try {
        const newUser = await User.create({ username, password });
        jwt.sign({ userId: newUser._id }, config.jwt_secret, {}, (err, token) => {
            if (err) {
                console.error ("[FAILURE] Failed to sign Json Web Token (" + err + ")")
                throw err
            };
            res.cookie("token", token).status(201).json({ 
                sucess: true, 
                message: "Token created",
                id: newUser._id
            });
        });
    } catch (e) {
        if (e) throw e;
        res.status(500).json('error');
    }
});

module.exports = router;