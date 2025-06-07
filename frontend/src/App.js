import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import CalendarView from './pages/CalendarView';
import AppointmentForm from './pages/AppointmentForm';
import AppointmentList from './pages/AppointmentList';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path="/calendar" element={<PrivateRoute><CalendarView /></PrivateRoute>} />
          <Route path="/appointments/new" element={<PrivateRoute><AppointmentForm /></PrivateRoute>} />
          <Route path="/appointments" element={<PrivateRoute><AppointmentList /></PrivateRoute>} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
