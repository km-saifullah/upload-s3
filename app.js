import express from "express";
import uploadRouter from "./routes/uploadFile.routes.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", uploadRouter);

export default app;
