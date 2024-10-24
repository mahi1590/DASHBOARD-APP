import React from 'react';
import Sidebar from './components/Sidebar';  // Make sure Sidebar exists
import Footer from './components/Footer';    // Make sure Footer exists
import PerformanceMetrics from './components/PerformanceMetrics';  // Ensure PerformanceMetrics exists
import './App.css';  // Assuming you have some basic styling

const App = () => {
  return (
    <div className="app">
      <Sidebar />

      <div className="main-content">
        <header>
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
          </div>
          <div className="header-icons">
            <span className="notifications-icon">🔔</span>
            <span className="profile-icon">👤</span>
          </div>
        </header>

        <div className="dashboard-content">
          <h1>Dashboard</h1>

          <div className="stats-grid">
            <div className="stat-card">
              <h3>Total Users</h3>
              <p>10,245</p>
            </div>
            <div className="stat-card">
              <h3>Revenue</h3>
              <p>$45,678</p>
            </div>
            <div className="stat-card">
              <h3>Orders</h3>
              <p>1,234</p>
            </div>
            <div className="stat-card">
              <h3>Conversion Rate</h3>
              <p>2.3%</p>
            </div>
          </div>

          <PerformanceMetrics />
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default App;
