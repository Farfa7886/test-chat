const express = require('express');
const config = require("./config");

const app = express();

app.get("/", (req, res) => {
    res.send("helleou")
})

app.post("/register", (req, res) => {
    res.json({
        "sucess": false
    })
})

app.listen(config.port, () => {
    console.log("App linstening on port " + config.port + " (http://localhost:" + config.port + ")")
})