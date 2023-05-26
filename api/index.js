const express = require('express');
const config = require("./config").apiConfigiguration;
const mongoose = require("mongoose");
const cors = require("cors");

const User = require("./models/user");

mongoose.connect(config.mongoDb.getDatabaseUrl()).then(
    () => { console.log("[SUCCESS] Connection to database") },
    err => { console.error("[FAILURE] Connnection to database (" + err + ")")}
)

const app = express();

app.use(cors({
    credentials: true,
    optionsSuccessStatus: 200,
    origin: "http://localhost:5173"
}))

app.use(express.json())

app.get("/", (req, res) => {
    res.send("/account/register")
})

app.use("/account/", require("./routes/account/register"));
app.use("/account/", require("./routes/account/profile"));

app.listen(config.port, () => {
    console.log("[SUCCESS] Started app on port " + config.port + " (http://localhost:" + config.port + ")")
})