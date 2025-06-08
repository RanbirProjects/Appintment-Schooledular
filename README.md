# Appointment Scheduler

A full-stack web application for managing appointments with a beautiful calendar interface and real-time updates.
Welcome page
![Image 08-06-25 at 9 49 AM](https://github.com/user-attachments/assets/5ec0fba9-82da-4b12-bc7a-0bea6e99e04b)

Login page
![Image 08-06-25 at 9 49 AM](https://github.com/user-attachments/assets/d6236892-7016-4a32-a645-e783eea67ba4)
Registration page
![Image 08-06-25 at 9 49 AM](https://github.com/user-attachments/assets/937888e2-a9bf-4b7e-aaa6-314ed13bf50d)



 🌟 Features

- User authentication (Register/Login)
- Interactive calendar view
- Appointment scheduling and management
- Real-time updates
- Responsive design
- MongoDB database integration
- RESTful API architecture

🚀 Tech Stack

 Frontend
- React.js
- Material-UI
- React Router
- Axios
- Styled Components
- Framer Motion (for animations)

 Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Bcrypt for password hashing

 📋 Prerequisites

- Node.js (v14 or higher)
- MongoDB Atlas account
- npm or yarn package manager

 🔧 Installation

1. Clone the repository:
```bash
git clone https://github.com/RanbirProjects/Appintment-Schooledular.git
cd Appointment-Scheduler
```

2. Install frontend dependencies:
```bash
cd frontend
npm install
```

3. Install backend dependencies:
```bash
cd ../backend
npm install
```

4. Create a `.env` file in the backend directory with the following variables:
```
PORT=5001
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

🏃‍♂️ Running the Application

1. Start the backend server:
```bash
cd backend
npm run server
```

2. Start the frontend development server:
```bash
cd frontend
npm start
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5001

🌐 Deployment

The application is deployed on:
- Frontend: [Netlify](https://appointment98.netlify.app)
- Backend: [Render](https://appointment-scheduler-api.onrender.com)

📁 Project Structure

```
Appointment-Scheduler/
├── frontend/
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── context/
│       ├── utils/
│       └── App.js
└── backend/
    ├── config/
    ├── controllers/
    ├── middleware/
    ├── models/
    ├── routes/
    └── server.js
```

🔐 API Endpoints

Authentication
- POST /api/users/register - Register a new user
- POST /api/users/login - Login user
- GET /api/users/profile - Get user profile

 Appointments
- GET /api/appointments - Get all appointments
- POST /api/appointments - Create new appointment
- PUT /api/appointments/:id - Update appointment
- DELETE /api/appointments/:id - Delete appointment

🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

👥 Author

Ranbir Singh
- GitHub: [@RanbirProjects](https://github.com/RanbirProjects)
🙏 Acknowledgments

- Material-UI for the beautiful components
- MongoDB Atlas for the database hosting
- Netlify for frontend hosting
- Render for backend hosting


