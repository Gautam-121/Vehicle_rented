const mongoose = require("mongoose")

const mongooseConnection = ()=>{

    mongoose.connect( process.env.DB_URL , {
        useNewUrlParser : true
    })
    .then(data => console.log(`mongoose connection made on ${data.connection.host}`))
    .catch(err => console.log(err))
}

module.exports = mongooseConnection