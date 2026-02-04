# 🚀 Full Stack MERN Notes App

A complete **full-stack web application** built using **React, Node.js, Express, MongoDB, and Mongoose**, where frontend and backend are served from a **single production server**.

This project demonstrates real-world deployment flow including:

* API creation
* Database integration
* Frontend ↔ Backend connection
* Production build using `npm run build`
* API testing using Postman

---

## 🛠 Tech Stack

### Frontend

* React (Vite)
* JavaScript
* CSS

### Backend

* Node.js
* Express.js
* MongoDB (Atlas)
* Mongoose

### Tools

* Postman (API Testing)
* Git & GitHub
* npm
* dotenv

---

## 🔄 How It Works

1. React frontend sends requests to Express API.
2. Express handles logic and communicates with MongoDB using Mongoose.
3. Data is stored/retrieved from MongoDB Atlas.
4. APIs are tested using Postman.
5. Frontend is built using:

   ```bash
   npm run build
   ```
6. The generated `dist` folder is served by the backend.
7. Both frontend and backend run on the **same server**.

---

## 🚀 Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Sujal140607/Fullstack-deployment.git
cd Fullstack-deployment
```

### 2️⃣ Backend Setup

```bash
cd Backend
npm install
```

Create `.env` file:

```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Start server:

```bash
npm start
```

---

### 3️⃣ Frontend Setup

```bash
cd ../Frontend
npm install
npm run build
```

Now copy `dist` folder into backend and serve it.

---

## 🧪 API Testing

All APIs are tested using **Postman**:

* Create note
* Get all notes
* Update note
* Delete note

---

## 📌 Features

* Full CRUD operations
* MongoDB Atlas integration
* RESTful API
* React frontend
* Secure environment variables
* Production-ready build
* Single server deployment

---

## 🧠 Learning Outcomes

* MERN full-stack architecture
* Cloud database connection
* API testing
* Production deployment flow
* Environment management
* Real-world project structure

