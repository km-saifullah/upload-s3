import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { secretAccessKey, awsRegion, accessKeyId } from "../config/index.js";

const s3Client = new S3Client({
  region: awsRegion,
  credentials: {
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey,
  },
});

async function uploadBufferToS3({ Bucket, Key, Body, ContentType }) {
  const command = new PutObjectCommand({
    Bucket,
    Key,
    Body,
    ContentType,
    // ACL: "private",
    // ACL: "public-read",
  });
  return s3Client.send(command);
}

export default uploadBufferToS3;
