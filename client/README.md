# PrimeTrade.ai – Frontend Developer Internship Assignment

A full-stack task management application built as part of the PrimeTrade.ai Frontend Developer Intern assignment.  
The project demonstrates frontend skills with React along with backend integration, authentication, and deployment.

---

## 🔗 Live Links

- **Frontend (Vercel):**  
  https://primetrade-ai-assignment-test-n7ywck52g.vercel.app
- **Backend (Render):**  
  https://primetrade-ai-assignment-test.onrender.com

---

## ✨ Features

- User Authentication (Register & Login)
- JWT-based secure authentication
- Protected routes (Dashboard access only after login)
- Task Management:
  - Create tasks
  - View all tasks
  - Update task status
  - Delete tasks
- Persistent data storage using MongoDB
- Clean and responsive UI
- Deployed frontend and backend

---

## 🛠 Tech Stack

### Frontend
- React (Vite)
- Axios
- React Router
- CSS

### Backend
- Node.js
- Express.js
- JWT Authentication
- MongoDB Atlas
- Mongoose

### Deployment
- Frontend: **Vercel**
- Backend: **Render**

---

## 📁 Project Structure

```bash
primetrade.AI/
│
├── client/          # React frontend
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/          # Node.js backend
│   ├── routes/
│   ├── models/
│   ├── controllers/
│   ├── middleware/
│   └── server.js
│
└── README.md
```
---
⚙️ Environment Variables

###Frontend (Vercel)

.env
```bash
VITE_API_URL=https://primetrade-ai-assignment-test.onrender.com/api
```
###Frontend (Vercel)

.env
```bash
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```
---
🚀 Run Locally

1️⃣ Clone the repository
```bash
git clone https://github.com/tannuup123/primetrade.AI-Assignment-test.git

cd primetrade.AI-Assignment-test
```
2️⃣ Start Backend
```bash
cd server
npm install
npm run dev
```
3️⃣ Start Frontend
```bash
cd client
npm install
npm run dev
```
Frontend will run on: http://localhost:5173

Backend will run on: http://localhost:5000
---
🔐 API Endpoints

###Auth

1.POST /api/auth/register – Register user

2.POST /api/auth/login – Login user

###Tasks (Protected)

1.GET /api/tasks – Get all tasks

2.POST /api/tasks – Create task

3.PUT /api/tasks/:id – Update task

4.DELETE /api/tasks/:id – Delete task

📈 Scaling for Production (Approach)

1.To scale this application for production:

2.Use environment-based configurations (dev/staging/prod)

3.Enable strict CORS origin whitelisting

4.Add rate limiting and request validation

5.Use a reverse proxy like Nginx

6.Implement caching (Redis) for frequently accessed data

7.Add CI/CD pipelines for automated testing and deployment

8.Containerize services using Docker

9.Horizontal scaling with load balancers

10.Centralized logging and monitoring

---
🧪 Demo Credentials
```bash
Email: test@demo.com
Password: 123456
```
---
👤 Author

Tanmay Upadhyay

Frontend Developer Intern Applicant

GitHub: https://github.com/tannuup123
---
📌 Notes

This project was built to demonstrate frontend development skills, API integration, authentication handling, and real-world deployment practices as required by the PrimeTrade.ai internship assignment.
