
import React from 'react';

const Dashboard: React.FC = () => {

  const logout = () => {
    localStorage.removeItem('token')
  }
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Left Sidebar */}
      <div className="bg-blue-500 text-white w-64 flex flex-col justify-between">
        <div className="p-4">
          <h1 className="text-2xl font-semibold">Dashboard</h1>
        </div>
        <nav className="flex-1">
          <ul className="space-y-2">
            <li className="p-4 hover:bg-blue-600 transition duration-300">
              <a href="#" className="block">Home</a>
            </li>
            <li className="p-4 hover:bg-blue-600 transition duration-300">
              <a href="#" className="block">Profile</a>
            </li>
            <li className="p-4 hover:bg-blue-600 transition duration-300">
              <a href="#" className="block">Settings</a>
            </li>
            <li className="p-4 hover:bg-blue-600 transition duration-300">
              <span onClick={logout}><a href="#" className="block">Logout</a></span>
              
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <h2 className="text-2xl font-semibold">Welcome to Dashboard</h2>
        <p className="mt-4 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet efficitur quam.</p>
      </div>
    </div>
  );
};

export default Dashboard;
