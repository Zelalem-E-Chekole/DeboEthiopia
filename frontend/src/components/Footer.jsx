import React from 'react';

const Footer = () => {
    const styles = {
        footer: {
            display: 'flex',
            justifyContent: 'center', // Centers content horizontally
            alignItems: 'center',     // Centers content vertically
            padding: '20px',          // Adds padding around the footer
            backgroundColor: '#4a90e2', // Background color for the footer
            color: 'white',           // Text color
            fontSize: '1em',          // Font size for the footer text
            position: 'relative',      // Positions the footer relative to the page
            bottom: '0',              // Sticks the footer to the bottom
            width: '100%',            // Full width of the page
        },
    };

    return (
        <footer style={styles.footer}>
            <p>&copy; 2023 deboEthiopia. All rights reserved.</p>
        </footer>
    );
};

export default Footer;