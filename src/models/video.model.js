const mongoose=require('mongoose')
var aggregatePaginate = require("mongoose-aggregate-paginate-v2");
const videoSchema= new mongoose.Schema(
  {
    videoFile:{
      type:String,//cloudinary url
      required:true
    },
    thumbnail:{
      type:String,
      required:true
    },
    title:{
      type:String,
      required:true
    },
    description:{
      type:String,
      required:true
    },
    duration:{
      type:Number,// we will get from cloudinary 
      required:true
    },
    views:{
      type:Number,
      default:0
    },
    isPublished:{
      type:Boolean,
      default:true
    },
    owner:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"user"
    }

  },{timestamps:true}
)
videoSchema.plugin(aggregatePaginate)

module.exports=mongoose.model("video",videoSchema)