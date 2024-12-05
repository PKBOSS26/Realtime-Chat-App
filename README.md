# SpeedenChat - Realtime Chat Application

**SpeedenChat** is a sophisticated real-time chat application built with the MERN stack, designed to deliver a seamless and engaging messaging experience similar to WhatsApp. This project showcases the integration of modern technologies, including Socket.io for real-time communication and Zustand for state management.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Setup and Installation](#setup-and-installation)
- [Using Docker](#using-docker)
- [Contributing](#contributing)

## Introduction

**SpeedenChat** aims to provide users with a fully-featured chat application incorporating essential functionalities like real-time messaging, user authentication, and profile management. This project demonstrates how to effectively use the MERN stack along with other modern libraries to create a robust communication tool.

## Features

- **User Authentication:** Secure user registration and login using JSON Web Tokens (JWT).
- **Profile Management:** Users can create and update their profiles, including uploading and managing profile images.
- **Real-Time Messaging:** Instantaneous message delivery and receipt facilitated by Socket.io.
- **User-Friendly Interface:** A well-structured chat interface designed for optimal user experience.
- **Contact Search:** Efficient contact management with a comprehensive search feature.
- **Conversation History:** Ability to view and manage complete conversation histories with contacts.

## Tech Stack

- **Frontend:** React, TailwindCSS, Vite, React Router
- **Backend:** Node.js, Express.js, MongoDB
- **State Management:** Zustand
- **Real-Time Communication:** Socket.io
- **Additional Libraries:** Axios, Cookie-Parser, Dotenv, Mongoose, Bcrypt, JSON Web Token
- **Containerization:** Docker, Docker Compose

## Project Structure

```plaintext
SpeedenChat/
├── client/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── lib/
│   │   ├── pages/
│   │   ├── store/
│   │   ├── utils/
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── .env
│   ├── .eslintrc.cjs
│   ├── .gitignore
│   ├── components.json
│   ├── index.html
│   ├── jsconfig.json
│   ├── package-lock.json
│   ├── package.json
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   └── vite.config.js
├── server/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── node_modules/
│   ├── routes/
│   ├── .env
│   ├── index.js
│   ├── package-lock.json
│   └── package.json
├── README.md
```


## Setup and Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/PKBOSS26/Realtime-Chat-App.git
2. **Install Dependencies:**
    ```bash
    cd client
    npm install
    cd ../server
    npm install
3. **Configure Environment Variables:**
    - Open the .env file in the server directory.
    - Update the MONGODB_URI variable with your MongoDB connection string.

4. **Run the Application Locally:**
    - Start the Client:
        ```bash
        cd ../client
        npm run dev
    - Start the Server:
        ```bash
        cd ../server
        npm run dev
## Using Docker
    - You can run the application using Docker for easier deployment and management.

1.  **Build and Start the Containers:**
    ```bash
    docker-compose up --build
- This command will build and start the frontend, backend, and any other services defined in the docker-compose.yml file.

2.  **Access the Application:**
    - Frontend: Open http://localhost:5173.
    - Backend: API is available at http://localhost:2668.

3.  **Stop the Containers:**
    ```bash
    docker-compose down
4.  **Docker Clean-Up: To remove unused containers, images, and volumes, run:**
    ```bash
    docker system prune
## Usage
1. Open your browser and navigate to http://localhost:5173 (vite react default) to access the application.
2. Sign up for a new account or log in with an existing one.
3. Start chatting with other users in real-time.

## Contributing
Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (git checkout -b feature/your-feature-name).
3. Make your changes.
4. Commit your changes (git commit -m 'Add some feature').
5. Push to the branch (git push origin feature/your-feature-name).
6. Open a pull request.

