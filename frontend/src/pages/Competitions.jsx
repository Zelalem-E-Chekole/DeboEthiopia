import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GenericItem from '../components/GenericItem'; // Ensure the path is correct

const Competitions = () => {
  const [competitionsList, setCompetitionsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const competitionsPerPage = 3; // Number of competitions per page

  const fetchCompetitions = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/competitions'); // Adjust the URL according to your API
      setCompetitionsList(response.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCompetitions();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching competitions: {error}</p>;
  }

  // Filter competitions based on the search query
  const filteredCompetitions = competitionsList.filter(competition =>
    competition.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Pagination logic
  const indexOfLastCompetition = currentPage * competitionsPerPage;
  const indexOfFirstCompetition = indexOfLastCompetition - competitionsPerPage;
  const currentCompetitions = filteredCompetitions.slice(indexOfFirstCompetition, indexOfLastCompetition);
  const totalPages = Math.ceil(filteredCompetitions.length / competitionsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="competitions-container">
      <h2>Competitions</h2>
      <input
        type="text"
        placeholder="Search Competitions"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <div className="competitions-list">
        {currentCompetitions.map((competition) => (
          <GenericItem
            key={competition.id}
            item={{
              ...competition,
              // Customized description
              description: `Creator: ${competition.creator}`,
              submissionDates: `Submissions: ${new Date(competition.submissionStartDate).toLocaleString()} - ${new Date(competition.submissionEndDate).toLocaleString()}`,
              assessmentEnd: `Assessment Ends: ${new Date(competition.assessmentEndDate).toLocaleString()}`,
              competitionClose: `Competition Closes: ${new Date(competition.competitionCloseDate).toLocaleString()}`,
            }}
            type="competition"
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

export default Competitions;