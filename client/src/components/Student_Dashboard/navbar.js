import React from 'react';

const Navbar = ({ onSearch }) => {
    return (
        <nav>
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search events..."
                    onChange={onSearch}
                />
            </div>
        </nav>
    );
};

export default Navbar;
