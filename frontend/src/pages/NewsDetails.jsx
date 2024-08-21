import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const NewsDetails = () => {
  const { id } = useParams(); // Get the news item ID from URL parameters
  const [newsItem, setNewsItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to fetch the details of the news item
  const fetchNewsDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/news/${id}`); // Adjust API endpoint as needed
      setNewsItem(response.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch news details when component mounts
  useEffect(() => {
    fetchNewsDetails();
  }, [id]);

  // Error or loading handling
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching news details: {error}</p>;
  }

  if (!newsItem) {
    return <p>No news item found.</p>;
  }

  return (
    <div className="news-details">
      <h1>{newsItem.title}</h1>
      <p className="news-date">{new Date(newsItem.date).toLocaleDateString()}</p>
      <p>{newsItem.shortenedNews}</p>

      {/* Render the full text content */}
      {newsItem.texts && newsItem.texts.map((text, index) => (
        <p key={index}>{text}</p>
      ))}

      {/* Render the images */}
      <div className="news-images">
  {newsItem.images && newsItem.images.map((image, index) => (
    <img
      key={image.id}
      src={`data:image/png;base64,${btoa(
        String.fromCharCode(...new Uint8Array(image.image))
      )}`} 
      alt={`News image ${index + 1}`}  // Provide meaningful alt text, using the index to differentiate
      style={{ maxWidth: '100%', height: 'auto', margin: '10px 0' }} // Ensure images are responsive
    />
  ))}
</div>

      {/* Optional link to go back to news list */}
      <div>
        <a href="/news">Back to News List</a> {/* Replace with Link component if using react-router */}
      </div>
    </div>
  );
};

export default NewsDetails;