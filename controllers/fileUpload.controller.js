import path from "path";
import { awsRegion, bucketName } from "../config/index.js";
import uploadBufferToS3 from "../utils/s3.js";

// POST /api/v1/upload
export const fileUpload = async (req, res) => {
  try {
    if (!req.file)
      return res
        .status(400)
        .json({ status: false, statusCode: 400, message: "No file uploaded" });

    const originalName = req.file.originalname;
    const ext = path.extname(originalName);
    const baseName = path.basename(originalName, ext).replace(/\s+/g, "-");
    const timestamp = Date.now();
    const key = `${baseName}-${timestamp}${ext}`;

    await uploadBufferToS3({
      Bucket: bucketName,
      Key: key,
      Body: req.file.buffer,
      ContentType: req.file.mimetype,
    });

    const fileUrl = `https://${bucketName}.s3.${awsRegion}.amazonaws.com/${key}`;
    console.log(fileUrl);

    return res.status(200).json({
      status: true,
      statusCode: 200,
      message: "File uploaded successfully",
      key,
      url: fileUrl,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      statusCode: 500,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
