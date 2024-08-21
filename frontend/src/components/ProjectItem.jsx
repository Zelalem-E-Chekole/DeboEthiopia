// src/components/ProjectItem.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProjectItem = ({ project }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/projects/${project.id}`);
  };

  return (
    <div className="project-item" onClick={handleClick} key={project.id} style={{cursor: 'pointer'}}>
      <h3 className="project-title">{project.title}</h3>
      <p className="project-description">{project.description}</p>
    </div>
  );
};

export default ProjectItem;