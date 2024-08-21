// src/pages/ContentDetails.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';

const ContentDetails = () => {
  const location = useLocation();
  const { content } = location.state || {}; // Access the passed state from the router

  if (!content) {
    return <div>No content found.</div>;
  }

  return (
    <div className="content-details-container">
      <h2>{content.title}</h2>
      <p><strong>Type:</strong> {content.category}</p>
      <p><strong>Description:</strong> {content.description}</p>
      <p><strong>Created By:</strong> {content.creator}</p>
      <p>
        <strong>Download Link:</strong> <a href={content.downloadLink} target="_blank" rel="noopener noreferrer">Download</a>
      </p>
    </div>
  );
};

export default ContentDetails;