import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import GenericItem from '../components/GenericItem'; // Ensure the path is correct

const News = () => {
  const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const newsPerPage = 3;

  const fetchNews = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/news');
      setNewsList(response.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false); 
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching news: {error}</p>;
  }

  // Filter news based on the search query
  const filteredNews = newsList.filter(news =>
    news.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Pagination logic
  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = filteredNews.slice(indexOfFirstNews, indexOfLastNews);
  const totalPages = Math.ceil(filteredNews.length / newsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="news-container">
      <h2>News Articles</h2>
      <input
        type="text"
        placeholder="Search News"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      
      <div className="news-list">
        {currentNews.map((news) => (
          <GenericItem
            key={news.id}
            item={{
              ...news,
              description: news.shortenedNews, // Pass shortenedNews as description
              // Adding extra property
              date: new Date(news.date).toLocaleDateString() // This won't be rendered here, but you may use it elsewhere.
            }}
            type="news"
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

export default News;