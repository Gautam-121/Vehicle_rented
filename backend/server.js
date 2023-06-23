const app = require("./app.js")
const dotenv = require("dotenv")
const mongooseConnection = require("./config/mongoseConnection.js")

process.on("uncaughtException" , (err)=>{
    console.log(`Error is ${err}`)
    console.log(`Shutting down due to Unhandled Exception Error`)

    process.exit(1)
})

//Set environment Configration
dotenv.config({path : "backend/config/.env"})

//Made connection with mongoDb
mongooseConnection()

const server = app.listen(process.env.PORT || 3000 , ()=>{
    console.log(`Server running on ${process.env.PORT || 3000}`)
})

process.on("uncaughtException" , (err)=>{
    console.log(`Error is ${err}`)
    console.log(`Shutting down due to Unhandled Exception Error`)

    server.close(()=>{
        process.exit(1)
    })
})