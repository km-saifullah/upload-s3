import dotenv from "dotenv";

dotenv.config();

export const serverPort = process.env.PORT || 8000;
export const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
export const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
export const awsRegion = process.env.AWS_REGION;
export const bucketName = process.env.S3_BUCKET;
