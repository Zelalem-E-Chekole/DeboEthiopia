import React, { useState } from 'react';

const Create = () => {
  const [entityType, setEntityType] = useState("project");
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    location: '',
    images: [],
    tasks: [],
    eventName: '',
    eventDescription: '',
    isCrowdfunded: false,
    files: [],
    fileType: '', // State to track the selected file type
    objectives: '',
    scope: '',
    timeline: '',
    status: '',
    contactInfo: '',
    competitionTitle: '', // For competition title
    competitionDescription: '', // For competition description
    submissionStartDate: '', // For competition submission start date
    submissionEndDate: '', // For competition submission end date
    creator: '' // For competition creator
  });

  const handleEntityTypeChange = (event) => {
    setEntityType(event.target.value);
    // Reset fields specific to competitions, if entityType changes
    if (event.target.value !== "competition") {
      setFormData({
        name: '',
        description: '',
        location: '',
        images: [],
        tasks: [],
        eventName: '',
        eventDescription: '',
        isCrowdfunded: false,
        files: [],
        fileType: '',
        objectives: '',
        scope: '',
        timeline: '',
        status: '',
        contactInfo: '',
        competitionTitle: '',
        competitionDescription: '',
        submissionStartDate: '',
        submissionEndDate: '',
        creator: ''
      });
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (event) => {
    const images = Array.from(event.target.files).map(file => ({
      name: file.name,
      type: file.type,
      url: URL.createObjectURL(file),
    }));
    setFormData({ ...formData, images });
  };

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files).map(file => ({
      name: file.name,
      type: file.type,
      url: URL.createObjectURL(file),
    }));
    setFormData({ ...formData, files });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Creating new", entityType, "with data:", formData);
    // Add your API submission logic here
  };

  const handleAddTask = () => {
    const taskName = prompt("Enter task name:");
    const optimistic = parseFloat(prompt("Enter optimistic duration:"));
    const mostLikely = parseFloat(prompt("Enter most likely duration:"));
    const pessimistic = parseFloat(prompt("Enter pessimistic duration:"));
    if (taskName && !isNaN(optimistic) && !isNaN(mostLikely) && !isNaN(pessimistic)) {
      setFormData(prevData => ({
        ...prevData,
        tasks: [...prevData.tasks, { name: taskName, optimistic, mostLikely, pessimistic }]
      }));
    }
  };

  const handleAddEvent = () => {
    const { eventName, eventDescription } = formData;
    if (eventName && eventDescription) {
      alert(`Event Added!\nName: ${eventName}\nDescription: ${eventDescription}`);
      setFormData(prevData => ({ ...prevData, eventName: '', eventDescription: '' }));
    } else {
      alert("Please provide both event name and description.");
    }
  };

  const handleCrowdfundedChange = (event) => {
    setFormData({ ...formData, isCrowdfunded: event.target.checked });
  };

  return (
    <div className="create-container">
      <h2>Create a New {entityType.charAt(0).toUpperCase() + entityType.slice(1)}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Select entity type:</label>
          <select value={entityType} onChange={handleEntityTypeChange}>
            <option value="project">Project</option>
            <option value="event">Event</option>
            <option value="news">News</option>
            <option value="business">Business</option>
            <option value="competition">Competition</option>
            <option value="content">Content</option>
          </select>
        </div>

        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
        </div>

        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
        </div>

        {entityType === "competition" && ( // Competition Fields
          <>
            <div>
              <label>Competition Title:</label>
              <input
                type="text"
                name="competitionTitle"
                value={formData.competitionTitle}
                onChange={handleInputChange}
                required
                style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
              />
            </div>
            <div>
              <label>Competition Description:</label>
              <textarea
                name="competitionDescription"
                value={formData.competitionDescription}
                onChange={handleInputChange}
                required
                style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
              />
            </div>
            <div>
              <label>Submission Start Date:</label>
              <input
                type="date"
                name="submissionStartDate"
                value={formData.submissionStartDate}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label>Submission End Date:</label>
              <input
                type="date"
                name="submissionEndDate"
                value={formData.submissionEndDate}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label>Creator:</label>
              <input
                type="text"
                name="creator"
                value={formData.creator}
                onChange={handleInputChange}
                required
                style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
              />
            </div>
          </>
        )}

        {entityType === "business" && (
          <div>
            <label>Location:</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              required
              style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
            />
          </div>
        )}

        {entityType === "project" && (
          <>
            <div>
              <label>Objectives:</label>
              <textarea
                name="objectives"
                value={formData.objectives}
                onChange={handleInputChange}
                required
                style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
              />
            </div>

            <div>
              <label>Scope:</label>
              <textarea
                name="scope"
                value={formData.scope}
                onChange={handleInputChange}
                required
                style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
              />
            </div>

            <div>
              <label>Timeline:</label>
              <input
                type="text"
                name="timeline"
                value={formData.timeline}
                onChange={handleInputChange}
                required
                style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
              />
            </div>

            <div>
              <label>Status:</label>
              <input
                type="text"
                name="status"
                value={formData.status}
                onChange={handleInputChange}
                required
                style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
              />
            </div>

            <div>
              <label>Contact Info:</label>
              <input
                type="text"
                name="contactInfo"
                value={formData.contactInfo}
                onChange={handleInputChange}
                required
                style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
              />
            </div>
          </>
        )}

        <div>
          {entityType === "content" || entityType === "project" ? (
            <>
              <label>File Type:</label>
              <select
                value={formData.fileType}
                onChange={(e) => setFormData({ ...formData, fileType: e.target.value })}
                required
              >
                <option value="">Select file type</option>
                <option value="pdf">PDF</option>
                <option value="audio">Audio</option>
                <option value="video">Video</option>
                <option value="word">Word</option>
                <option value="excel">Excel</option>
                <option value="software">Software</option>
                <option value="image">Image</option>
                <option value="other">Other</option>
              </select>

              <label>Upload Files:</label>
              <input
                type="file"
                multiple
                onChange={handleFileChange}
                accept="image/*, application/pdf, audio/*, video/*, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/octet-stream"
              />
            </>
          ) : (
            <>
              <label>Upload Images:</label>
              <input
                type="file"
                multiple
                onChange={handleImageChange}
                accept="image/*"
              />
            </>
          )}
        </div>

        <div>
          <h3>{entityType === "content" || entityType === "project" ? "Uploaded Files" : "Uploaded Images"}</h3>
          {(entityType === "content" || entityType === "project" ? formData.files : formData.images).length > 0 ? (
            (entityType === "content" || entityType === "project" ? formData.files : formData.images).map((file, index) => (
              <div key={index}>
                <p>{file.name} (Type: {file.type})</p>
                <a href={file.url} target="_blank" rel="noopener noreferrer">View</a>
              </div>
            ))
          ) : (
            <p>No files uploaded.</p>
          )}
        </div>

        {entityType === "project" && (
          <>
            <div>
              <label>
                <input
                  type="checkbox"
                  checked={formData.isCrowdfunded}
                  onChange={handleCrowdfundedChange}
                />
                Is this project crowdfunded?
              </label>
            </div>

            <button type="button" onClick={handleAddTask}>Add Task</button>
            <div>
              <h2>Tasks</h2>
              <ul>
                {formData.tasks.map((task, index) => (
                  <li key={index}>{task.name}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2>Add Event</h2>
              <input
                type="text"
                placeholder="Event Name"
                value={formData.eventName}
                onChange={(e) => setFormData({ ...formData, eventName: e.target.value })}
                style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
              />
              <textarea
                placeholder="Event Description"
                value={formData.eventDescription}
                onChange={(e) => setFormData({ ...formData, eventDescription: e.target.value })}
                style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
              />
              <button type="button" onClick={handleAddEvent}>Add Event</button>
            </div>
          </>
        )}

        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default Create;