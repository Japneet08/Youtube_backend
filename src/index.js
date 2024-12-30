const connectDB=require('../src/db/db')
require('dotenv').config({path:'./env'})
const app=require("./app")
// const express=require('express')
// const app= express()
connectDB()
.then(()=>{
  app.listen(process.env.port||8000,()=>{
    console.log(`server is running at port ${process.env.port}`)
  })
})
.catch((error)=>{
  console.log(error.message)
})