import React, { useState } from 'react';
import axios from 'axios';

const CreateNews = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [media, setMedia] = useState([]); // Store an array of text and images

  const handleAddText = () => {
    setMedia([...media, { type: 'text', content }]);
    setContent('');
  };

  const handleAddImage = (imageUrl) => {
    setMedia([...media, { type: 'image', content: imageUrl }]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newsData = { title, media };
    await axios.post('/api/news', newsData);
    // Optionally, reset the fields after submission
  };

  return (
    <div>
      <h2>Create News</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="News Title" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          required 
        />
        
        <div>
          <textarea 
            placeholder="Enter Text" 
            value={content} 
            onChange={(e) => setContent(e.target.value)} 
          />
          <button type="button" onClick={handleAddText}>Add Text</button>
        </div>

        <div>
          <input 
            type="text" 
            placeholder="Image URL" 
            onBlur={(e) => handleAddImage(e.target.value)} 
          />
          <button type="button" onClick={() => handleAddImage('')}>Add Image</button>
        </div>

        <button type="submit">Submit News</button>
      </form>

      <div>
        <h4>Current Media:</h4>
        {media.map((item, index) => (
          <div key={index}>
            {item.type === 'text' ? (
              <p>{item.content}</p>
            ) : (
              <img src={item.content} alt="News Media" style={{ width: '100px' }} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreateNews;