// const config = require("./config").apiConfigiguration;

require("dotenv").config()

const apiConfigiguration = {
    "port": 8080,
    "mongoDb": {
        username: "api",
        password: process.env.MONGO_PASSWORD,
        getDatabaseUrl: () => {
            return `mongodb+srv://${apiConfigiguration.mongoDb.username}:${apiConfigiguration.mongoDb.password}@cluster0.0zprl1l.mongodb.net/?retryWrites=true&w=majority`
        }
    },
    "jwt_secret": process.env.JWT_SECRET
}

module.exports = { apiConfigiguration }