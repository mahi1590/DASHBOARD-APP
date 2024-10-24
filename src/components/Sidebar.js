import React from 'react';
import { FaHome, FaUser, FaChartBar, FaShoppingCart, FaCog } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <ul>
        <li>
          <FaHome />
          <span>Dashboard</span>
        </li>
        <li>
          <FaUser />
          <span>Users</span>
        </li>
        <li>
          <FaChartBar />
          <span>Analytics</span>
        </li>
        <li>
          <FaShoppingCart />
          <span>Orders</span>
        </li>
        <li>
          <FaCog />
          <span>Settings</span>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
