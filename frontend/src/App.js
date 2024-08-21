// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
import Events from './pages/Events'; 
import EventDetails from './pages/EventDetails'; 
import Contents from './pages/Contents';
import ContentDetails from './pages/ContentDetails';
import News from './pages/News';
import NewsDetails from './pages/NewsDetails';
import { UserProvider } from './context/UserContext'; 
import Layout from './components/Layout';
import Businesses from './pages/Businesses';
import BusinessDetails from './pages/BusinessDetails';
import Crowdfunding from './pages/Crowdfunding';
import Create from './pages/Create';
import UserProfile from './pages/UserProfile';
import Competitions from './pages/Competitions';
import Signup from './pages/Signup';
import AboutUs from './pages/AboutUs';


const App = () => {
  return (
    <UserProvider>  {/* Use UserProvider here */}
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetails />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/:id" element={<EventDetails />} />
            <Route path="/businesses" element={<Businesses />} />
            <Route path="/business/:id" element={<BusinessDetails />} />
            <Route path="/contents" element={<Contents />} />
            <Route path="/content/:id" element={<ContentDetails />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:id" element={<NewsDetails />} />
            <Route path="/crowdfunding" element={<Crowdfunding />} />
            <Route path="/create" element={<Create />} />
            <Route path="/user-profile" element={<UserProfile />} />
            <Route path="/competitions" element={<Competitions />} />
            <Route path="/login" element={<Signup />} />
            <Route path="/about" element={<AboutUs />} />
            
            
          </Routes>
        </Layout>
      </Router>
    </UserProvider> 
  );
};

export default App;