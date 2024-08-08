# Full-Stack Authentication System

[![My Skills](https://skillicons.dev/icons?i=nodejs,express,tailwind,react,mongo,javascript,postman,gmail)](https://skillicons.dev)

A full-stack authentication system built with **Node.js**, **Express**, and **MongoDB**. This project includes functionalities for user signup, login, logout, email verification, password reset, and session management using JSON Web Tokens (**JWT**).

## Features

- **User Authentication**: Signup, login, and logout functionality with password hashing.
- **Email Verification**: Send verification email after signup to confirm the user's email address.
- **Password Reset**: Forgot password flow to reset the password securely via email.
- **Protected Routes**: Routes that require a valid JWT token to access.
- **Session Management**: Persistent user sessions using cookies and JWT.

## Technologies Used

- **Frontend**: React.js, Tailwind
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Email Service**: Mailtrap (for email sending)
- **Authentication**: JWT (JSON Web Tokens)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/iamsufiyan560/AuthFlow.git
   ```

2. Install dependencies:

   ```bash
   //in root directory
   npm install
   ```

   ```bash
   cd frontend
   npm install
   ```

3. Set up environment variables:

   Create a `.env` file in the root directory and add the following:

   ```makefile
   MONGO_URI= your_mongodb_connection_string
   PORT=5000
   JWT_SECRET= your_jwt_secret
   NODE_ENV=development
   MAILTRAP_TOKEN= your_mailtrap_token
   MAILTRAP_ENDPOINT=https://send.api.mailtrap.io/
   CLIENT_URL= http://localhost:5173
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

   The server will start on `http://localhost:3000`.

## API Endpoints

### Authentication Routes

| Method | Route                             | Description                                                                     |
| ------ | --------------------------------- | ------------------------------------------------------------------------------- |
| POST   | `/api/auth/signup`                | Registers a new user. Expects a JSON body with `email`, `password`, and `name`. |
| POST   | `/api/auth/login`                 | Logs in an existing user. Expects a JSON body with `email` and `password`.      |
| POST   | `/api/auth/logout`                | Logs out the current user by clearing the authentication token.                 |
| POST   | `/api/auth/verify-email`          | Verifies a user's email address using a token sent to their email.              |
| POST   | `/api/auth/forgot-password`       | Sends a password reset link to the user's email.                                |
| POST   | `/api/auth/reset-password/:token` | Resets the user's password using the token from the email.                      |
| GET    | `/api/auth/check-auth`            | Checks if the user is authenticated. Requires a valid JWT token.                |

## Middleware

- **`verifyToken`**: Middleware to protect routes and ensure the user has a valid JWT token.

## Email Templates

Custom email templates are used for:

- Verification Email
- Welcome Email
- Password Reset Request
- Password Reset Success

Emails are sent using the Mailtrap service, configured via environment variables.

## Commands

- **Start the server**: `npm start`
- **Run in development mode**: `npm run dev`

## Contributing

Feel free to fork this repository and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

## License

MIT
