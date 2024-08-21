import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import GenericItem from '../components/GenericItem';

const Businesses = () => {
  const [businesses, setBusinesses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  
  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const businessesPerPage = 3; // Number of businesses to display per page

  const fetchBusinesses = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:8080/api/businesses');
      console.log("Fetched businesses:", response.data);
      setBusinesses(response.data);
    } catch (err) {
      console.error("Error fetching businesses:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBusinesses();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching businesses: {error}</p>;

  // Filter businesses based on search query
  const filteredBusinesses = businesses.filter(business => 
    business.name && 
    business.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Pagination logic
  const indexOfLastBusiness = currentPage * businessesPerPage;
  const indexOfFirstBusiness = indexOfLastBusiness - businessesPerPage;
  const currentBusinesses = filteredBusinesses.slice(indexOfFirstBusiness, indexOfLastBusiness);
  const totalPages = Math.ceil(filteredBusinesses.length / businessesPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="businesses-container">
      <h2>Businesses</h2>

      <input
        type="text"
        placeholder="Search Businesses"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <div className="businesses-list">
        {currentBusinesses.length > 0 ? (
          currentBusinesses.map((business) => (
            <Link to={`/business/${business.id}`} key={business.id}>
              <GenericItem
                item={{ 
                  title: business.name, 
                  description: business.description, 
                  location: business.location, 
                  images: business.images 
                }} 
                type="businesses" 
              />
            </Link>
          ))
        ) : (
          <div>No businesses available.</div>
        )}
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

export default Businesses;