Task Manager Capstone Project

Project Overview

This is a full-stack Task Manager web application built using the MERN Stack (MongoDB, Express.js, React.js, and Node.js).

The application allows users to:

- Register a new account
- Login securely
- Authenticate using JWT
- Create tasks
- View tasks
- Delete tasks
- Manage tasks through a simple dashboard

---

Features

- User Registration
- User Login
- JWT Authentication
- Password Hashing using bcrypt
- Create Tasks
- View Tasks
- Delete Tasks
- MongoDB Integration
- REST API Development
- React Dashboard Interface

---

Tech Stack

Frontend
- React.js
- Axios

Backend
- Node.js
- Express.js

Database
- MongoDB
- Mongoose

Authentication
- JSON Web Token (JWT)
- bcryptjs

Deployment
- Vercel (Frontend)
- Render (Backend)

---

Project Structure

task-manager-capstone/
├── frontend/
│   ├── src/
│   │   ├── Dashboard.js
│   │   ├── Login.js
│   │   ├── Register.js
│   │   └── services/
│   │       └── api.js
│
├── models/
│   ├── User.js
│   └── Task.js
│
├── routes/
│   ├── auth.js
│   └── taskRoutes.js
│
├── middleware/
├── docs/
│   └── api-spec.md
│
├── postman_screenshots/
├── server.js
├── package.json
└── README.md

---

Installation & Setup

1. Clone the Repository
git clone https://github.com/tej1-aswini/task-manager-capstone.git

2. Install Dependencies
npm install

3. Configure Environment Variables

Create a ".env" file and add:
JWT_SECRET=mysecretkey123
MONGO_URI=mongodb://chennamsettitejaswini5_db_user:wc3kAsqOa3seOIOZ@ac-ltkvt32-shard-00-00.qq0dlwz.mongodb.net:27017,ac-ltkvt32-shard-00-01.qq0dlwz.mongodb.net:27017,ac-ltkvt32-shard-00-02.qq0dlwz.mongodb.net:27017/test?ssl=true&replicaSet=atlas-d0z5fy-shard-0&authSource=admin&retryWrites=true&w=majority

4. Run Backend Server
npm start

5. Run Frontend
cd frontend
npm install
npm start

---

API Endpoints

Authentication

Register User
POST /api/register

Login User
POST /api/login

---

Task Routes

Create Task
POST /api/tasks/create

Get All Tasks
GET /api/tasks

Update Task
PUT /api/tasks/:id

Delete Task
DELETE /api/tasks/:id

---

Screenshots

Screenshots are available inside the:
postman_screenshots/

Included screenshots:

- Register API
- Login API
- Create Task API
- Get Tasks API

---

How It Works

1. User registers with a username and password.
2. Password is hashed using bcrypt before storage.
3. User logs in successfully.
4. JWT token is generated for authentication.
5. User can create, view, and delete tasks.
6. Data is stored in MongoDB.

---

Live Deployment

Frontend (Vercel)

https://tas-manager-capstone-woad.vercel.app/

Backend (Render)

https://task-manager-capstone.onrender.com

GitHub Repository

https://github.com/tej1-aswini/task-manager-capstone

---

Challenges Faced

- Setting up frontend and backend deployment.
- Connecting React frontend with Render backend.
- Debugging API endpoint mismatches.
- Resolving MongoDB schema validation errors.
- Testing and verifying API functionality.

---

Author

Ch.Tejaswini

Task Manager Capstone Project
