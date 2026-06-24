---

#  2. `docs/architecture.md`

 Create file: docs/architecture.md
 ```md id="arch_1"
#  System Architecture - Task Manager App

##  Overview

This project follows a MERN stack architecture:

- Frontend: React.js
- Backend: Node.js + Express.js
- Database: MongoDB
- Authentication: JWT

---

# 🔄 System Flow

## 1. User Flow

User → React Frontend → Backend API → MongoDB → Response → Frontend UI

---

## 2. Authentication Flow

1. User registers/login in frontend
2. Backend verifies credentials
3. JWT token is generated
4. Token is stored in localStorage
5. Token is sent in every API request
6. Backend middleware verifies token
7. Access granted to protected routes

---

##  Architecture Diagram (Text View)

Frontend (React)
      ↓
Axios API Service
      ↓
Express Backend Server
      ↓
JWT Middleware (Auth Check)
      ↓
MongoDB Database

---

#  Components

## Frontend
- Login Page
- Register Page
- Dashboard
- API Service (Axios)

## Backend
- Auth Routes
- Task Routes
- Auth Middleware
- Models (User, Task)

---

# Security

- Passwords hashed using bcrypt
- JWT used for authentication
- Protected API routes
- User-specific data access only
