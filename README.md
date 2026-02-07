# react-redux-ecommerce
Full-stack e-commerce application built with React, Redux Toolkit, Tailwind CSS, and JSON Server.


🛒 React Redux E-commerce CRUD Application

A full-stack E-commerce CRUD application built using React, Redux Toolkit, and JSON Server.
The project is divided into two folders: Frontend and Backend, making it easy to understand and maintain.


---

📁 Project Structure

react-redux-ecommerce/
│
├── backend/
│   ├── db.json
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── store/
│   │   ├── services/
│   │   │   └── api.js
│   │   └── App.jsx
│   ├── package.json
│   └── README.md
│
└── README.md


---

🚀 Features

Product CRUD (Create, Read, Update, Delete)

Redux Toolkit for state management

Cart management using Redux

JSON Server as mock backend

Axios for API communication

Clean folder separation (Frontend / Backend)

Beginner-friendly and scalable structure



---

🛠️ Tech Stack

Frontend

React

Redux Toolkit

React Router DOM

Axios

Tailwind CSS / CSS


Backend

JSON Server



---

⚙️ Installation & Setup

1️⃣ Clone the Repository

git clone https://github.com/your-username/react-redux-ecommerce.git
cd react-redux-ecommerce


---

2️⃣ Setup Backend (JSON Server)

cd backend
npm install
npx json-server --watch db.json --port 5000

✅ Backend will run at:

http://localhost:5000


---

3️⃣ Setup Frontend

cd ../frontend
npm install
npm run dev

or (CRA)

npm start


---

🔧 IMPORTANT: Change Base URL After Cloning

Since everyone may run JSON Server on a different port or URL, you must update the API base URL.

📌 Step 1: Locate API config file

frontend/src/services/api.js

📌 Step 2: Update Base URL

import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000" // CHANGE THIS
});

export default API;

📌 Example:

If your JSON Server runs on port 3001, change to:

baseURL: "http://localhost:3001"


---

🌐 API Endpoints

Method	Endpoint	Description

GET	/products	Get all products
POST	/products	Add product
PUT	/products/:id	Update product
DELETE	/products/:id	Delete product



---

🌍 Environment Variable (Recommended)

To avoid changing code manually, you can use environment variables.

Frontend .env

VITE_API_URL=http://localhost:5000

Update api.js

baseURL: import.meta.env.VITE_API_URL


---

🧠 What This Project Demonstrates

Redux CRUD flow

Clean API handling

Folder-based architecture

Real-world project setup

Frontend–backend coordination



---

📦 Deployment Notes

Frontend can be deployed on Vercel

Backend (JSON Server) can be hosted on Render

Update API URL accordingly after deployment



