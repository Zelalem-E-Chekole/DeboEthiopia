const API_URL = 'https://api.example.com/projects';

export const getProjects = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error('Unable to fetch projects');
  const data = await response.json();
  return data.map(project => ({ ...project, likes: 0 })); // Add initial likes
};

// Placeholder for other services