const express = require("express")
const app = express()


app.use(express.json())
app.use(cookieParser())
app.use(cors())

const UserRouter = require("./router/UserRouter.js")



module.exports = app