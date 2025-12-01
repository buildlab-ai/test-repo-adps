# API Documentation

## Overview
This document describes the API endpoints available in our application.

## Endpoints

### Health Check
- **GET** `/health`
- **Description**: Check if the application is running
- **Response**: `{"status": "OK", "timestamp": "2024-12-01T18:00:00Z"}`

### User Management
- **GET** `/api/users`
- **Description**: Get list of all users
- **Response**: Array of user objects

- **POST** `/api/users`
- **Description**: Create a new user
- **Request Body**: `{"name": "string", "email": "string"}`
- **Response**: Created user object

### Authentication
- **POST** `/api/auth/login`
- **Description**: Authenticate user
- **Request Body**: `{"email": "string", "password": "string"}`
- **Response**: `{"token": "jwt_token", "user": {...}}`

## Error Responses
All API endpoints return standard HTTP status codes:
- 200: Success
- 400: Bad Request
- 401: Unauthorized
- 404: Not Found
- 500: Internal Server Error
