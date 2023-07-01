import React from 'react';
import EventList from '../../components/Student_Dashboard/EventList';
import cardImg from '../../assets/images/profile-photo.png'

const Student = () => {
  const events = [
    {
      id: 1,
      eventName: 'Event 1',
      mode: 'online',
      dateTime: '2023-07-01T10:00:00',
      location: 'Online',
      photo: cardImg,
    },
    {
      id: 2,
      eventName: 'Event 2',
      mode: 'offline',
      dateTime: '2023-07-02T15:30:00',
      location: 'JPMC office',
      photo: cardImg,
    },
    {
      id: 3,
      eventName: 'Event 2',
      mode: 'offline',
      dateTime: '2023-07-02T15:30:00',
      location: 'JPMC office',
      photo: cardImg,
    },
    // Add more event objects as needed
  ];

  return (
    <div>
      <h1>Event List</h1>
      <EventList events={events} />
    </div>
  );
};

export default Student;
