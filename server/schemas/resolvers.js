const resolvers={
    Query:{
        CurrentUser:async(parent,{token})=>{
            return null
        }
    }
}
module.exports=resolvers
