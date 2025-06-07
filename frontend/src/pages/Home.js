import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Box,
  useTheme,
} from '@mui/material';
import {
  Event as EventIcon,
  Notifications as NotificationsIcon,
  Security as SecurityIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const MotionCard = motion(Card);
const MotionTypography = motion(Typography);
const MotionButton = motion(Button);

const Home = () => {
  const theme = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <Container maxWidth="lg">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <Box sx={{ mt: 8, mb: 4, textAlign: 'center' }}>
          <MotionTypography
            variant="h2"
            component="h1"
            gutterBottom
            variants={itemVariants}
            sx={{
              background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 'bold',
            }}
          >
            Welcome to Appointment Scheduler
          </MotionTypography>
          <MotionTypography
            variant="h5"
            color="textSecondary"
            paragraph
            variants={itemVariants}
          >
            Manage your appointments efficiently and never miss an important meeting
          </MotionTypography>
          <MotionButton
            variant="contained"
            color="primary"
            size="large"
            component={RouterLink}
            to="/register"
            sx={{ mt: 2 }}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </MotionButton>
        </Box>

        <Grid container spacing={4} sx={{ mt: 4 }}>
          {[
            {
              icon: <EventIcon sx={{ fontSize: 40 }} />,
              title: 'Easy Scheduling',
              description: 'Schedule appointments with just a few clicks. Choose your preferred time slot and get instant confirmation.',
            },
            {
              icon: <NotificationsIcon sx={{ fontSize: 40 }} />,
              title: 'Smart Reminders',
              description: 'Get timely reminders for your appointments. Never miss an important meeting again.',
            },
            {
              icon: <SecurityIcon sx={{ fontSize: 40 }} />,
              title: 'Secure & Private',
              description: 'Your data is secure with us. We use industry-standard encryption to protect your information.',
            },
          ].map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <MotionCard
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: theme.shadows[10],
                }}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease-in-out',
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <Typography
                    variant="h5"
                    component="h2"
                    sx={{ mt: 2, fontWeight: 'bold' }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography color="textSecondary" sx={{ mt: 1 }}>
                    {feature.description}
                  </Typography>
                </CardContent>
              </MotionCard>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Container>
  );
};

export default Home; 