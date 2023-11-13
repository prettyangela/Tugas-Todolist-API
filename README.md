# TodoList

For Testing Purpose

Todo List API Services using Express JS

## Installation and Setup Instructions

#### Prerequisites

1. Git
2. Node.js
3. NPM
4. MongoDB

#### Installation

1. Clone this repository: `git clone
2. Change directory to the project: `cd ToDoList-API`
3. Install dependencies: `npm install`
4. Run the application: `npm start` or `npm run dev` for development mode
5. The application will be available at: `http://localhost:3001`

## Domain Services

### Route

1. login : /api/v1/auth/login
2. register : /api/v1/auth/register
3. Get All Todos : /api/v1/todos
4. Get Task By Id : /api/v1/todos/:id
5. Update Task : /api/v1/todos/:id
6. Delete Task : /api/v1/todos/:id
7. create Todo : /api/v1/todos
8. Delete all Todo : api/v1/todos

## API Documentation

Task

<!-- Create Task -->

Request:
POST /api/v1/tasks

Body:
{
"description": "Description 1",
"status": "active"
}

Response:
{
"code": 201,
"success": true,
"message": "Task created successfully",
"data": {
"task": {
"\_id": "5f9b0b7b7f0b9b0017f0b9b0",
"status": "active",
"description": "Description 1",
"createdAt": "2023-07-19T15:08:27.000Z",
"updatedAt": "2023-07-19T15:08:27.000Z",
"\_\_v": 0
}
}
}

<!-- Get All Tasks with filters -->

Request

GET /api/v1/tasks?status=active

Response

{
"code": 200,
"success": true,
"message": "Tasks retrieved successfully",
"data": {
"tasks": [
{
"_id": "5f9b0b7b7f0b9b0017f0b9b0",
"status": "active",
"description": "Description 1",
"createdAt": "2023-07-19T15:08:27.000Z",
"updatedAt": "2023-07-19T15:08:27.000Z",
"__v": 0
}
]
},
"meta": {
"total_filtered": 1
}
}

<!-- Get Task By Id -->

Request

GET /api/v1/tasks/5f9b0b7b7f0b9b0017f0b9b0

Response

{
"code": 200,
"success": true,
"message": "Task retrieved successfully",
"data": {
"task": {
"\_id": "5f9b0b7b7f0b9b0017f0b9b0",
"status": "active",
"description": "Description 1",
"createdAt": "2023-07-19T15:08:27.000Z",
"updatedAt": "2023-07-19T15:08:27.000Z",
"\_\_v": 0
}
}
}

<!-- Update Task -->

Request

PUT /api/v1/tasks/5f9b0b7b7f0b9b0017f0b9b0

Body

{
"description": "Description 1",
"status": "active"
}

Response

{
"code": 200,
"success": true,
"message": "Task updated successfully",
"data": {
"task": {
"\_id": "5f9b0b7b7f0b9b0017f0b9b0",
"status": "active",
"description": "Description 1",
"createdAt": "2023-07-19T15:08:27.000Z",
"updatedAt": "2023-07-19T15:08:27.000Z",
"\_\_v": 0
}
}
}

<!-- Delete Task -->

Request

DELETE /api/v1/tasks/5f9b0b7b7f0b9b0017f0b9b0

Response

{
"code": 200,
"success": true,
"message": "Task deleted successfully"
}

## Author

- [Pretty Angela] (angelala6600@gmail.com)
