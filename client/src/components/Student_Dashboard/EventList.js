import React, { useState } from 'react';
import Card from './EventCard';
import './EventList.css'

const EventList = ({ events }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredEvents = events.filter((event) =>
        event.eventName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div >
            <div className='Event-search'>
                <input
                    type="text"
                    placeholder="Search events"
                    style={{ '::placeholder': { color: 'white' } }}
                    value={searchQuery}
                    onChange={handleSearch}
                    className='search-input'

                />
            </div>
            <div className="event-list">
                {filteredEvents.map((event) => (
                    <Card key={event.id} event={event} />
                ))}
            </div>
        </div>
    );
};

export default EventList;
