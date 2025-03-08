import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {

    return (
        <div className="sidebar">
            <div className="logo">
            <img src="./images/logo.jpeg" alt="Logo" />
            </div>
            <nav className="nav-links">
               <div className='indivisual'><Link to="/home">Dashboard</Link></div>
                <div className='indivisual'><Link to="/calendar">Calendar</Link></div>
                <div className='indivisual'><Link to="/report">Report</Link></div>
            </nav>
            </div>
    );
};

export default Navbar;
