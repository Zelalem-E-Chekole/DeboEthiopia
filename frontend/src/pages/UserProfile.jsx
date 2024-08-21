// src/pages/UserProfile.js
import React from 'react';
import { useUserContext } from '../context/UserContext';

const UserProfile = () => {
  const { user, loading } = useUserContext(); // Get the user and loading state from UserContext

  if (loading) return <p>Loading...</p>; // Show a loading message if data is being fetched

  if (!user) return <p>No user logged in.</p>; // Show a message if no user is logged in

  return (
    <div className="user-profile">
      <h1>User Profile</h1>
      <div className="user-info">
        <h2>Basic Information</h2>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Password:</strong> ******** </p> {/* Password should not be shown */}
      </div>

      <div className="user-projects">
        <h2>Created Projects</h2>
        {user && user.projects ? (
          <ul>
            {user.projects.map((project) => (
              <li key={project.id}>{project.name}</li>
            ))}
          </ul>
        ) : (
          <p>No projects created yet.</p>
        )}
      </div>

      <div className="user-competitions">
        <h2>Competitions Joined</h2>
        {user && user.joinedCompetitions ? (
          <ul>
            {user.joinedCompetitions.map((competition) => (
              <li key={competition.id}>{competition.name}</li>
            ))}
          </ul>
        ) : (
          <p>No competitions joined yet.</p>
        )}
      </div>

      {/* Similarly, you can add the rest of the sections for events, contents, news, and competitions */}
    </div>
  );
};

export default UserProfile;