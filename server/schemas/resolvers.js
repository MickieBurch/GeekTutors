const { AuthenticationError } = require('apollo-server-express');
const { User, Tutor, Article } = require('../models');
const { signToken, authMiddleware } = require('../utils/auth');

const resolvers = {
  Query: {
    GetCurrentUser:async(parent,{token})=>{
      try {
        const user= authMiddleware(token)
        if(user){
          return await User.findById(user._id).populate("artices")
        }
        throw new AuthenticationError("invalid token")
      } catch (error) {
        console.log(error);
        return error
      }
    },  
    GetAllUsers:async(parent,{token})=>{
      try {
        const user=true
        if(user){
          return await User.find().populate("selectedTutor").populate("articles")
        }
        throw new AuthenticationError("invalid token")
      } catch (error) {
        console.log(error);
        return error
      }
    },
    GetAllArticles:async(parent,{token})=>{
      try {
        const user = true
        if (user){
          return await Article.find()
        }
        throw new AuthenticationError("invalid token")
      } catch (error) {
        console.log(error);
        return error
      }
    },
    GetArticleById:async(parent,{token,id})=>{
      try {
        const user = authMiddleware(token)
        if(user){
          return await Article.findById(id)
        }
        throw new AuthenticationError("invalid token")
      } catch (error) {
        console.log(error);
        return error
      }
    },
    GetArticlesByUserId:async(parent,{token,Id})=>{
        try {
          const user = true
          if(user){
            return await Article.find({tutorId:Id})
          }
          throw new AuthenticationError("invalid token")
        } catch (error) {
          console.log(error);
          return error
        }
    }
  },
  Mutation: {
    createUser: async (parent, {firstName,lastName,email,password}) => {
      const user = await User.create({
        firstName:firstName,
        lastName:lastName,
        email:email,
        password:password
      });
      const token = signToken(user);

      return { token, user };
    },
    enrollStudent: async (parent, {token,tutorId}) => {
      try {
        const user=authMiddleware(token)
        if (user) {
        return await User.findByIdAndUpdate(user.id, {selectedTutor:tutorId}, { new: true });
        }
      throw new AuthenticationError('Not logged in');
      } catch (error) {
        console.log(error);
        return error
      }
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }
      const token = signToken(user);
      return { token, user };
    }
  }
};

module.exports = resolvers;
