import React from 'react';
import Header from '../components/Header';
import Footer from './Footer';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';

const Layout = ({ children }) => {
    return (
        <div className = "app-container">
        <Header />
        <div className="content-area">
            <LeftSidebar />
            <main className="main-content">
                {children} {/* Render the main content passed as children */}
            </main>
            <RightSidebar />
        </div>
        <Footer/>
        </div>
    );
};

export default Layout;