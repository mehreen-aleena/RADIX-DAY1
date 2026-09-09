# User Management System

A full-stack User Management System developed using **Node.js, Express.js, MongoDB, and Next.js**.

The project includes user registration, login authentication, password hashing, JWT-based authentication, protected APIs, role-based authorization, and a protected frontend.

---

## Features

### Authentication

- User registration
- User login
- Password hashing using bcrypt
- JWT token generation
- JWT token verification
- Current user/profile API
- Logout functionality
- Protected authentication routes

### Authorization

- User and Admin roles
- Default role is `user`
- Admin-only operations
- Reusable role-based authorization middleware
- Protected CRUD operations

### User Management

- View all users
- View a single user
- Create users
- Update users
- Delete users
- Duplicate email validation
- Passwords are never returned in API responses

### Frontend

- Next.js App Router
- Login page
- Registration page
- Profile page
- Users page
- User details page
- Admin create-user page
- Authentication state
- Protected frontend pages
- Logout functionality
- API integration with backend

---

## Technology Stack

### Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- CORS
- dotenv

---

## Project Structure

```text
RADIX-DAY1/
│
├── backend/
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   ├── authController.js
│   │   └── userController.js
│   │
│   ├── middleware/
│   │   ├── authMiddleware.js
│   │   └── roleMiddleware.js
│   │
│   ├── models/
│   │   └── user.js
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── userRoutes.js
│   │
│   ├── .env
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── app/
│   │   ├── login/
│   │   ├── register/
│   │   ├── profile/
│   │   ├── users/
│   │   ├── components/
│   │   ├── page.tsx
│   │   └── layout.tsx
│   │
│   ├── public/
│   ├── .env.local
│   └── package.json
│
├── .gitignore
└── README.md