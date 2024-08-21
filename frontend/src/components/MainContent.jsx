import React from 'react';

// Import local images
import image1 from '../assets/images/community.PNG';
import image2 from '../assets/images/planting2.PNG';
import image3 from '../assets/images/culture.png';
import image4 from '../assets/images/education.jpg';
import image5 from '../assets/images/volunteer.jpg';
import image6 from '../assets/images/collaboration.jpg';

const MainContent = () => {
    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#f9f9f9',
            padding: '50px',
            textAlign: 'center',
        },
        header: {
            backgroundColor: '#4a90e2',
            color: 'white',
            padding: '40px',
            borderRadius: '8px',
            width: '100%',
        },
        featureSection: {
            marginTop: '30px',
            padding: '20px',
            borderRadius: '5px',
            boxShadow: '0 0 10px rgba(0,0,0,0.1)',
            backgroundColor: 'white',
            width: '80%',
        },
        featureList: {
            listStyleType: 'none',
            padding: 0,
        },
        featureItem: {
            padding: '10px',
            fontWeight: 'bold',
            fontSize: '1.2em',
            borderBottom: '1px solid #ddd',
        },
        footer: {
            marginTop: '40px',
            color: '#888',
        },
        imageGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: '15px',
            marginTop: '30px',
            width: '80%',
        },
        image: {
            width: '100%',
            height: '200px', // Fixed height for uniformity
            objectFit: 'cover', // Ensures images cover the area without distortion
            borderRadius: '8px',
        },
    };

    return (
        <div style={styles.container}>
            <header style={styles.header}>
                <h1>Welcome to DeboEthiopia</h1>
                <p>Collaborate. Innovate. Create a better tomorrow.</p>
            </header>
            <section style={styles.featureSection}>
                <h2>Join Us in Community Projects</h2>
                <ul style={styles.featureList}>
                    <li style={styles.featureItem}>📝 Translation Projects</li>
                    <li style={styles.featureItem}>📚 Educational Content Creation</li>
                    <li style={styles.featureItem}>🌱 Community Service Initiatives</li>
                    <li style={styles.featureItem}>🎉 Cultural Exchange Programs</li>
                    <li style={styles.featureItem}>🤝 Volunteer Opportunities</li>
                </ul>
            </section>
            <div style={styles.imageGrid}>
                <img
                    src={image1}
                    alt="DeboEthiopia"
                    style={styles.image}
                />
                <img
                    src={image2}
                    alt="Community Project"
                    style={styles.image}
                />
                <img
                    src={image3}
                    alt="Cultural Exchange"
                    style={styles.image}
                />
                <img
                    src={image4}
                    alt="Education"
                    style={styles.image}
                />
                <img
                    src={image5}
                    alt="Volunteer Work"
                    style={styles.image}
                />
                <img
                    src={image6}
                    alt="Local Business"
                    style={styles.image}
                />
            </div>
           
        </div>
    );
};

export default MainContent;