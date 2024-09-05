import mongoose from "mongoose";
import { ICourseRepository } from "../interface/ICourse.Repository";
import { Course } from "../modal/course.entities";
import CourseModel from "../modal/schema/course.schema";

export class CourseRepository implements ICourseRepository{

    async createCourse(data: Course): Promise<Object | null> {
        try {
            const course = await CourseModel.create(data);
            return course
        } catch (e:any) {
            throw new Error('db error')
        }
    }

    async getCourses(instructorId: string): Promise<Course[] | null> {
        try {
            const courses = await CourseModel.find({instructorId:instructorId});
            return courses;            
        } catch (e:any) {
            throw new Error('db error')
        }
    }

    async updateCourses(id: string, data: Course): Promise<Object | null> {
        try {
            const course = await CourseModel.findByIdAndUpdate(id,data);
            return {success:true}
        } catch (e:any) {
            throw new Error("db error");
        }
    }

    async deleteCourses(courseId: string): Promise<Object | null> {
        try {
            const response = await CourseModel.findByIdAndUpdate(courseId);
            return {success:true}
        } catch (e:any) {
            throw new Error("db error");
        }
    }

     async getCourseWop(courseId: string): Promise<Course | null> {
        try {
            const response = await CourseModel.findById(courseId).select(
                "-courseData.videoUrl -courseData.links"
            );
            return response;
        } catch (e:any) {
            throw new Error("db error");
        }
    }

    async getAllCourses(): Promise<Course[] | null> {
        try {
            const response = await CourseModel.find().select(
                "-courseData.videoUrl -courseData.links"
              );
              return response;
        } catch (e:any) {
            throw new Error("db error");
        }
    }

    async getTrendingCourses(): Promise<any[] | null> {
        try {
            const response = await CourseModel.find()
                .sort({purchased:-1})
                .limit(6)
                .select("thumbnail purchased name description price");
            
            return response;
        } catch (e:any) {
            throw new Error("db error");
        }
    }

    async updatePurchaseCount(courseId: string): Promise<Object | null> {
        try {
            const response = await CourseModel.findByIdAndUpdate(courseId,{
                $inc:{purchased:1},
            });
            return {success:true}
        } catch (e:any) {
            throw new Error("db error");
        }
    }

    async getCourseContent(courseId: string): Promise<Course | null> {
        try {
            const response = await CourseModel.findById(courseId);
            return response;
        } catch (e:any) {
            throw new Error("db error");
        }
    }
    async addQuestion(data: any): Promise<Object | null> {
        try {
            const course = await CourseModel.findById(data.courseId);
            const courseContent = course?.courseContentData?.find((item) =>
        item._id.equals(data.contentId)
      );
            courseContent?.questions.push(data.questionList);
            await course?.save();
             return { success: true };
        } catch (e:any) {
            throw new Error('db error')
        }
    }

   async addAnswer(data: any): Promise<Object | null> {
        try {
            const course = await CourseModel.findById(data.courseId);
      const courseContent = course?.courseContentData?.find((item) =>
        item._id.equals(data.contentId)
      );
      const question = courseContent?.questions.find((item: any) =>
        item._id.equals(data.questionId)
      );
      question.questionReplies.push(data.answerList);
      await course?.save();
      return { success: true };
        } catch (e:any) {
            throw new Error("db error");
        }
    }

   async addReview(data: any): Promise<Object | null> {
        try {
            const course = await CourseModel.findById(data.courseId);
      data.reviewList.user = { ...data.reviewList.user, _id: data.userId };
      course?.reviews?.push(data.reviewList);
      let avg = 0;
      course?.reviews?.forEach((rev: any) => {
        avg += rev.rating;
      });
      if (course && course.reviews) {
        course.ratings = avg / course.reviews.length;
      }
      await course?.save();
      return { success: true };
        } catch (e:any) {
            throw new Error("db error");
        }
    }

    async searchCourse(searchTerm: string): Promise<Course[] | null> {
        try {
            const courses = await CourseModel.find({
               $or:[
                { name: { $regex: searchTerm, $options: "i" } },
                { tags: { $regex: searchTerm, $options: "i" } } 
               ]
              }).select("name thumbnail description");
              return courses;
        } catch (e:any) {
            throw new Error("db error");
        }
    }

    async getUserCourses(courseIds: string[]): Promise<Course[] | null> {
        try {
            const courseObjectIds = courseIds
            .map((id: any) => {
              try {
                return new mongoose.Types.ObjectId(id.courseId);
              } catch (error) {
                console.error(`Invalid ObjectId: ${id.courseId}`);
                return null;
              }
            })
            .filter((id) => id !== null);
    
          const response = await CourseModel.find({
            _id: { $in: courseObjectIds },
          }).select("-courseData.videoUrl -courseData.links");
          return response;
        } catch (e:any) {
            throw new Error("db error");
        }
    }
}