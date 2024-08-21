import React from 'react';
import { Link } from 'react-router-dom';

const LeftSidebar = () => {
    return (
        <aside className="left-sidebar">
            <h2>Debo Ethiopia</h2>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/events">Events</Link></li>
                    <li><Link to="/businesses">Businesses</Link></li>
                    <li><Link to="/contents">Contents</Link></li>
                    <li><Link to="/competitions">Competitions</Link></li>
                    <li><Link to="/crowdfunding">Crowdfunding</Link></li>
                    <li><Link to="/news">News</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                   
                </ul>
            </nav>

            {/* Create Button */}
            <div className="create-button-container">
                <Link to="/create" style={{ 
                    display: 'block', 
                    marginTop: '20px', 
                    padding: '10px', 
                    backgroundColor: '#007bff', 
                    color: 'white', 
                    textAlign: 'center', 
                    borderRadius: '5px', 
                    textDecoration: 'none'
                }}>
                    Create
                </Link>
            </div>
        </aside>
    );
};

export default LeftSidebar;