# Standalone Authentication Service 🔐

A production-ready, highly decoupled microservice architecture for user authentication and authorization. This backend service is built natively in Node.js using Express, MongoDB Atlas, and Nodemailer, following clean coding principles like the Single Responsibility Principle and a centralized asynchronous error pipeline.

---

## 🚀 Features

- **Decoupled Architecture:** Clean separation of concerns between server setup (`server.js`), application configuration (`src/app.js`), and business logic (`src/services`).
- **Complete Auth Pipeline:** Built-in endpoints for User Registration, Login (JWT-based), and secure Forgot/Reset Password flows.
- **Unified DB Model:** Scalable data storage utilizing MongoDB Atlas with pre-save Mongoose hashing hooks.
- **Centralized Error Handling:** Global Express error pipeline driven by a functional `catchAsync` wrapper and operational `AppError` extensions to completely eliminate boilerplate `try-catch` blocks.
- **Automated Mail Workflows:** Integrates Nodemailer with transactional stream mailers for bulletproof email delivery verification.

---

## 🛠️ Tech Stack

- **Runtime Environment:** Node.js
- **Backend Framework:** Express.js
- **Database:** MongoDB Atlas (via Mongoose ODM)
- **Security & Tokens:** JSON Web Tokens (JWT), `bcryptjs` (Password Hashing)
- **Email Service:** Nodemailer (Tested via Mailtrap Sandbox)

---

## 📁 Project Structure

```text
├── config/
│   ├── db.js             # MongoDB Atlas connection lifecycle
│   └── mail.js           # Nodemailer SMTP transporter configuration
├── src/
│   ├── models/
│   │   └── user.model.js # User schema with pre-save hooks & instance methods
│   ├── services/
│   │   ├── auth.service.js  # Core business rules orchestration
│   │   └── email.service.js # Dynamic email payload delivery logic
│   ├── controllers/
│   │   └── auth.controller.js # HTTP Request/Response traffic handlers
│   ├── middlewares/
│   │   └── error.middleware.js # Centralized global JSON error formatter
│   ├── utils/
│   │   ├── appError.js   # Custom operational Error class wrapper
│   │   └── catchAsync.js # Higher-order async function exception interceptor
│   └── app.js            # Express middleware pipeline and routing engine
├── .env                  # Environment hidden system secrets
├── server.js             # Application execution network entrypoint
└── package.json          # Dependency Manifest

⚙️ Getting Started
1. Prerequisites
Ensure you have Node.js (v16+ recommended) installed on your machine.

A free MongoDB Atlas database cluster.

A free Mailtrap account for capturing developer emails.

2. Installation
Clone the repository and install the production and development dependencies:

Bash
npm install
3. Environment Configuration
Create a .env file in the root directory and map out the following variables:

Code snippet
PORT=5000
JWT_SECRET=your_super_secure_jwt_secret_phrase

# Database Connection
ATLAS_URL=your_mongodb_atlas_connection_string

# Email Configuration (Mailtrap Sandbox)
EMAIL_HOST=sandbox.smtp.mailtrap.io
EMAIL_PORT=2525
EMAIL_USER=your_mailtrap_sandbox_username
EMAIL_PASS=your_mailtrap_sandbox_password
EMAIL_FROM="Auth Service" <noreply@authservice.com>
4. Running the Application
Start the server in development mode:

Bash
npm start
Upon a successful initialization, your terminal will output:

Plaintext
Server is roaring on port 5000 🔥
MongoDB Connected: cluster0.mongodb.net 🍀