# User Management and Authentication Microservices

A robust backend implementation showcasing microservices architecture with NestJS, featuring comprehensive user management and JWT-based authentication services. This API is publicly available for developers to integrate into their applications.

## 🌐 Public API Access

This API is publicly available for developers! Feel free to use it in your projects.

### Base URL
```
https://users-5x41.onrender.com/
```

### Rate Limiting
- 100 requests per hour per IP address
- Additional rate limits may apply to specific endpoints

### Authentication
To use protected endpoints:
1. Create an account using the registration endpoint
2. Obtain your JWT token through the login endpoint
3. Include the token in your requests' Authorization header:
   ```
   Authorization: Bearer your_jwt_token
   ```

## 🚀 Features

### User Service
- Complete CRUD operations for user management
- Secure password handling with bcrypt
- Email-based user lookup
- Protected routes with JWT authentication
- MongoDB integration for persistent storage

### Authentication Service
- JWT-based authentication
- Secure login/logout functionality
- Token renewal system
- Refresh token mechanism
- Request validation using pipes

## 📡 API Usage Examples

### Creating a New User
```bash
curl -X POST https://users-5x41.onrender.com/users \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "password": "securepassword",
    "username": "newuser"
  }'
```

### Login
```bash
curl -X POST https://users-5x41.onrender.com/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "password": "securepassword"
  }'
```

### Getting User Details (Protected Route)
```bash
curl -X GET https://users-5x41.onrender.com/users/me \
  -H "Authorization: Bearer your_jwt_token"
```

## 🛠️ Technical Stack

- **Framework:** NestJS
- **Database:** MongoDB
- **Authentication:** JSON Web Tokens (JWT)
- **Password Security:** bcrypt

## 🏗️ Architecture & Design Patterns

- **Dependency Injection:** Utilizing NestJS's powerful DI container
- **Repository Pattern:** MongoDB models serving as data access layer
- **DTO Pattern:** Data Transfer Objects for request validation
- **Guard Pattern:** JWT authentication guards for route protection
- **Exception Filters:** Centralized error handling
- **Async/Await:** Modern asynchronous programming patterns

## 📋 API Endpoints

### Public Endpoints

```markdown
POST /auth/login         - User login
POST /users              - Create new user
```

### Protected Endpoints (Require Authentication)

```markdown
GET /users               - Retrieve all users
GET /users/:id           - Retrieve specific user
DELETE /users/:id        - Delete user
PUT /users/:id           - Update user
GET /users/email/:email  - Find user by email
POST /auth/logout        - User logout
POST /auth/renew-token   - Refresh access token
```

## 📊 Response Formats

All API responses follow this standard format:

```json
{
  "success": true,
  "data": {
    // Response data here
  },
  "message": "Operation successful"
}
```

### Error Response Format
```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Error description"
  }
}
```

## 🔒 Security Features

- JWT-based authentication
- Password hashing with bcrypt
- Protected routes using guards
- Request validation
- Token refresh mechanism
- Secure logout handling

## 📚 API Documentation

Interactive API documentation is available at:
```
https://users-5x41.onrender.com/
```

Features:
- Interactive endpoint testing
- Request/response examples
- Authentication guide
- Schema definitions

## 💬 Support

Need help? Here's how you can reach us:
- Create an issue in this repository
- Email: [nieladverse@gmail.com]

## 📝 License

This project is licensed under the MIT License - feel free to use it in your own projects!

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## ⭐ Show your support

Give a ⭐️ if this project helped you!