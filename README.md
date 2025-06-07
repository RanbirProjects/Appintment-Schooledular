# Appointment Scheduler

A modern appointment scheduling application built with React, Node.js, and MongoDB.

## Features

- Beautiful calendar interface with animations
- Create, read, update, and delete appointments
- Different calendar views (month, week, day)
- Color-coded events based on appointment type
- Responsive design
- Real-time updates

## Tech Stack

- Frontend: React, FullCalendar, Framer Motion, Emotion
- Backend: Node.js, Express
- Database: MongoDB
- Styling: CSS3, Emotion

## Setup Instructions

1. Clone the repository:
```bash
git clone https://github.com/RanbirProjects/My-Appointments.git
cd My-Appointments
```

2. Install dependencies:
```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

3. Start the development servers:
```bash
# Start backend server (from backend directory)
npm run server

# Start frontend server (from frontend directory)
npm start
```

4. Access the application:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5001

## Project Structure

```
appointment-scheduler/
├── frontend/               # React frontend
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── pages/        # Page components
│   │   └── App.js        # Main App component
│   └── package.json
├── backend/               # Node.js backend
│   ├── config/           # Configuration files
│   ├── controllers/      # Route controllers
│   ├── models/          # Database models
│   ├── routes/          # API routes
│   └── server.js        # Main server file
└── README.md
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License. 