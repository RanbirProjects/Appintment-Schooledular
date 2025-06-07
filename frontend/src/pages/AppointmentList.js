import React, { useState } from 'react';
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Paper,
  Box,
  IconButton,
  Chip,
  TextField,
  MenuItem,
  Grid,
} from '@mui/material';
import { motion } from 'framer-motion';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import EventNoteIcon from '@mui/icons-material/EventNote';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PeopleIcon from '@mui/icons-material/People';

const MotionPaper = motion(Paper);
const MotionListItem = motion(ListItem);

const AppointmentList = () => {
  const [filter, setFilter] = useState({
    type: 'all',
    priority: 'all',
    search: '',
  });

  // Sample data - replace with actual API call
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      title: 'Annual Checkup',
      description: 'Regular health checkup',
      date: '2024-03-20T10:00:00',
      duration: '60',
      type: 'general',
      priority: 'medium',
      location: 'Main Clinic',
      attendees: 'john@example.com, jane@example.com',
    },
    {
      id: 2,
      title: 'Follow-up Consultation',
      description: 'Post-surgery follow-up',
      date: '2024-03-21T14:30:00',
      duration: '30',
      type: 'followup',
      priority: 'high',
      location: 'Specialist Office',
      attendees: 'john@example.com',
    },
  ]);

  const handleEdit = (id) => {
    // TODO: Implement edit functionality
    console.log('Edit appointment:', id);
  };

  const handleDelete = (id) => {
    // TODO: Implement delete functionality
    setAppointments(appointments.filter(appointment => appointment.id !== id));
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'error';
      case 'medium':
        return 'warning';
      case 'low':
        return 'success';
      default:
        return 'default';
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'general':
        return 'primary';
      case 'consultation':
        return 'secondary';
      case 'followup':
        return 'info';
      case 'emergency':
        return 'error';
      default:
        return 'default';
    }
  };

  const filteredAppointments = appointments.filter((appointment) => {
    const matchesType = filter.type === 'all' || appointment.type === filter.type;
    const matchesPriority = filter.priority === 'all' || appointment.priority === filter.priority;
    const matchesSearch = appointment.title.toLowerCase().includes(filter.search.toLowerCase()) ||
      appointment.description.toLowerCase().includes(filter.search.toLowerCase());

    return matchesType && matchesPriority && matchesSearch;
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString();
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
              My Appointments
            </Typography>
          </Box>

          <Grid container spacing={2} sx={{ mb: 4 }}>
            <Grid item xs={12} md={4}>
              <TextField
                fullWidth
                label="Search"
                name="search"
                value={filter.search}
                onChange={handleFilterChange}
                variant="outlined"
                size="small"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                fullWidth
                select
                label="Type"
                name="type"
                value={filter.type}
                onChange={handleFilterChange}
                variant="outlined"
                size="small"
              >
                <MenuItem value="all">All Types</MenuItem>
                <MenuItem value="general">General Checkup</MenuItem>
                <MenuItem value="consultation">Consultation</MenuItem>
                <MenuItem value="followup">Follow-up</MenuItem>
                <MenuItem value="emergency">Emergency</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                fullWidth
                select
                label="Priority"
                name="priority"
                value={filter.priority}
                onChange={handleFilterChange}
                variant="outlined"
                size="small"
              >
                <MenuItem value="all">All Priorities</MenuItem>
                <MenuItem value="low">Low</MenuItem>
                <MenuItem value="medium">Medium</MenuItem>
                <MenuItem value="high">High</MenuItem>
              </TextField>
            </Grid>
          </Grid>

          <List>
            {filteredAppointments.map((appointment, index) => (
              <MotionListItem
                key={appointment.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                sx={{
                  mb: 2,
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  borderRadius: 2,
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  },
                }}
              >
                <ListItemText
                  primary={
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                      <Typography variant="h6">{appointment.title}</Typography>
                      <Chip
                        label={appointment.type}
                        color={getTypeColor(appointment.type)}
                        size="small"
                      />
                      <Chip
                        label={appointment.priority}
                        color={getPriorityColor(appointment.priority)}
                        size="small"
                      />
                    </Box>
                  }
                  secondary={
                    <Box sx={{ mt: 1 }}>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                        {appointment.description}
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                          <AccessTimeIcon fontSize="small" color="action" />
                          <Typography variant="body2">
                            {formatDate(appointment.date)} ({appointment.duration} min)
                          </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                          <LocationOnIcon fontSize="small" color="action" />
                          <Typography variant="body2">{appointment.location}</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                          <PeopleIcon fontSize="small" color="action" />
                          <Typography variant="body2">{appointment.attendees}</Typography>
                        </Box>
                      </Box>
                    </Box>
                  }
                />
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <IconButton 
                    color="primary" 
                    size="small"
                    onClick={() => handleEdit(appointment.id)}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton 
                    color="error" 
                    size="small"
                    onClick={() => handleDelete(appointment.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Box>
              </MotionListItem>
            ))}
          </List>

          {filteredAppointments.length === 0 && (
            <Box sx={{ textAlign: 'center', py: 4 }}>
              <Typography variant="h6" color="text.secondary">
                No appointments found
              </Typography>
            </Box>
          )}
        </MotionPaper>
      </Container>
    </Box>
  );
};

export default AppointmentList; 