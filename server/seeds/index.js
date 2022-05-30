const db = require("../config/connection")
const {User, Article, Subject} =require("../models")

const articleData=require("./articleData.json")
const userData= require("./userData.json")
const subjectData= require("./subjectData.json")
db.once("open", async()=>{
    //Delete all previous data
    await User.deleteMany()
    await Article.deleteMany()
    await Subject.deleteMany()
    //bulk create and populate all models
    const users=await User.insertMany(userData)
    const articles = await Article.insertMany(articleData)
    const subjects = await Subject.insertMany(subjectData)

    for (newUser of users){
        if (!newUser.isProctor){
            console.log("newUser isn't a proctor");
            newUser.enrolledSubject = subjects[Math.floor(Math.random()*subjects.length)]
            await newUser.save()
            console.log("user got asssigned random subject:");
            console.log(newUser);
        }
    }
    for (newSubject of subjects){
        newSubject.articles[0]=articles[Math.floor(Math.random()*articles.length)]
        await newSubject.save()
    }
    console.log("finished seeding. all data: ");
    console.log(users);
    console.log(articles);
    console.log(subjects);
    // console.log("flag 1");
    // for (newClass of classes){
    //     const tempCategory = categories[Math.floor(Math.random()*categories.length)]
    //     newClass.category=tempCategory._id
    //     await newClass.save()
    // }
    console.log("finished seeding");
    process.exit(0)
})