
# Task Manager Capstone Project

##  Project Overview
This is a full-stack Task Manager web application built using MERN stack.

Users can:
- Register & Login
- Get JWT authentication
- Create personal tasks
- View their tasks
- Delete tasks
- Access protected routes securely

---

##  Features

- User Registration & Login
- JWT Authentication
- Password Hashing (bcrypt)
- Create Tasks
- View User-specific Tasks
- Delete Tasks
- Protected Backend Routes
- React Dashboard UI

---

##  Tech Stack

- Frontend: React.js
- Backend: Node.js, Express.js
- Database: MongoDB
- Authentication: JWT
- ORM: Mongoose
- API Calls: Axios

---

##  Project Structure

task-manager-capstone/
│
├── backend/
│   ├── models/
│   │   ├── User.js
│   │   └── Task.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── taskRoutes.js
│   ├── middleware/
│   │   └── auth.js
│   ├── server.js
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Login.js
│   │   │   ├── Register.js
│   │   │   └── Dashboard.js
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.js
│   │   └── index.js
│
├── postman_screenshots/
│
├── README.md

---

##  Installation & Setup

### 1. Backend Setup
```bash
cd backend
npm install
npm start

### 2. Frontend Setup
cd frontend
npm install
npm start

## 3. Environment Variables

Create a `.env` file in the backend folder and add:

```bash
JWT_SECRET=your_secret_key
MONGO_URI=your_mongodb_connection_string

---

# THEN NEXT SECTION

```md id="api1"
## 4. API Endpoints

### Auth Routes
- POST /api/auth/register
- POST /api/auth/login

### Task Routes (Protected)
- GET /api/tasks
- POST /api/tasks
- PUT /api/tasks/:id
- DELETE /api/tasks/:id

## 5. Screenshots

Add screenshots inside the folder:

postman_screenshots/

Include:
- Register API
- Login API
- Create Task API
- Get Tasks API

## 6. How It Works

1. User registers → password hashed using bcrypt
2. User logs in → JWT token generated
3. Token stored in localStorage
4. Token sent in API headers
5. Backend verifies token
6. User can manage only their own tasks

---

## Author

Capstone Project - Task Manager (Full Stack MERN)

---

## Status

✔ Backend Completed  
✔ Frontend Completed  
✔ Authentication Done  
✔ CRUD Done  
✔ Ready for Submission