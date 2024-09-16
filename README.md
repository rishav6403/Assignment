MERN Full-Stack Application
Project Overview
This is a full-stack web application built using the MongoDB, Express,  and Node.js. The project includes features like user signup, login with authentication.

Technologies Used
Frontend:

Bootstrap 5
HTML, CSS, JavaScript
Backend:

Node.js
Express.js
MongoDB (Mongoose)
Other Tools:

Git & GitHub
Postman (for API testing)
bcrypt (for password hashing)
JWT (for authentication)
Key Features
User Signup & Login: Users can register by providing their name, email, and password. They can then log in using their credentials.

Authentication and Authorization: User authentication is handled using JWT (JSON Web Tokens). Different user roles such as Admin and User can be created.

Password Encryption: Passwords are securely stored using bcrypt hashing.

Responsive Design: The frontend is fully responsive, built using Bootstrap 5, ensuring compatibility across various devices.

Project Structure
php
Copy code
├── client/            # Frontend (React.js)
│   ├── src/
│   └── public/
├── server/            # Backend (Node.js & Express)
│   ├── controllers/   # Controller files for handling logic
│   ├── models/        # Mongoose models
│   ├── routes/        # API routes
│   └── utils/         # Utility functions (JWT, etc.)
├── .gitignore         # Git ignored files
├── README.md          # Documentation
└── package.json       # Project dependencies and scripts
Installation and Setup
Prerequisites
Before you begin, ensure you have the following installed:

Node.js (v14 or higher)
MongoDB (set up a local or cloud instance)
Backend Setup (Server)
Clone the repository and navigate to the project folder:

git clone <repository_url>
cd <project_directory>
Install server dependencies:

cd server
npm install
Create a .env file in the root of the server folder and configure the following environment variables:

makefile
PORT = 9000
MONGO_DB_URI = mongodb://127.0.0.1:27017/Assignment
JWT_KEY = JWT_SECRET_KEY122

Start the backend server:

npm start
The server will be running on http://localhost:9000.

Frontend Setup (Client)
Navigate to the client folder and install dependencies:

cd client
npm install
Start the frontend server:

npm start

API Endpoints
User
POST /user/signup

Registers a new user
POST /user/login

Logs in an existing user