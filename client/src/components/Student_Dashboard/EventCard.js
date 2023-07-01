import React from 'react';
import './EventCard.css'
const Card = ({ event }) => {
    const handleNotifyVolunteers = () => {
        // Add your logic to notify volunteers here
    };

    return (
        <div className="card">
            <img src={event.photo} alt="Event" className="card-image" />
            <div className="card-content">
                <h3 className="card-title">{event.eventName}</h3>
                <p className="card-mode">Mode: {event.mode}</p>
                <p className="card-date">Date & Time: {event.dateTime}</p>
                <p className="card-location">Location: {event.location}</p>
                <button className="card-button" onClick={handleNotifyVolunteers}>
                    Register
                </button>
            </div>
        </div>
    );
};

export default Card;
