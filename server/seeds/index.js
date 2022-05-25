const db = require("../config/connection")
const {User,Category,Payment,Class} =require("../models")

const userData =require("./userData")
const categoryData = require("./categoryData.json")
const classData = require("./classData.json")
const paymentData = require("./paymentData.json")

db.once("open", async()=>{
    //Delete all previous data
    await User.deleteMany()
    await Category.deleteMany()
    await Class.deleteMany()
    
    //bulk create and populate all models
    const users=await User.insertMany(userData)
    const categories=await Category.insertMany(categoryData)
    const classes = await Class.insertMany(classData)
    console.log("flag 1");
    for (newClass of classes){
        const tempCategory = categories[Math.floor(Math.random()*categories.length)]
        newClass.category=tempCategory._id
        await newClass.save()
    }
    console.log("finished seeding");
    process.exit(0)
})