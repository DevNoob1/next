import React from 'react';
import './globals.css';

export default function EventList({ events, openModalForEditing }) {
    return (
        <div className="event-list">
            <h2 className="event-list-title">Events</h2>
            {events.length === 0 ? (
                <p>No events yet.</p>
            ) : (
                <ul className="event-list-items">
                    {events.map((event, index) => (
                        <li key={index} className="event-item">
                            <span className="event-title">{event.title}</span>
                            <span className="event-description">{event.description}</span>
                            <span className="event-dates">{event.start} <br /> {event.end}</span>
                            <span className={`event-status ${event.status.toLowerCase()}`}>{event.status}</span>
                            <button
                                onClick={() => openModalForEditing(index)}
                                className="edit-button"
                            >
                                Edit
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
