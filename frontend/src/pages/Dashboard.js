import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Paper,
  Box,
  Grid,
} from '@mui/material';
import { motion } from 'framer-motion';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ListAltIcon from '@mui/icons-material/ListAlt';

const MotionPaper = motion(Paper);

const Dashboard = () => {
  const navigate = useNavigate();

  const handleCreateClick = () => {
    navigate('/create');
  };

  const handleViewClick = () => {
    navigate('/appointments');
  };

  const handleCalendarClick = () => {
    navigate('/calendar');
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        py: 4,
      }}
    >
      <Container maxWidth="md">
        <MotionPaper
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          sx={{
            p: 4,
            backdropFilter: 'blur(10px)',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            borderRadius: 2,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
            <EventNoteIcon sx={{ fontSize: 40, color: '#764ba2', mr: 2 }} />
            <Typography variant="h4" component="h1" sx={{ color: '#764ba2' }}>
              Appointment Scheduler
            </Typography>
          </Box>

          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <MotionPaper
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleCreateClick}
                sx={{
                  p: 3,
                  textAlign: 'center',
                  cursor: 'pointer',
                  background: 'linear-gradient(45deg, #667eea 30%, #764ba2 90%)',
                  color: 'white',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <EventNoteIcon sx={{ fontSize: 48, mb: 2 }} />
                <Typography variant="h6" gutterBottom>
                  Create Appointment
                </Typography>
                <Typography variant="body2">
                  Schedule a new appointment with all the details
                </Typography>
              </MotionPaper>
            </Grid>

            <Grid item xs={12} md={4}>
              <MotionPaper
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleViewClick}
                sx={{
                  p: 3,
                  textAlign: 'center',
                  cursor: 'pointer',
                  background: 'linear-gradient(45deg, #764ba2 30%, #667eea 90%)',
                  color: 'white',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <ListAltIcon sx={{ fontSize: 48, mb: 2 }} />
                <Typography variant="h6" gutterBottom>
                  View Appointments
                </Typography>
                <Typography variant="body2">
                  See all your scheduled appointments in a list
                </Typography>
              </MotionPaper>
            </Grid>

            <Grid item xs={12} md={4}>
              <MotionPaper
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleCalendarClick}
                sx={{
                  p: 3,
                  textAlign: 'center',
                  cursor: 'pointer',
                  background: 'linear-gradient(45deg, #667eea 30%, #764ba2 90%)',
                  color: 'white',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <CalendarMonthIcon sx={{ fontSize: 48, mb: 2 }} />
                <Typography variant="h6" gutterBottom>
                  Calendar View
                </Typography>
                <Typography variant="body2">
                  View your appointments in a monthly calendar
                </Typography>
              </MotionPaper>
            </Grid>
          </Grid>
        </MotionPaper>
      </Container>
    </Box>
  );
};

export default Dashboard; 