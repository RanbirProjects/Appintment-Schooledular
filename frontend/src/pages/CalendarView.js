import React, { useState } from 'react';
import {
  Box,
  Container,
  Paper,
  Typography,
  Grid,
  IconButton,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import { motion } from 'framer-motion';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider, DateCalendar } from '@mui/x-date-pickers';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import EventNoteIcon from '@mui/icons-material/EventNote';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isToday } from 'date-fns';

const MotionPaper = motion(Paper);

const CalendarView = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [showAppointments, setShowAppointments] = useState(false);

  // Sample appointments data - replace with actual API call
  const appointments = [
    {
      id: 1,
      title: 'Annual Checkup',
      date: '2024-03-20T10:00:00',
      type: 'general',
      priority: 'medium',
    },
    {
      id: 2,
      title: 'Follow-up Consultation',
      date: '2024-03-21T14:30:00',
      type: 'followup',
      priority: 'high',
    },
  ];

  const handlePreviousMonth = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
    setShowAppointments(true);
  };

  const getAppointmentsForDate = (date) => {
    return appointments.filter(appointment => {
      const appointmentDate = new Date(appointment.date);
      return (
        appointmentDate.getDate() === date.getDate() &&
        appointmentDate.getMonth() === date.getMonth() &&
        appointmentDate.getFullYear() === date.getFullYear()
      );
    });
  };

  const renderCalendarDays = () => {
    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(currentDate);
    const days = eachDayOfInterval({ start: monthStart, end: monthEnd });

    return days.map((day, index) => {
      const dayAppointments = getAppointmentsForDate(day);
      const isCurrentMonth = isSameMonth(day, currentDate);
      const isCurrentDay = isToday(day);

      return (
        <Box
          key={index}
          onClick={() => handleDateClick(day)}
          sx={{
            p: 1,
            height: '100px',
            border: '1px solid #eee',
            backgroundColor: isCurrentDay ? 'rgba(102, 126, 234, 0.1)' : 'transparent',
            opacity: isCurrentMonth ? 1 : 0.5,
            cursor: 'pointer',
            '&:hover': {
              backgroundColor: 'rgba(102, 126, 234, 0.05)',
            },
          }}
        >
          <Typography variant="body2" sx={{ mb: 1 }}>
            {format(day, 'd')}
          </Typography>
          {dayAppointments.map((appointment) => (
            <Box
              key={appointment.id}
              sx={{
                fontSize: '0.75rem',
                p: 0.5,
                mb: 0.5,
                borderRadius: 1,
                backgroundColor: appointment.priority === 'high' ? '#ffebee' : '#e3f2fd',
                color: appointment.priority === 'high' ? '#c62828' : '#1565c0',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
            >
              {appointment.title}
            </Box>
          ))}
        </Box>
      );
    });
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        py: 4,
      }}
    >
      <Container maxWidth="lg">
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
              Calendar View
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <IconButton onClick={handlePreviousMonth}>
              <ChevronLeftIcon />
            </IconButton>
            <Typography variant="h6" sx={{ mx: 2 }}>
              {format(currentDate, 'MMMM yyyy')}
            </Typography>
            <IconButton onClick={handleNextMonth}>
              <ChevronRightIcon />
            </IconButton>
          </Box>

          <Grid container spacing={1}>
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
              <Grid item xs={12/7} key={day}>
                <Box
                  sx={{
                    p: 1,
                    textAlign: 'center',
                    fontWeight: 'bold',
                    backgroundColor: 'rgba(102, 126, 234, 0.1)',
                    borderRadius: 1,
                  }}
                >
                  {day}
                </Box>
              </Grid>
            ))}
            {renderCalendarDays()}
          </Grid>

          <Dialog
            open={showAppointments}
            onClose={() => setShowAppointments(false)}
            maxWidth="sm"
            fullWidth
          >
            <DialogTitle>
              Appointments for {selectedDate && format(selectedDate, 'MMMM d, yyyy')}
            </DialogTitle>
            <DialogContent>
              {selectedDate && getAppointmentsForDate(selectedDate).map((appointment) => (
                <Box
                  key={appointment.id}
                  sx={{
                    p: 2,
                    mb: 2,
                    borderRadius: 1,
                    backgroundColor: 'rgba(102, 126, 234, 0.1)',
                  }}
                >
                  <Typography variant="h6">{appointment.title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {format(new Date(appointment.date), 'h:mm a')}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Type: {appointment.type}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Priority: {appointment.priority}
                  </Typography>
                </Box>
              ))}
              {selectedDate && getAppointmentsForDate(selectedDate).length === 0 && (
                <Typography variant="body1" color="text.secondary" align="center">
                  No appointments scheduled for this day
                </Typography>
              )}
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setShowAppointments(false)}>Close</Button>
            </DialogActions>
          </Dialog>
        </MotionPaper>
      </Container>
    </Box>
  );
};

export default CalendarView; 