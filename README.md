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

#### Create Todo

##### Request

```http
POST /api/v1/todos
```

##### Body

```json
{
  "title": "Belanja di Indomaret",
  "description": "Beli sayur, beli buah, beli permen"
}
```

##### Response

```json
{
  "code": 200,
  "success": true,
  "message": "Todo create successfully",
  "data": {
    "todo": {
      "title": "belanja di indomaret",
      "description": "Beli sayur, beli buah, beli permen",
      "completed": false,
      "_id": "65524b9131cb49a167994a5c",
      "createdAt": "2023-11-13T16:15:13.486Z",
      "updatedAt": "2023-11-13T16:15:13.486Z",
      "__v": 0
    }
  }
}
```

#### Update Todo

##### Request

```http
PATCH /api/v1/todos/65524b9131cb49a167994a5c
```

##### Body

```json
{
  "title": "Belanja di Indomaret",
  "description": "Beli Indomide",
  "completed": true
}
```

##### Response

```json
{
  "code": 200,
  "success": true,
  "message": "Todo updated successfully",
  "data": {
    "todo": {
      "_id": "65524b9131cb49a167994a5c",
      "title": "belanja di indomaret",
      "description": "Beli Indomie",
      "completed": true,
      "createdAt": "2023-11-13T16:15:13.486Z",
      "updatedAt": "2023-11-13T16:18:47.648Z",
      "__v": 0
    }
  }
}
```

#### Delete Todo

##### Request

```http
DELETE /api/v1/todos/65524b9131cb49a167994a5c
```

##### Response

```json
{
  "code": 200,
  "success": true,
  "message": "Todo Deleted successfully"
}
```

#### Delete All Todo

##### Request

```http
DELETE /api/v1/todos
```

##### Response

```json
{
  "code": 200,
  "success": true,
  "message": "Todo Deleted all successfully"
}
```

## Author

- [Pretty Angela] (angelala6600@gmail.com)
