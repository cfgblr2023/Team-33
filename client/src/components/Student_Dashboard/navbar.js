import React, { useState } from 'react';
import profileIcon from '../../assets/images/profile-photo.png';
import './Navbar.css'

const Navbar = () => {
    const [showOptions, setShowOptions] = useState(false);

    const handleProfileClick = () => {
        setShowOptions(!showOptions);
    };

    const handleLogout = () => {
        // Add your logout logic here
    };

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <div className="logo">LAMP</div>
            </div>

            <div className="navbar-right">
                <button className="navbar-button">Home</button>
                <button className="navbar-profile-button" onClick={handleProfileClick}>
                    <img src={profileIcon} alt="Profile" className="navbar-profile-icon" />
                </button>
                {showOptions && (
                    <div className="navbar-options">
                        <button className="navbar-option" onClick={handleProfileClick}>
                            Profile
                        </button>
                        <button className="navbar-option" onClick={handleLogout}>
                            Logout
                        </button>
                    </div>
                )}

            </div>
        </nav>
    );
};

export default Navbar;
