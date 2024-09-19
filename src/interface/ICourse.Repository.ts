import { Course } from "../modal/course.entities";

export interface ICourseRepository{
    editReview(data: any): Promise<Object | null>;
    createCourse(data:Course):Promise<Object | null>;
    getCourses(instructorId: string): Promise<Course[] | null>;
    updateCourses(id:string,data:Course):Promise<Object | null>;
    deleteCourses(courseId:string):Promise<Object | null>;
    getAllCourses():Promise<Course[] | null>;
    getTrendingCourses():Promise<Course[] | null>;
    getCourseWop(courseId:string):Promise<Course | null>;
    getCourseContent(courseId:string):Promise<Course | null>;
    updatePurchaseCount(courseId:string):Promise<Object | null>;
    searchCourse(searchTerm:string):Promise< Course[] | null>;
    addReview(data: any): Promise<Object | null>;
    addAnswer(data: any): Promise<Object | null>;
    addQuestion(data: any): Promise<Object | null>;
    getUserCourses(courseIds: string[]): Promise<Course[] | null>;
    getCourseAnalytics(data: any): Promise<Object[] | null>;
    editReview(data: any): Promise<Object | null>
}