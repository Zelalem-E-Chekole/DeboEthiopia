// BusinessDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../index.css'; // Ensure your CSS path is correct

const BusinessDetails = () => {
  const { id } = useParams(); // Get the business ID from the URL
  const [business, setBusiness] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Error state for handling fetch errors

  useEffect(() => {
    const fetchBusinessDetails = async () => {
      setLoading(true); // Set loading to true before fetch
      try {
        const response = await fetch(`http://localhost:8080/api/businesses/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch business details'); // Throw error for any non-200 response
        }
        const data = await response.json();
        setBusiness(data); // Set business state with fetched data
      } catch (error) {
        console.error('Error fetching business details:', error);
        setError(error.message); // Capture error message
      } finally {
        setLoading(false); // Set loading to false after fetch completes
      }
    };

    fetchBusinessDetails();
  }, [id]); // Re-fetch if the id changes

  if (loading) {
    return <p>Loading...</p>; // Display loading state
  }

  if (error) {
    return <p>Error: {error}</p>; // Display error message if fetching fails
  }

  if (!business) {
    return <p>No business found.</p>; // Handle case where no business data is returned
  }

  return (
    <div className="business-details">
      {business.images && business.images.length > 0 && (
        <img 
          src={`data:image/png;base64,${business.images[0].image}`} 
          alt={business.title} 
          className="business-image" 
        />
      )}
      <h2 className="business-title">{business.name}</h2> {/* Updated to use business.name */}
      <p className="business-description">{business.description}</p>
      {business.location && <p className="business-location">Location: {business.location}</p>}
      {business.contact && <p className="business-contact">Contact: {business.contact}</p>}
    </div>
  );
};

export default BusinessDetails;