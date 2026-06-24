API Specification - task manager capstone
## Base URL
http://localhost:3001/api

# authentication routes
Register User

POST /api/auth/register

Request:

{
"name": "Tejaswini",
"email": "teju@test.com",
"password": "123456"
}

Response:

{
"message": "User saved in DB"
}

Login User

POST /api/auth/login

Request:

{
"email": "teju@test.com",
"password": "123456"
}

Response:

{
"message": "Login successful",
"token": "jwt_token"
}

Create Task

POST /api/tasks/create

Request:

{
"title": "Capstone Project",
"description": "Complete internship task"
}

Response:

{
"message": "Task created successfully"
}

Get Tasks

GET /api/tasks

Response:

[
{
"_id": "...",
"title": "Capstone Project",
"description": "Complete internship task"
}
]

update tasks

PUT /tasks/:id
Authorization: Bearer <token>

{
    "title": "updated task",
    "description": "updated",
    "completed": "true"
}

delete tasks

DELETE /tasks/:id
Authorization: Bearer <token>

{
    "message": "Task deleted successfully"
    }