export interface S3Params{
    Bucket:string;
    Key:string;
    Body:Buffer | undefined;
    ContentType:string;
}