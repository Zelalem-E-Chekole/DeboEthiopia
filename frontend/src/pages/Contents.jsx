import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import GenericItem from '../components/GenericItem';

const Contents = () => {
  const [contents, setContents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [showAllContents, setShowAllContents] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const contentsPerPage = 3;

  // Simulate obtaining current user's ID, replace this with actual method
  const currentUserId = 1; // Example user ID

  const fetchContents = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/contents');
      setContents(response.data);
    } catch (err) {
      console.error("Error fetching contents:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContents();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching contents: {error}</p>;

  

{/* const filteredContents = (showAllContents ? contents : contents.filter(content => content.userId === currentUserId))   */}
    
const filteredContents = contents.filter(content => {
  return (selectedCategory === "All" || content.fileType.type === selectedCategory) &&
         content.title.toLowerCase().includes(searchQuery.toLowerCase());
});

  const indexOfLastContent = currentPage * contentsPerPage;
  const indexOfFirstContent = indexOfLastContent - contentsPerPage;
  const currentContents = filteredContents.slice(indexOfFirstContent, indexOfLastContent);
  const totalPages = Math.ceil(filteredContents.length / contentsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="contents-container">
      <h2>Contents</h2>
      <button onClick={() => setShowAllContents(!showAllContents)}>
        {showAllContents ? "Show My Contents" : "Show All Contents"}
      </button>

      <div className="search-container">
        <select onChange={(e) => setSelectedCategory(e.target.value)} value={selectedCategory}>
          <option value="All">All Categories</option>
          <option value="PDF">PDF</option>
          <option value="VIDEO">Video</option>
          <option value="IMAGE">Image</option>
        </select>

        <input
          type="text"
          placeholder="Search Contents"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="contents-list">
        {currentContents.length > 0 ? (
          currentContents.map((content) => (
            <Link to={`/content/${content.id}`} state={{ content }} key={content.id}>
              <GenericItem item={content} type="contents" />
            </Link>
          ))
        ) : (
          <div>No contents available.</div>
        )}
      </div>

      <div className="pagination">
        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button key={index + 1} onClick={() => handlePageChange(index + 1)} className={currentPage === index + 1 ? 'active' : ''}>
            {index + 1}
          </button>
        ))}
        <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
      </div>
    </div>
  );
};

export default Contents;