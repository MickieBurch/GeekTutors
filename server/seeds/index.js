const db = require("../config/connection")
const {User, Article, Tutor} =require("../models")

const tutorData = require("./tutorData.json")
const articleData=require("./articleData.json")
const userData= require("./userData.json")
db.once("open", async()=>{
    //Delete all previous data
    await User.deleteMany()
    await Article.deleteMany()
    await Tutor.deleteMany()
    //bulk create and populate all models
    const users=await User.insertMany(userData)
    const articles = await Article.insertMany(articleData)
    const tutors = await Tutor.insertMany(tutorData)

    for (newUser of users){
        if (!newUser.isTutor){
            console.log("newUser isn't a proctor");
            newUser.selectedTutor = tutors[Math.floor(Math.random()*tutors.length)]._id
            await newUser.save()
            console.log("user got asssigned random subject:");
            console.log(newUser);
        }
    }
    for (newTutor of tutors){
        let index = Math.floor(Math.random()*articles.length)
        newTutor.articles[0]=articles[index]._id
        articles[index].tutorId=newTutor._id
        await newTutor.save()
        await articles[index].save()
    }

    console.log("finished seeding. all data: ");
    console.log("users:",users);
    console.log("articles:",articles);
    console.log("tutors:",tutors);
    process.exit(0)
})