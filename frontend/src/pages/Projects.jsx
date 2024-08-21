import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GenericItem from '../components/GenericItem';

const Projects = () => {
  const [showUserProjects, setShowUserProjects] = useState(true);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 3;

  const fetchProjects = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/projects');
      console.log('Projects fetched:', response.data);
      
      // Assign unique IDs to each project
      const projectsWithId = response.data.map((project, index) => ({
        id: index + 1, // Use index + 1 as ID
        title: project.name, // Use name property
        description: project.crowdfunded ? "Crowdfunded" : "Not Crowdfunded", // Create a description
        ...project // Include other properties if necessary
      }));

      setProjects(projectsWithId);
    } catch (err) {
      console.error('Error fetching projects:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching projects: {error}</p>;
  }

  const userProjects = [1, 2]; 
  const filteredProjects = projects.filter((project) => 
    (showUserProjects ? userProjects.includes(project.id) : true) && 
    project.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="projects-container">
      <h2>Projects</h2>
      <button onClick={() => setShowUserProjects(!showUserProjects)}>
        {showUserProjects ? "Show All Projects" : "Show My Projects"}
      </button>
      
      <input
        type="text"
        placeholder="Search Projects"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <button onClick={() => console.log("New project creation logic goes here.")} style={{ marginLeft: '10px' }}>
        New Project
      </button>
      
      {currentProjects.map((project) => (
        <GenericItem 
          className='generic-item' 
          item={project}  // Now project already has id, title, description
          type="projects" 
          key={project.id} 
        />
      ))}

      <div className="pagination">
        <button 
          onClick={() => handlePageChange(currentPage - 1)} 
          disabled={currentPage === 1}
        > 
          Previous 
        </button>
        
        {Array.from({ length: totalPages }, (_, index) => (
          <button 
            key={index + 1} 
            onClick={() => handlePageChange(index + 1)} 
            className={currentPage === index + 1 ? 'active' : ''} 
          >
            {index + 1}
          </button>
        ))}
        
        <button 
          onClick={() => handlePageChange(currentPage + 1)} 
          disabled={currentPage === totalPages}
        > 
          Next 
        </button>
      </div>
    </div>
  );
};

export default Projects;