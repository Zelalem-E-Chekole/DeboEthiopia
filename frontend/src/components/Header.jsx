import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import fixedImage from '../assets/images/fixed-ethiopian-flag.png'; 
import Avatar from '@mui/material/Avatar';
import { useUserContext } from '../context/UserContext'; 

const Header = () => {
  const { user } = useUserContext(); 
  const [isWaving, setIsWaving] = useState(false); 


  const toggleFlag = () => {
    setIsWaving(!isWaving);
  };

  return (
    <header>
      <div className="header-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div className="logo" style={{ display: 'flex', alignItems: 'center' }}>
          <h1>
            <Link to="/">deboEthiopia</Link>
          </h1>
          {/* Flag image that changes on click */}
          <img
            src={isWaving ? "https://media.giphy.com/media/63IpmfGjYHFhS/giphy.gif" : fixedImage}
            alt="Flag"
            onClick={toggleFlag}
            style={{ width: '100px', marginLeft: '10px', cursor: 'pointer' }} 
          />
        </div>
        
        <div className="search-bar" style={{ marginLeft: '20px' }}>
          <input type="text" placeholder="Search..." />
        </div>

        {/* User Profile Section */}
        <div className="user-profile" style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
          {user ? (
            <Link to="/profile" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
              <img
                src={user.profileImage || 'fixed-ethiopian-flag.png'} // Use a user profile image or a default
                alt="User Profile"
                style={{
                  width: '80px', // Set size of profile image
                  height: '80px',
                  borderRadius: '50%', // Makes the image circular
                  cursor: 'pointer',
                  marginLeft: '20px' // Space to the left of the profile image
                }}
              />
              <span style={{ marginLeft: '10px' }}>{user.username}</span> {/* Show username */}
            </Link>
          ) : (
            <Link to="/login" style={{ marginLeft: '20px', textDecoration: 'none' }}>
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
      </div>
    </header>
  );
};

export default Header;