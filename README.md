User Management System

A simple User Management System built as part of the RADIX SOLUTIONS Day 1 MERN Stack Internship Task.

Features

- Create a new user
- View all users
- View user details
- Delete users
- Email validation
- Unique email validation
- MongoDB database integration
- REST API
- Error handling

Technologies Used

Frontend

- Next.js
- React.js
- TypeScript
- Tailwind CSS

Backend

- Node.js
- Express.js
- REST API

Database

- MongoDB
- Mongoose

Development Tools

- Git
- GitHub
- Thunder Client

Project Structure

RADIX-DAY1/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── .env
│   └── server.js
│
├── frontend/
│   ├── app/
│   ├── components/
│   ├── services/
│   └── types/
│
├── .gitignore
└── README.md

API Endpoints

Method| Endpoint| Description
GET| "/api/users"| Get all users
GET| "/api/users/:id"| Get user by ID
POST| "/api/users"| Create a user
DELETE| "/api/users/:id"| Delete a user

How to Run

Backend

cd backend
npm install
node server.js

Backend runs on:

http://localhost:5000

Frontend

Open another terminal:

cd frontend
npm install
npm run dev

Frontend runs on:

http://localhost:3000

Environment Variables

Create a ".env" file inside the "backend" folder:

MONGO_URI=your_mongodb_connection_string
PORT=5000

Do not commit the ".env" file to GitHub.

Author

Mahreen Aleena

RADIX SOLUTIONS — Day 1 Internship Task