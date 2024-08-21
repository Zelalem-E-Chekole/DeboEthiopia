import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GenericItem from '../components/GenericItem'; // Ensure the path is correct

const Crowdfunding = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);   
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 3;

  const fetchProjects = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/projects/crowdfunded');
      setProjects(response.data);
    } catch (err) {
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

  // Filter projects based on the search query
  const filteredProjects = projects.filter(project =>
    project.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Pagination logic
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="crowdfunding-container">
      <h2>Crowdfunded Projects</h2>
      <input
        type="text"
        placeholder="Search Projects"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <div className="projects-list">
        {currentProjects.map((project) => (
          <GenericItem
            key={project.id}
            item={{
              title: project.name,
              description: project.tasks.length + ' tasks available', // Custom description
              images: [], // You can set this based on your project model if applicable
              crowdfunded: project.crowdfunded
            }}
            type="projects"
          />
        ))}
      </div>

      {/* Pagination Controls */}
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

export default Crowdfunding;