import React from 'react';
import Card from './Card';
import Sidebar from './Sidebar';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <Sidebar />
      
      <div className="dashboard-content">
        <div className="search-section">
          <input type="text" placeholder="Search Devices" value="KA22GY1308" className="search-input" />
          <input type="checkbox" className="search-checkbox" />
        </div>
        
        <div className="date-picker-section">
          <label>Date</label>
          <input type="date" className="date-picker" />
          <input type="date" className="date-picker" />
        </div>
        
        <div className="stats-section">
          <Card title="Total Distance (Km)" value="1058.3" />
          <Card title="Carbon Saving (Kg)" value="2185.3" />
          <Card title="Cost Saving(₹)" value="3799.1" />
          <Card title="Rider Score" value="7.8" />
          <Card title="Inactive Devices" value="0" />
          <Card title="TBC" value="NA" />
        </div>
        
        <div className="button-section">
          <button>Vehicle Details</button>
          <button className='button-middle'>BMS Details</button>
          <button>VCU Details</button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
