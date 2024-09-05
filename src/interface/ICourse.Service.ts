import { Course } from "../modal/course.entities";

export interface ICourseService{
    createCourse(data: Course): any;
    getCourses(instructorId: string): Promise<Course[] | null>;
    updateCourse(data: Course): Promise<Object | null>;
     deleteCourse(courseId: string): Promise<object | null> ;
     getCourseWop(courseId: string): Promise<Course | null> ;
    getCourseContent(courseId: string): Promise<Course | null> ;
    getAllCourses(): Promise<Course[] | null>
  searchCourses(searchTerm: string): Promise<Course[] | null>;
//   getCourseAnalytics(data: any): unknown;
  addReview(data: any): unknown;
  addAnswer(data: any): unknown;
  addQuestion(data: any): unknown;
  updatePurchaseCount(courseId: string): unknown;
  getTrendingCourses(): Promise<Course[] | null>;
    getUserCourses(userId: string[]): Promise<Course[] | null>;
}