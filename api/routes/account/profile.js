const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const config = require("../../config").apiConfigiguration



router.get("/profile", (req, res) => {
    const token = req.cookies?.token;
    if (token) {
        jwt.verify(token, config.jwt_secret, {}, (err, userData) => {
            if (err) {
                console.error("[FAILURE] Failed to validate Json Web Token (" + err + ")");
            } else {
                const { id, username } = userData;
                res.json(userData);
            }
        });
    } else {
        res.status(401).json({
            "error": "No token"
        })
    }
})

module.exports = router;