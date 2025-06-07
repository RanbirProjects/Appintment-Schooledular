import React, { useState, useEffect, useCallback } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import styled from '@emotion/styled';
import { useSpring, animated } from 'react-spring';

const CalendarContainer = styled(motion.div)`
  padding: 20px;
  height: 800px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  margin: 20px auto;
  max-width: 1200px;
  overflow: hidden;
`;

const EventModal = styled(motion.div)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  width: 400px;
  max-width: 90vw;
`;

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const EventTitle = styled.h2`
  color: #2c3e50;
  margin-bottom: 16px;
  font-size: 1.5em;
`;

const EventDetail = styled.p`
  color: #34495e;
  margin: 8px 0;
  font-size: 1.1em;
`;

const Calendar = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchAppointments = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await axios.get('http://localhost:5001/api/appointments');
      const formattedEvents = response.data.map(appointment => ({
        id: appointment._id,
        title: appointment.title,
        start: appointment.date,
        end: new Date(new Date(appointment.date).getTime() + appointment.duration * 60000),
        backgroundColor: getEventColor(appointment.type),
        borderColor: getEventColor(appointment.type),
        textColor: '#ffffff',
        extendedProps: {
          description: appointment.description,
          type: appointment.type,
          priority: appointment.priority,
          location: appointment.location
        }
      }));
      setEvents(formattedEvents);
    } catch (error) {
      console.error('Error fetching appointments:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchAppointments();
  }, [fetchAppointments]);

  const getEventColor = (type) => {
    const colors = {
      'meeting': '#3788d8',
      'appointment': '#28a745',
      'reminder': '#ffc107',
      'task': '#dc3545'
    };
    return colors[type] || '#3788d8';
  };

  const handleEventClick = (info) => {
    setSelectedEvent(info.event);
  };

  const handleDateSelect = async (selectInfo) => {
    const title = prompt('Please enter a title for your appointment');
    if (title) {
      const start = selectInfo.start;
      const end = selectInfo.end;
      const duration = Math.round((end - start) / 60000);

      try {
        await axios.post('http://localhost:5001/api/appointments', {
          title,
          date: start,
          duration,
          type: 'appointment',
          priority: 'medium',
          description: '',
          location: ''
        });
        await fetchAppointments();
      } catch (error) {
        console.error('Error creating appointment:', error);
      }
    }
  };

  const modalAnimation = useSpring({
    opacity: selectedEvent ? 1 : 0,
    transform: selectedEvent ? 'scale(1)' : 'scale(0.9)',
    config: { tension: 300, friction: 20 }
  });

  return (
    <CalendarContainer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="timeGridWeek"
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        }}
        editable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        weekends={true}
        events={events}
        select={handleDateSelect}
        eventClick={handleEventClick}
        height="100%"
        slotMinTime="08:00:00"
        slotMaxTime="20:00:00"
        allDaySlot={false}
        slotDuration="00:30:00"
        eventClassNames="calendar-event"
        eventContent={(eventInfo) => (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="event-content"
          >
            {eventInfo.event.title}
          </motion.div>
        )}
      />

      <AnimatePresence>
        {selectedEvent && (
          <>
            <ModalOverlay
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedEvent(null)}
            />
            <animated.div style={modalAnimation}>
              <EventModal>
                <EventTitle>{selectedEvent.title}</EventTitle>
                <EventDetail>Type: {selectedEvent.extendedProps.type}</EventDetail>
                <EventDetail>Priority: {selectedEvent.extendedProps.priority}</EventDetail>
                <EventDetail>Location: {selectedEvent.extendedProps.location}</EventDetail>
                <EventDetail>Description: {selectedEvent.extendedProps.description}</EventDetail>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedEvent(null)}
                  style={{
                    padding: '8px 16px',
                    background: '#3788d8',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    marginTop: '16px'
                  }}
                >
                  Close
                </motion.button>
              </EventModal>
            </animated.div>
          </>
        )}
      </AnimatePresence>
    </CalendarContainer>
  );
};

export default Calendar; 