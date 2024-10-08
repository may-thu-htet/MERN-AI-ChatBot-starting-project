# MERN-AI-ChatBot

## Overview

This project is a full-stack web application(ChatGPT clone) built with TypeScript, Vite, React, MongoDB, Express.js, and Material-UI (MUI). The application is designed to be scalable and maintainable, leveraging modern web technologies and best practices.

## Features

- **Frontend:** Built with React and TypeScript using Vite for fast development and optimized builds.
- **Backend:** Powered by Express.js with a MongoDB database.
- **Styling:** Utilizes Material-UI (MUI) for a modern and responsive UI design.
- **Linting:** Ensures code quality with linting tools.

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- **Node.js** (v14 or higher)
- **npm** (v6 or higher)
- **MongoDB** (running instance or a cloud MongoDB Atlas)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repository.git
   ```

2. Navigate to the project directory:

   ```bash
   cd your-repository
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Create a .env file in the root directory of the project and add the following environment variables:

   ```bash
   OPEN_AI_SECRET=your-openai-secret-key
   OPENAI_ORGANIZATION_ID=your-openai-organization-id
   MONGODB_URL=your-mongodb-url
   JWT_SECRET=your-jwt-secret
   COOKIE_SECRET=your-cookie-secret
   PORT=5000
   ```

## Further improvement

- adding a summary about your questions on the left panel as in actual chatGPT app.
