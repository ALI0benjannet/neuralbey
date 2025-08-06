# API Endpoints Documentation

## 1. Register User

- **URL:** `/api/register/`
- **Method:** POST
- **Description:** Register a new user account.

### Request Body (JSON)
```
{
  "username": "string",
  "email": "string",
  "password": "string"
}
```

### Success Response
- **Status:** 201 Created
- **Body:**
```
{
  "id": 1,
  "username": "string",
  "email": "string"
}
```

### Error Response (example: missing fields)
- **Status:** 400 Bad Request
- **Body:**
```
{
  "username": ["This field is required."],
  "email": ["This field is required."],
  "password": ["This field is required."]
}
```

---

## 2. List Users

- **URL:** `/api/users/`
- **Method:** GET
- **Description:** Retrieve a list of all users.

### Success Response
- **Status:** 200 OK
- **Body:**
```
[
  {
    "id": 1,
    "username": "user1",
    "email": "user1@example.com"
  },
  {
    "id": 2,
    "username": "user2",
    "email": "user2@example.com"
  }
]
```

### Error Response
- **Status:** 403 Forbidden (if not authenticated, if required)
- **Body:**
```
{
  "detail": "Authentication credentials were not provided."
}
```

---

> Update the endpoint URLs if they differ in your project. Add authentication details if endpoints are protected.
