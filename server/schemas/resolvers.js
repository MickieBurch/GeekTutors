const { AuthenticationError } = require('apollo-server-express');
const { User, Subject, Article } = require('../models');
const { signToken, authMiddleware } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
  Query: {
    GetCurrentUser:async(parent,{token})=>{
      const user= authMiddleware(token)
        if(user){
          return await User.find(user._id).populate({
            path:"Subject",
            populate:({path:"Article"})
          })
        }else{
          throw new AuthenticationError("invalid token")
        }
    },  
    GetAllUsers:async(parent,{token})=>{
        console.log("Printing everything");
        const user= authMiddleware(token)
        if(user){
            return await User.find().populate({
            path:"enrolledSubject",
            populate:({
              path:"articles"
            })
          })
        }
        throw new AuthenticationError("invalid token")
    }
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, { new: true });
      }

      throw new AuthenticationError('Not logged in');
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
