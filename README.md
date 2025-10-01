# Node.js File Upload to AWS S3

This is a simple Node.js application that provides a single API endpoint to upload files to an **Amazon S3 bucket**.  
Uploaded files are stored in S3 and returned with a **presigned URL** so they can be accessed securely in the browser.

---

## Features

- Upload a single file via `POST /api/v1/upload`
- Files are stored in AWS S3 with unique names (timestamped)
- Returns a **presigned URL** that allows temporary access to the file
- Supports any file type (images, PDFs, etc.)
- Built with:
  - [Express.js](https://expressjs.com/)
  - [Multer](https://github.com/expressjs/multer) (for file handling)
  - [AWS SDK v3](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/)

---

## Requirements

- Node.js
- An AWS account with:
  - An **S3 bucket**
  - IAM user credentials with `s3:PutObject` and `s3:GetObject` permissions

---

## Project Structure

```bash
.
├── config/
│ └── index.js # App configuration (env variables, constants)
│
├── controllers/
│ └── fileUpload.controller.js # Upload controller logic
│
├── routes/
│ └── uploadFile.routes.js # API route definitions
│
├── utils/
│ ├── multer.js # Multer middleware for file parsing
│ └── s3.js # S3 upload helper functions
│
├── node_modules/ # Installed dependencies
│
├── .env # Environment variables (ignored by git)
├── .env.example # Example environment variables file
├── .gitignore # Git ignore file
│
├── app.js # Express app setup
├── server.js # Entry point (starts the server)
│
├── package.json # Project metadata & dependencies
├── package-lock.json # Dependency lockfile
├── README.md # Project documentatio
```

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/km-saifullah/upload-s3.git
   cd upload-s3
   ```
2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root

```bash
AWS_ACCESS_KEY_ID=YOUR_AWS_ACCESS_KEY_ID
AWS_SECRET_ACCESS_KEY=YOUR_AWS_SECRET_ACCESS_KEY
AWS_REGION=us-east-1
S3_BUCKET=your-bucket-name
PORT=8000
```

## Usage

1. Start the server

```bash
npm start
```

The API will run on http://localhost:8000

2. Open `Postman` (or cURL) and send a POST request:

- URL

```bash
http://localhost:8000/api/v1/upload
```

- Method: POST
- Body: form-data
  - Key: file (type: File)
  - Value: Select a file from your computer

3. Example Response

```bash
{
  "status": true,
  "statusCode": 200,
  "message": "File uploaded successfully",
  "key": "myimage-1727838293291.png",
  "url": "https://signed-s3-url"
}
```
