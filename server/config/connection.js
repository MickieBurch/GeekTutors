const mongoose= require("mongoose")

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/geektutors')
module.exports=mongoose.connection