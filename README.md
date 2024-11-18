# User Management and Authentication Microservices

A robust backend implementation showcasing microservices architecture with NestJS, featuring comprehensive user management and JWT-based authentication services.

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

### User Service

```markdown
POST /users              - Create new user
GET /users               - Retrieve all users (Protected)
GET /users/:id           - Retrieve specific user
DELETE /users/:id        - Delete user
PUT /users/:id           - Update user
GET /users/email/:email  - Find user by email
```

### Authentication Service

```markdown
POST /auth/login         - User login
POST /auth/logout        - User logout
POST /auth/renew-token   - Refresh access token
```

## 🚦 Getting Started

1. **Prerequisites**
   ```bash
   node.js >= 14.x
   MongoDB >= 4.x
   ```

2. **Installation**
   ```bash
   # Clone the repository
   git clone [your-repo-url]

   # Install dependencies
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:
   ```env
   MONGODB_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   JWT_REFRESH_SECRET=your_refresh_token_secret
   ```

4. **Running the Application**
   ```bash
   # Development
   npm run start:dev

   # Production
   npm run build
   npm run start:prod
   ```

## 🔒 Security Features

- JWT-based authentication
- Password hashing with bcrypt
- Protected routes using guards
- Request validation
- Token refresh mechanism
- Secure logout handling

## 🧪 Implementation Details

The project implements several best practices:

- **Validation Pipeline:** Ensures data integrity through DTOs
- **Guard Implementation:** Protects routes from unauthorized access
- **Error Handling:** Comprehensive exception handling with appropriate HTTP status codes
- **Service Layer:** Business logic separation for better maintainability
- **Model Integration:** Mongoose models with TypeScript support

## 📚 API Documentation

To view the detailed API documentation:

1. Start the application
2. Navigate to `/api` endpoint for Swagger documentation

## 🤝 Contributing

Feel free to submit issues and enhancement requests.

## 📝 License

This project is licensed under the [MIT License](LICENSE).