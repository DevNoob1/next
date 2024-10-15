'use client';

import React, { useState, useEffect } from 'react';
import Modal from './Modal';
import EventForm from './EventForm';
import EventList from './EventList';

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [events, setEvents] = useState([]);
  const [isEditing, setIsEditing] = useState(false); // To track if we are editing
  const [currentEventIndex, setCurrentEventIndex] = useState(null); // To store which event we're editing
  const [eventData, setEventData] = useState({
    title: '',
    description: '',
    start: '',
    end: ''
  });

  // Handle modal opening and closing
  const openModalForNewEvent = () => {
    clearForm(); // Clear the form when opening for a new event
    setIsModalOpen(true);
    setIsEditing(false); // Not editing
  };

  const openModalForEditing = (index) => {
    const eventToEdit = events[index];
    setEventData(eventToEdit);
    setIsModalOpen(true);
    setIsEditing(true);
    setCurrentEventIndex(index);
  };

  // Clear the form inputs
  const clearForm = () => {
    setEventData({
      title: '',
      description: '',
      start: '',
      end: ''
    });
  };

  // Handle input changes in the form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEventData({ ...eventData, [name]: value });
  };

  // Save or update events
  const handleSave = (status) => {
    if (isEditing && currentEventIndex !== null) {
      // Update existing event
      const updatedEvents = [...events];
      updatedEvents[currentEventIndex] = { ...eventData, status };
      setEvents(updatedEvents);
    } else {
      // Create new event
      setEvents([...events, { ...eventData, status }]);
    }

    setIsModalOpen(false);
    setIsEditing(false); // Reset editing state
    setCurrentEventIndex(null); // Reset current index
    clearForm();
  };

  return (
    <div className="container"> {/* Use the container class for consistent layout */}
      {/* Header */}
      <h1 className="text-3xl font-bold mb-4 text-red-500">Event Manager</h1>

      {/* Button to open modal for a new event */}
      <button
        onClick={openModalForNewEvent}
        className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700"
      >
        Create Event
      </button>

      {/* Modal */}
      <Modal isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)}>
        <EventForm
          eventData={eventData}
          handleInputChange={handleInputChange}
          handleSave={handleSave}
          isEditing={isEditing}
        />
      </Modal>

      {/* Event List */}
      <EventList events={events} openModalForEditing={openModalForEditing} />
    </div>
  );
}
