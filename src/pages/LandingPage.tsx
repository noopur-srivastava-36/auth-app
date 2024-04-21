import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl mb-4">Welcome to My Auth App</h2>
        <p className="mb-4 text-gray-600">Please sign in or sign up to continue.</p>
        <div className="flex space-x-4">
          <Link to="/signin" className="flex-1">
            <button className="bg-blue-500 text-white p-2 rounded w-full">
              Sign In
            </button>
          </Link>
          <Link to="/signup" className="flex-1">
            <button className="bg-green-500 text-white p-2 rounded w-full">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
