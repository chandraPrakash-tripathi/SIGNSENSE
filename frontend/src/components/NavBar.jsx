import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold">Logo</Link>
        <div className="flex space-x-4">
          <Link to="/Login" className="text-white text-lg hover:text-gray-400">Login</Link>
          <Link to="/SignUp" className="text-white text-lg hover:text-gray-400">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;