const db = require("../config/connection")
const {User, Article} =require("../models")

const articleData=require("./articleData.json")
const userData= require("./userData.json")
db.once("open", async()=>{
    //Delete all previous data
    await User.deleteMany()
    await Article.deleteMany()
    //bulk create and populate all models
    const users=await User.insertMany(userData)
    const articles = await Article.insertMany(articleData)

    for (newUser of users){
        if (!newUser.isTutor){
            console.log("newUser isn't a proctor");
            newUser.selectedTutor = users[0]._id
            await newUser.save()
        }else{
            let index = Math.floor(Math.random()*articles.length)
            newUser.articles[0]=articles[index]._id
            articles[index].tutorId=newUser._id
            await newUser.save()
            await articles[index].save()
        }
    }
    console.log("finished seeding. all data: ");
    console.log("users:",users);
    console.log("articles:",articles);
    process.exit(0)
})