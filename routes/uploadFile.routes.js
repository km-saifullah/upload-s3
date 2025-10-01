import express from "express";
import { fileUpload } from "../controllers/fileUpload.controller.js";
import { upload } from "../utils/multer.js";

const router = express.Router();

router.route("/upload").post(upload.single("file"), fileUpload);

export default router;
