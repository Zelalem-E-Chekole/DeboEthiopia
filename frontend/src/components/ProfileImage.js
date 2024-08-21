// src/components/ProfileImage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar'; // Import MUI Avatar
import { useUserContext } from '../context/UserContext'; // Import the UserContext hook

const ProfileImage = () => {
  const { user } = useUserContext(); // Get user from context

  return (
    <div style={{ display: 'flex', alignItems: 'center', marginLeft: '20px' }}>
      {user ? (
        <Link to="/profile" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <img
            src={user.profileImage || 'default-image-url.jpg'} // Use user profile image or a default
            alt="User Profile"
            style={{
              width: '80px', // Set size of profile image
              height: '80px',
              borderRadius: '50%', // Make the image circular
              cursor: 'pointer',
            }}
          />
          <span style={{ marginLeft: '10px', fontSize: '1.2rem' }}>{user.username}</span> {/* Show username */}
        </Link>
      ) : (
        <Link to="/login" style={{ textDecoration: 'none' }}>
          <Avatar 
            alt="Login"
            style={{
              width: '80px',
              height: '80px',
              cursor: 'pointer',
            }} 
          />
        </Link>
      )}
    </div>
  );
};

export default ProfileImage;