import React from 'react';
import '../styles/ProjectCard.css'; // Add a CSS file for specific styles

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="project-actions">
        <button>View Details</button>
        <button>Like</button> {/* Add like functionality */}
        <span>{project.likes} Likes</span>
      </div>
    </div>
  );
};

export default ProjectCard;