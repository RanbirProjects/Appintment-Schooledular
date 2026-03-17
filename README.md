# 🚀 Appointment Scheduler  

A full-stack web application for managing appointments with a beautiful calendar interface and real-time updates.

---

## 🖼️ Preview  

<p align="center">
  <img src="https://github.com/user-attachments/assets/5ec0fba9-82da-4b12-bc7a-0bea6e99e04b" width="700"/>
  <br><br>
  <img src="https://github.com/user-attachments/assets/d6236892-7016-4a32-a645-e783eea67ba4" width="700"/>
  <br><br>
  <img src="https://github.com/user-attachments/assets/937888e2-a9bf-4b7e-aaa6-314ed13bf50d" width="700"/>
</p>

---

## 🌟 Features  

- 🔐 Authentication (Register/Login)  
- 📅 Calendar-based scheduling  
- ⚡ Real-time updates  
- 📱 Responsive UI  
- 🔗 REST API  
- 🗄 MongoDB Integration  

---

## 🚀 Tech Stack  

**Frontend:** React.js, Material UI, Axios, Framer Motion  
**Backend:** Node.js, Express.js, MongoDB, JWT, Bcrypt  

```bash
📦 Appointment-Scheduler
 ┣ 📂 frontend
 ┃ ┣ 📂 public
 ┃ ┗ 📂 src
 ┃    ┣ 📂 components
 ┃    ┣ 📂 pages
 ┃    ┣ 📂 context
 ┃    ┣ 📂 utils
 ┃    ┗ 📄 App.js
 ┃
 ┣ 📂 backend
 ┃ ┣ 📂 config
 ┃ ┣ 📂 controllers
 ┃ ┣ 📂 middleware
 ┃ ┣ 📂 models
 ┃ ┣ 📂 routes
 ┃ ┗ 📄 server.js
 ┃
 ┗ 📄 README.md
```


---

## ⚙️ Setup  

```bash
git clone https://github.com/RanbirProjects/Appintment-Schooledular.git
cd Appointment-Scheduler
cd frontend && npm install
cd ../backend && npm install

Create .env:

PORT=5001
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
▶️ Run
cd backend && npm run server
cd frontend && npm start

🌐 http://localhost:3000

🌐 Live

Frontend: https://appointment98.netlify.app

Backend: https://appointment-scheduler-api.onrender.com

🔐 API

POST /api/users/register
POST /api/users/login
GET /api/users/profile

GET /api/appointments
POST /api/appointments
PUT /api/appointments/:id
DELETE /api/appointments/:id

👨‍💻 Author

Ranbir Singh
🔗 https://github.com/RanbirProjects
