import React from 'react';
import EventList from '../../components/Student_Dashboard/EventList';
import cardImg from '../../assets/images/profile-photo.png'
import Navbar from '../../components/Student_Dashboard/navbar.js';
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
      eventName: 'Event 3',
      mode: 'offline',
      dateTime: '2023-07-02T15:30:00',
      location: 'JPMC office',
      photo: cardImg,
    },
    {
      id: 4,
      eventName: 'Event 4',
      skill: 'web development',
      mode: 'online',
      dateTime: '2023-07-02T15:30:00',
      location: 'JPMC office',
      photo: cardImg,
    },
    // Add more event objects as needed
  ];


  // [
  //   {
  //     "id": 1,
  //     "skill": 1,
  //     "online": true,
  //     "date_and_time": "2023-07-01T12:00:00Z",
  //     "link": null,
  //     "location": null,
  //     "volunteers": []
  //   },
  //   {
  //     "id": 2,
  //     "skill": 2,
  //     "online": true,
  //     "date_and_time": "2023-07-01T18:27:15Z",
  //     "link": "https://youtu.be/2dTMIH5gCHg",
  //     "location": "jdhuewud",
  //     "volunteers": [
  //       {
  //         "user": 5,
  //         "qualifications": "fheowhifowef",
  //         "proof": "ejfhewuf",
  //         "isVerified": true
  //       }
  //     ]
  //   }
  // ]

  // {
  //   "user": {
  //     "name": "John Doe",
  //     "email": "johndoe@example.com",
  //     "password": "mypassword",
  //     "address": "123 Main Street"
  //   },
  //   "highest_qualification": "Bachelor's Degree in Computer Science",
  //   "proof": "Certificate of Graduation"
  // }


  return (
    <div>
      <Navbar />
      <EventList events={events} />
    </div>
  );
};

export default Student;



