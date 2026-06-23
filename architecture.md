System Architecture

User
↓
Postman / Frontend
↓
Express.js Server
↓
Routes
↓
MongoDB Database

Components:

- Express.js Backend
- MongoDB Database
- JWT Authentication
- User Model
- Task Model

Flow:

1. User registers
2. User logs in
3. JWT token is generated
4. User creates tasks
5. Tasks are stored in MongoDB
6. User retrieves tasks through API