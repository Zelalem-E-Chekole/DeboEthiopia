import React from 'react';

const AboutUs = () => {
    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '50px',
            backgroundColor: '#fff',
            color: '#333',
            textAlign: 'center',
        },
        header: {
            fontSize: '2em',
            marginBottom: '20px',
        },
        mission: {
            backgroundColor: '#4a90e2',
            color: 'white',
            padding: '20px',
            borderRadius: '8px',
            width: '80%',
            margin: '20px 0',
        },
        image: {
            width: '80%',
            height: 'auto',
            borderRadius: '8px',
            margin: '20px 0',
        },
        text: {
            fontSize: '1.2em',
            lineHeight: '1.6em',
            marginBottom: '20px',
        },
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.header}>About DeboEthiopia</h1>
            <img
                src="https://example.com/about-us-image.jpg"
                alt="About DeboEthiopia"
                style={styles.image}
            />
            <p style={styles.text}>
                DeboEthiopia is a platform dedicated to fostering collaboration among Ethiopians in various community-driven projects. Our goal is to empower individuals and communities to work together toward common goals, enhancing education, cultural exchange, and social responsibility.
            </p>
            <h2 style={styles.header}>Our Mission</h2>
            <p style={{ ...styles.text, ...styles.mission }}>
                To create a vibrant community where Ethiopians can share skills, resources, and ideas to improve their local and national environments.
            </p>
            <h2 style={styles.header}>Get Involved</h2>
            <p style={styles.text}>
                Whether you are looking to volunteer, promote a local business, or start a community project, DeboEthiopia offers the tools and resources you need to make a difference.
            </p>
        </div>
    );
};

export default AboutUs;