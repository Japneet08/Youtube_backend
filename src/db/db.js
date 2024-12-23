const mongoose=require('mongoose')
const { dbname } = require('../constants.js');
require('dotenv').config()

// make a function to connect db
const connectDB= async()=>{
  try{
   const connectionInstance= await mongoose.connect(`${process.env.mongodb_uri}/${dbname}`)
   console.log(`\n MONGODB CONNECTED !! DB HOST :  ${connectionInstance.connection.host} \n MONGODB CONNECTED !! DB NAME :  ${connectionInstance.connection.name}`)
  }

  catch(error){
    console.error(" MONGO_DB CONNECTION FAILED : ",error)
    process.exit(1)
  }
}

module.exports=connectDB