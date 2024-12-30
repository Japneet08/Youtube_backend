// const asyncHandler=(requestHandler)=>{
//  (req,res,next)=>{
//   Promise.resolve(requestHandler(req,res,next)).catch((err=>{next(err)}))
//  }
// }


//async handler is a higher level function -> a function taht can accept another function as a parameter and return it as well
// ()=>{}
  // ()=>{()=>{}} -> pass a function to another function
  //  ()=> async ()=>{}


// the functiono passed will have a req,res,next->
// adding async and try catch wrapper to the functions
const asyncHandler=(fn)=> async (req,res,next)=>{
  try {
    await fn(req,res,next)
  } catch (error) {
    console.error("😔Error encountered😔",error)
    res.status(error.code||500).json({
      success:false,
      message:"error encountered"
    })
    
  }

}

module.exports=asyncHandler












// const asyncHandler=(fn)=>async(req,res,next)=>{
//   try{
//     await fn(req,res,next)

//   }
//   catch(error){
//     res.status(error.code||500).json({
//       success:false,
//       message:error.message
//     })
//   }
// }