// function Admin() {
//   return (
//     <div className="App">
//       <h1>Hi I am the admin</h1>
//     </div>
//   );
// }

// export default Admin;

import React from 'react';
import profilePhoto from '../../assets/images/profile-photo.png';

const Navbar = () => {
  const handleLogout = () => {
    // Handle logout logic here
  };

  return (
    <nav className="flex items-center justify-between bg-blue-500 py-4 px-6">
      <div>
        <button className="text-white font-bold">Home</button>
      </div>
      <div>
        <div className="relative inline-block">
          <button className="flex items-center text-white">
            <img
              src={profilePhoto}
              alt="Profile"
              className="h-8 w-8 rounded-full mr-2"
            />
            <span>Profile</span>
          </button>
          <div className="absolute right-0 mt-2 w-40 bg-white rounded shadow-md hidden">
            <ul className="py-2">
              <li>
                <button className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left">
                  View Profile
                </button>
              </li>
              <li>
                <button
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Sidebar = () => {
  return (
    <aside className="bg-gray-200 py-4 px-6">
      <ul>
        <li>
          <button className="block px-4 py-2 text-gray-800 hover:bg-gray-300 w-full text-left">
            Overview
          </button>
        </li>
        <li>
          <button className="block px-4 py-2 text-gray-800 hover:bg-gray-300 w-full text-left">
            Approval
          </button>
        </li>
        <li>
          <button className="block px-4 py-2 text-gray-800 hover:bg-gray-300 w-full text-left">
            Create Events
          </button>
        </li>
        <li>
          <button className="block px-4 py-2 text-gray-800 hover:bg-gray-300 w-full text-left">
            Display Events
          </button>
        </li>
      </ul>
    </aside>
  );
};

const Page = () => {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar />
        {/* Add your main content here */}
      </div>
    </div>
  );
};

export default Page;
