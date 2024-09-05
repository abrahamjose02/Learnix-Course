export class Course{
    constructor(
        public readonly instructorId:string,
        public readonly name:string,
        public readonly description:string,
        public readonly price:string,
        public readonly estimatedPrice:string,
        public readonly tags:string,
        public readonly level:string,
        public readonly demoUrl:string,
        public readonly totalVideos:string,
        public readonly benefits:Benefit[],
        public readonly prerequisites:Prerequisite[],
        public readonly courseContentData: CourseContentData[],
        public readonly subtitleUrl?:string,
        public category?:string,
        public thumbnail?:Buffer | string,
        public reviews?: Reviews[],
        public ratings?: number,
        public purchased?: number,
        public _id?: string,
        public courseId?: string,
        public thumbnailUrl?: string,

    ){}
}

export interface CourseWop {
    instructorId: string,
  name: string,
  description: string,
  price: string,
  estimatedPrice: string,
  tags: string,
  level: string,
  demoUrl: string,
  totalVideos: string,
  benefits: Benefit[],
  prerequisites: Prerequisite[],
  courseContentData?: CourseContentData[],
  subtitleUrl?: string,
  category?: string,
  thumbnail?: Buffer | string,
  reviews?: Reviews[],
  ratings?: number,
  purchased?: number,
  _id?: string,
  thumbnailUrl?: string,
  }
  
  interface Benefit {
    title: string;
  }
  
  interface Prerequisite {
    title: string;
  }
  
  interface CourseContentData {
    _id?: any;
    videoUrl?: string;
    title: string;
    description: string;
    videoSection: string;
    links?: Links[];
    suggestion: string;
    questions? :any;
  }
  
  interface Links {
    title: string;
    url: string;
  }
  
  interface Reviews {
    user: string,
    rating: number,
    comment: string,
  }