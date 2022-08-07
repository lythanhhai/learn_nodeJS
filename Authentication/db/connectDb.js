const mongoose = require("mongoose")

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.URI_MONGODB)
        console.log("Connect DB successfully!")
    }
    catch(err){
        console.log(err)
    }
}

module.exports = connectDB