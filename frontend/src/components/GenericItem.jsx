import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css'; // Ensure the path to your CSS file is correct

const GenericItem = ({ item, type }) => {
  return (
    <div className="generic-item">
      <Link to={`/${type}/${item.id}`} className="item-link">

        {/* Render image only for businesses and events */}
        {(type === 'businesses' || type === 'events') && item.images && item.images.length > 0 && (
          <img 
            src={`data:image/png;base64,${item.images[0].image}`} 
            alt={item.title} 
            className="item-image" 
          />
        )}

        <div className="item-details">
          <h3 className="item-title">{item.title || "Untitled"}</h3> {/* Default title if none */}
          <p className="item-description">{item.description || "No description available."}</p> {/* Default description if none */}
          
          {/* Render date below the description */}
          {type === 'events' && item.date && (
            <div className="item-date">Event Date: {new Date(item.date).toLocaleDateString()}</div>
          )}
          {type === 'news' && item.date && (
            <div className="item-date">Published on: {new Date(item.date).toLocaleDateString()}</div>
          )}
          {type === 'contents' && item.fileType && (
            <p className="item-file-type">File Type: {item.fileType.type}</p>
          )}
          {type === 'competition' && (
            <>
              <div className="item-submission-dates">
                Submission Period: {new Date(item.submissionStartDate).toLocaleDateString()} - {new Date(item.submissionEndDate).toLocaleDateString()}
              </div>
            </>
          )}
        </div>
      </Link>
    </div>
  );
};

export default GenericItem;