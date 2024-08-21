import React from 'react';

const RightSidebar = () => {
    const styles = {
        sidebar: {
            backgroundColor: '#fff',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 0 10px rgba(0,0,0,0.1)',
            marginLeft: '20px',
            width: '250px',
        },
        heading: {
            borderBottom: '2px solid #4a90e2',
            paddingBottom: '10px',
            marginBottom: '15px',
            color: '#4a90e2',
            fontSize: '1.5em',
        },
        projectList: {
            listStyleType: 'none',
            padding: 0,
            margin: 0,
        },
        projectItem: {
            marginBottom: '15px',
            padding: '10px',
            border: '1px solid #ddd',
            borderRadius: '5px',
            backgroundColor: '#f7f7f7',
            transition: 'transform 0.2s',
        },
        projectLink: {
            textDecoration: 'none',
            color: '#333',
            fontWeight: 'bold',
            hover: {
                color: '#4a90e2',
            },
        },
        announcement: {
            marginTop: '20px',
            padding: '10px',
            border: '1px solid #ffecb3',
            borderRadius: '5px',
            backgroundColor: '#fff3cd',
            color: '#856404',
        },
    };

    return (
        <aside style={styles.sidebar}>
            <h2 style={styles.heading}>Trending Projects</h2>
            <ul style={styles.projectList}>
                <li style={styles.projectItem}>
                    <a href="#" style={styles.projectLink}>GreenEthiopia: Urban Tree Planting Initiative</a>
                    <p>A collaborative effort to plant trees in urban areas, focusing on sustainability and community involvement.</p>
                </li>
                <li style={styles.projectItem}>
                    <a href="#" style={styles.projectLink}>Women Empowerment Workshop</a>
                    <p>This project aims to provide skills training to women, facilitating economic independence through entrepreneurship.</p>
                </li>
                <li style={styles.projectItem}>
                    <a href="#" style={styles.projectLink}>Ethiopian Culture Festival</a>
                    <p>An exciting event celebrating the diversity of Ethiopian cultures through food, music, and art.</p>
                </li>
                <li style={styles.projectItem}>
                    <a href="#" style={styles.projectLink}>Youth Leadership Program</a>
                    <p>Empowering young leaders through workshops and mentorship to inspire future generations.</p>
                </li>
            </ul>

            <h2 style={styles.heading}>Announcements</h2>
            <div style={styles.announcement}>
                <p>🎉 Check out our upcoming event on March 15th, 2024! Join us for a day of innovation and community building!</p>
            </div>
        </aside>
    );
};

export default RightSidebar;