// src/pages/EventDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';

// Sample event data (to simulate an API)
const eventData = [
  {
    id: 1,
    title: "Event One",
    description: "Detailed description of Event One.",
    details: "More information about Event One.",
  },
  {
    id: 2,
    title: "Event Two",
    description: "Detailed description of Event Two.",
    details: "More information about Event Two.",
  },
  {
    id: 3,
    title: "Event Three",
    description: "Detailed description of Event Three.",
    details: "More information about Event Three.",
  },
  {
    id: 4,
    title: "Event Four",
    description: "Detailed description of Event Four.",
    details: "More information about Event Four.",
  },
  {
    id: 5,
    title: "Event Five",
    description: "Detailed description of Event Five.",
    details: "More information about Event Five.",
  },
];

const EventDetails = () => {
  const { id } = useParams();
  const event = eventData.find(e => e.id === Number(id));

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <div className="event-details">
      <h2>{event.title}</h2>
      <p>{event.description}</p>
      <p>{event.details}</p>
      <a href="/events">Back to Events</a>
    </div>
  );
};

export default EventDetails;