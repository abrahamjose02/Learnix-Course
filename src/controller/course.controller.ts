import { ICourseService } from "../interface/ICourse.Service";
import { Course } from "../modal/course.entities";

export class CourseController{
    constructor(private service:ICourseService) {}

     createCourse = async(data:any) =>{
        try {
            const response = await this.service.createCourse(data);
            return response;
        } catch (e:any) {
            console.log(e)
        }
     }

     getCourses = async(instructorId:string) =>{
        try {
            return this.service.getCourses(instructorId)
        } catch (e:any) {
            console.log(e)
        }
     }
     updataCourse = async (data: Course) => {
        try {
          return this.service.updateCourse(data);
        } catch (e: any) {
          console.log(e);
        }
      };
    
      deleteCourse = async (courseId: string) => {
        try {
          return this.service.deleteCourse(courseId);
        } catch (e: any) {
          console.log(e);
        }
      };
    
      getCourseWop = async (courseId: string) => {
        try {
          return this.service.getCourseWop(courseId);
        } catch (e: any) {
          console.log(e);
        }
      };
    
      getAllCourses = async () => {
        try {
          return this.service.getAllCourses();
        } catch (e: any) {
          console.log(e)
        }
      };
    
      getTrendingCourses = async () => {
        try {
          return this.service.getTrendingCourses();
        } catch (e: any) {
          console.log(e)
        }
      };
    
      updatePurchaseCount = async (courseId: string) => {
        try {
          return this.service.updatePurchaseCount(courseId);
        } catch (e: any) {
          console.log(e)
        }
      };
    
      getCourseContent = async (courseId: string) => {
        try {
          return this.service.getCourseContent(courseId);
        } catch (e: any) {
          console.log(e);
        }
      };
    
      addQuestion = async (data: any) => {
        try {
          return this.service.addQuestion(data);
        } catch (e: any) {
          console.log(e);
        }
      };
    
      addAnswer = async (data: any) => {
        try {
          return this.service.addAnswer(data);
        } catch (e: any) {
          console.log(e);
        }
      };
    
      addReview = async (data: any) => {
        try {
          return this.service.addReview(data);
        } catch (e: any) {
          console.log(e);
        }
      };

      editReview = async (data: any) => {
        try {
          return this.service.editReview(data);
        } catch (e: any) {
          console.log(e);
        }
      };
      

    
      searchCourses = async (searchTerm: string) => {
        try{
          return this.service.searchCourses(searchTerm)
        }catch(e: any){
          console.log(e);
        }
      };
    
      getUserCourses = async (userIds: string[]) => {
        try{
          return this.service.getUserCourses(userIds)
        }catch(e: any){
          console.log(e);
        }
      }

      getCourseAnalytics = async(instructorId:string) => {
        try {
          return this.service.getCourseAnalytics(instructorId);
        } catch (e:any) {
          console.log(e)
        }
      }
}