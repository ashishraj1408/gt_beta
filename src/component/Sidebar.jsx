import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">GREEN TIGER</div>
      <nav>
        <ul>
          <li>Dashboard</li>
          <li>Live Location</li>
          <li>Remote Lock</li>
          <li>Trips</li>
        </ul>
      </nav>
      <div className="user-info">
        <p>Okaya</p>
        <button>Logout</button>
      </div>
    </div>
  );
}

export default Sidebar;
