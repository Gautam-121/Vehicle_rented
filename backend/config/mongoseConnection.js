const mongoose = require("mongoose")

const mongooseConnection = ()=>{

    mongoose.connect( "mongodb://localhost:27017/rental", {
        useNewUrlParser : true
    })
    .then(data => console.log(`mongoose connection made on ${data.connection.host}`))
    .catch(err => console.log(err))
}

module.exports = mongooseConnection