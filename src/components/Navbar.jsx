import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-lg">My Portfolio</h1>
        <div>
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? "text-yellow-500 mx-2" : "text-white mx-2"}
          >
            Home
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => isActive ? "text-yellow-500 mx-2" : "text-white mx-2"}
          >
            About
          </NavLink>
          <NavLink 
            to="/projects" 
            className={({ isActive }) => isActive ? "text-yellow-500 mx-2" : "text-white mx-2"}
          >
            Projects
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => isActive ? "text-yellow-500 mx-2" : "text-white mx-2"}
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
