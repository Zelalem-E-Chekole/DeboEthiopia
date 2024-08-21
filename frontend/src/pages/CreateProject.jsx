// src/components/ProjectForm.js
import React, { useState } from 'react';

const CreateProject = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProject = {
      id: Date.now(), // Simple ID generation for demonstration
      title: title,
      description: description,
    };
    onSubmit(newProject);
    // Clear the form
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="project-form">
      <h3>Create New Project</h3>
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </label>
      <label>
        Description:
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </label>
      <button type="submit">Create Project</button>
    </form>
  );
};

export default CreateProject;