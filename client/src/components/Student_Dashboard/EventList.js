import React from 'react';
import Card from './EventCard';

const EventList = ({ events }) => {
    return (
        <div className="event-list">
            {events.map((event) => (
                <Card key={event.id} event={event} />
            ))}
        </div>
    );
};

export default EventList;
