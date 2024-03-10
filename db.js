const mongoose = require("mongoose")

function connect(){
    return new Promise( (resolve, reject) => {
        mongoose.connect("mongodb://localhost/otp_verification")

        const db = mongoose.connection

        db.on("error", error =>{
            console.log('Database connection error: ', error)
            reject(error)
        })
        
        db.once('open', () => {
            console.log("Connected to database")
            resolve()
        })
    })
}

module.exports = {connect}