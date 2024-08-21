// src/pages/ProjectDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const calculatePERT = (tasks) => {
    return tasks.map(task => {
        const { optimistic, pessimistic, mostLikely } = task;
        const expectedDuration = (optimistic + 4 * mostLikely + pessimistic) / 6;
        return { ...task, expectedDuration };
    });
};

const GanttChart = ({ tasks }) => {
    const data = {
        labels: tasks.map(task => task.name),
        datasets: [
            {
                label: 'Duration',
                data: tasks.map(task => task.completed ? task.duration || 0 : 0),
                backgroundColor: tasks.map(task => task.completed ? 'rgba(75, 192, 192, 0.2)' : 'rgba(255, 99, 132, 0.2)'),
                borderColor: tasks.map(task => task.completed ? 'rgba(75, 192, 192, 1)' : 'rgba(255, 99, 132, 1)'),
                borderWidth: 1,
            },
        ],
    };

    return <Bar data={data} />;
};

const ProjectDetails = () => {
    const { id } = useParams();
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [hasJoined, setHasJoined] = useState(false);
    const [chatMessages, setChatMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    useEffect(() => {
        const fetchProjectData = async () => {
            try {
                const response = await fetch(`http://localhost:8080/api/projects/${id}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setProject(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProjectData();
    }, [id]);

    const handleJoin = () => {
        setHasJoined(true);
    };

    const handleDonate = () => {
        alert('Thank you for your donation!');
    };

    const handleAddTask = () => {
        alert('Task addition logic here.');
    };

    const handleAddEvent = () => {
        alert('Event addition logic here.');
    };

    const handleSendMessage = (e) => {
        e.preventDefault(); // Prevent default form submission
        if (newMessage.trim()) {
            setChatMessages([...chatMessages, newMessage]);
            setNewMessage(''); // Clear the input field
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!project) {
        return <div>Project not found</div>;
    }

    const tasks = project.tasks || [];
    const pertResults = calculatePERT(tasks);
    const joinedUsers = project.userRoles ? project.userRoles.map(role => role.username) : [];

    return (
        <div className="project-details">
            <h1 className="project-title">{project.name || 'Project Name Unavailable'}</h1>
            <div className="project-overview">
                <p>{project.description || 'Description not available.'}</p>
            </div>

            <div>
                {!hasJoined && <button onClick={handleJoin}>Join</button>}
                {project.crowdfunded && <button onClick={handleDonate}>Donate</button>}
            </div>

            <div className="project-details-section">
                <h2>Project Details</h2>
                <ul>
                    <li><strong>Objectives:</strong> {project.objectives || 'Objectives not provided.'}</li>
                    <li><strong>Scope:</strong> {project.scope || 'Scope not provided.'}</li>
                    <li>
                        <strong>Timeline:</strong> {project.startDate ? project.startDate : 'Start Date not available'} - 
                        {project.endDate ? project.endDate : 'Ongoing'}
                    </li>
                    <li><strong>Status:</strong> {project.status || 'Status not available.'}</li>
                    <li><strong>Contact Info:</strong> {project.contactInfo ? project.contactInfo.join(', ') : 'No contact info available.'}</li>
                </ul>
            </div>

            <div>
                <h2>Critical Path</h2>
                <GanttChart tasks={tasks} />

                {/* Added both "Add Task" and "Add Event" Buttons */}
                <div style={{ display: 'flex', gap: '10px' }}>
                    <button onClick={handleAddTask}>Add Task</button>
                    <button onClick={handleAddEvent}>Add Event</button>
                </div>

                <h2>PERT Estimates</h2>
                <ul>
                    {pertResults.map(task => (
                        <li key={task.id}>
                            {task.name}: Expected Duration = {task.expectedDuration.toFixed(2)}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Chat Area Section */}
            <div className="chat-area" style={{ display: 'flex', flexDirection: 'column', height: '300px', border: '1px solid #ccc', marginBottom: '20px' }}>
                <h2>Chat</h2>
                <div className="chat-messages" style={{ flex: 1, overflowY: 'auto', padding: '10px' }}>
                    {chatMessages.length > 0 ? chatMessages.map((msg, index) => (
                        <div key={index}>{msg}</div>
                    )) : (
                        <div>No chat messages yet.</div>
                    )}
                </div>
                <form onSubmit={handleSendMessage} style={{ display: 'flex', padding: '10px' }}>
                    <input 
                        type="text" 
                        value={newMessage} 
                        onChange={(e) => setNewMessage(e.target.value)} 
                        placeholder="Type your message..." 
                        style={{ flex: 1, marginRight: '10px', padding: '5px' }} 
                    />
                    <button type="submit">Send</button>
                </form>
            </div>

            <div className="joined-users">
                <h2>Joined Users</h2>
                <p>{joinedUsers.length > 0 ? joinedUsers.join(', ') : 'No users have joined this project.'}</p>
            </div>

            <div className="project-documents">
                <h2>Documentation</h2>
                {project.documents && project.documents.length > 0 ? (
                    project.documents.map(doc => (
                        <a key={doc.id} href={doc.url}>{doc.name}</a>
                    ))
                ) : (
                    <p>No documents available.</p>
                )}
            </div>

            <div className="project-budget">
                <h2>Budget and Funding</h2>
                <p>{project.budgetDetails || 'Budget details not available.'}</p>
            </div>

            <div className="related-events">
                <h2>Related Events</h2>
                <p>{project.relatedEvents && project.relatedEvents.length > 0 ? project.relatedEvents.join(', ') : 'No related events available.'}</p>
            </div>

            <div className="images-section">
                <h2>Images</h2>
                {project.images && project.images.length > 0 ? (
                    project.images.map((image, index) => (
                        <img key={index} src={image.url} alt={`Project Image ${index}`} />
                    ))
                ) : (
                    <p>No images available.</p>
                )}
            </div>

            <div className="comments-section">
                {/* Comments logic can be added here */}
            </div>
        </div>
    );
};

export default ProjectDetails;