const {Schema,model} = require("mongoose")

const subjectSchema= new Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    proctor:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:"User"
    },
    description:{
        type:String,
        required:true,
        trim:true
    }
})

const Subject= model("Subject",subjectSchema)
module.exports=Subject