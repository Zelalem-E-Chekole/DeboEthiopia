// src/pages/Events.js
import React, { useState } from 'react';
import GenericItem from '../components/GenericItem';

const userEvents = [1, 2]; // IDs of events the user is involved in for demonstration purposes
const allEvents = [
  { id: 1, title: "Event One", description: "Short description of Event One." },
  { id: 2, title: "Event Two", description: "Short description of Event Two." },
  { id: 3, title: "Event Three", description: "Short description of Event Three." },
  { id: 4, title: "Event Four", description: "Short description of Event Four." },
  { id: 5, title: "Event Five", description: "Short description of Event Five." },
  { id: 6, title: "Event Six", description: "Short description of Event Six." },
  { id: 7, title: "Event Seven", description: "Short description of Event Seven." },
  { id: 8, title: "Event Eight", description: "Short description of Event Eight." },
  { id: 9, title: "Event Nine", description: "Short description of Event Nine." },
  { id: 10, title: "Event Ten", description: "Short description of Event Ten." },
];

const Events = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [showAllEvents, setShowAllEvents] = useState(false); // State to toggle showing all events
  const eventsPerPage = 3;

  // Filter events based on the user's preference
  const filteredEvents = (showAllEvents ? allEvents : allEvents.filter(event => userEvents.includes(event.id)))
    .filter(event => event.title.toLowerCase().includes(searchQuery.toLowerCase())); // apply search filtering

  // Pagination logic
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = filteredEvents.slice(indexOfFirstEvent, indexOfLastEvent);
  const totalPages = Math.ceil(filteredEvents.length / eventsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="events-container">
      <h2>Events</h2>
      <button onClick={() => setShowAllEvents(!showAllEvents)}>
        {showAllEvents ? "Show My Events" : "Show All Events"}
      </button>
      <input
        type="text"
        placeholder="Search Events"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      
      {currentEvents.map((event) => (
        <GenericItem item={event} type="events" key={event.id} />
      ))}

      {/* Pagination Controls */}
      <div className="pagination">
        <button 
          onClick={() => handlePageChange(currentPage - 1)} 
          disabled={currentPage === 1}
        > 
          Previous 
        </button>
        
        {Array.from({ length: totalPages }, (_, index) => (
          <button 
            key={index + 1} 
            onClick={() => handlePageChange(index + 1)} 
            className={currentPage === index + 1 ? 'active' : ''} 
          >
            {index + 1}
          </button>
        ))}
        
        <button 
          onClick={() => handlePageChange(currentPage + 1)} 
          disabled={currentPage === totalPages}
        > 
          Next 
        </button>
      </div>
    </div>
  );
};

export default Events;