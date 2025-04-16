# MERN Product Management App

## Overview

This is a full-stack web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). The application enables users to perform Create, Read, Update, and Delete (CRUD) operations on products. The backend is powered by a RESTful API using Express and Mongoose, while the frontend is built using React with Chakra UI for styling and Vite for development.

## Features

- RESTful API to manage product data
- MongoDB database integration using Mongoose
- React-based frontend with Chakra UI
- Real-time UI updates after operations (CRUD)
- Vite for fast frontend development and build

## Tech Stack

| Layer       | Technology                |
|-------------|---------------------------|
| Frontend    | React.js, Chakra UI, Vite |
| Backend     | Express.js, Node.js       |
| Database    | MongoDB with Mongoose     |
| HTTP Client | Axios                     |

## Getting Started

### Prerequisites

- Node.js and npm
- MongoDB (local or Atlas cloud instance)

### Clone the Repository

```bash
git clone https://github.com/Yash-Swaminathan/MERN-Project.git
cd MERN-Project
```
# Backend Setup

1. Install backend dependencies:
```bash
npm install
```
2. Create a .env file in the root directory and add:
```bash
MONGO_URI=your_mongodb_connection_string
PORT=5000
```
3. Start the backend server:
```bash
node server.js
```
The backend server will run on http://localhost:5000.

# Frontend Setup

1. Navigate to the frontend directory:
``` bash
cd frontend
```
2. Install frontend dependencies:
```bash
npm install
```
3. Start the frontend using Vite:
``` bash
npm run dev
```
The frontend will run on http://localhost:5173.


## API Endpoints

| Method | Endpoint      | Description        |
|--------|---------------|--------------------|
| GET    | /products     | Get all products   |
| POST   | /products     | Create a product   |
| PUT    | /products/:id | Update a product   |
| DELETE | /products/:id | Delete a product   |
