import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Dashboard from './pages/Dashboard';
import AppointmentForm from './pages/AppointmentForm';
import AppointmentList from './pages/AppointmentList';
import CalendarView from './pages/CalendarView';
import Calendar from './components/Calendar';
import './App.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#667eea',
    },
    secondary: {
      main: '#764ba2',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/create" element={<AppointmentForm />} />
            <Route path="/appointments" element={<AppointmentList />} />
            <Route path="/calendar" element={<CalendarView />} />
            <Route path="/calendar-component" element={<Calendar />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
