import React from 'react';
import './globals.css';

export default function EventForm({ eventData, handleInputChange, handleSave, isEditing }) {
    return (
        <form>
            <div className="modal-header">{isEditing ? 'Edit Event' : 'Create Event'}</div>
            <input
                type="text"
                name="title"
                placeholder="Event Title"
                value={eventData.title}
                onChange={handleInputChange}
            />
            <textarea
                name="description"
                placeholder="Event Description"
                value={eventData.description}
                onChange={handleInputChange}
                rows="4"
            />
            <input
                type="date"
                name="start"
                value={eventData.start}
                onChange={handleInputChange}
            />
            <input
                type="date"
                name="end"
                value={eventData.end}
                onChange={handleInputChange}
            />

            <div className="save_publish ">
                <button
                    type="button"
                    onClick={() => handleSave('DRAFT')}
                >
                    Save
                </button>
                <button
                    type="button"
                    onClick={() => handleSave('PENDING')}
                >
                    Publish
                </button>
            </div>
        </form>
    );
}
