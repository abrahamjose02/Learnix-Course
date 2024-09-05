import mongoose,{Model,Schema} from "mongoose";
import 'dotenv/config'
import { Course } from "../course.entities";

const commentSchema = new Schema<any>(
    {
        user:Object,
        question:String,
        questionReplies:[Object]
    },
    {
        timestamps:true
    }
);

const reviewSchema = new Schema<any>(
    {
        user:Object,
        rating:{
            type:Number,
            default:0
        },
        comment:String,
        commentReplies:[Object]
    },
    {
        timestamps:true
    }
)

const CourseSchema:Schema<Course> = new Schema(
    {
        instructorId: { 
            type: String,
             required: true 
            },
         name: { 
            type: String, 
            required: true 
        },
         description: { 
            type: String, 
            required: true 
        },
         price: { 
            type: String,
             required: true 
            },
         estimatedPrice: { 
            type: String,
             required: true
             },
        tags: { 
            type: String,
             required: true 
            },
         level: { 
            type: String, 
            required: true 
        },
         demoUrl: {
          type: String,
             required: true 
            },
        category: {
            type: String
        },
         subtitleUrl: { 
            type: String
         },
        totalVideos: { 
            type: String,
             required: true 
            },
         benefits: [{
             title: String
             }],
        prerequisites: [{ 
            title: String 
        }],
         courseContentData: [
      {
        videoUrl: String,
        subtitleUrl: String,
        title: String,
        description: String,
        videoSection: String,
        links: [{ title: String, url: String }],
        suggestion: String,
        questions: [commentSchema],
      },
    ],
    thumbnail: {
      type: String,
    },
    reviews: [reviewSchema],

    ratings: {
      type: Number,
      default: 0,
    },
    purchased: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
    
)

const CourseModel:Model<Course> = mongoose.model("Course",CourseSchema);
export default CourseModel;