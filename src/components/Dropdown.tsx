import { Link } from 'gatsby';
import React from 'react';

interface DropdownProps {}

const Dropdown = () => {
  return (
    <div
      id="navbar-dropdown"
      className="grid grid-rows-3 text-center items-center bg-gray-500 absolute inset-x-0 left-0 px-2 py-2 transform -translate-y-full transition duration-200 ease-in-out font-body font-semibold text-white"
    >
      <Link className="p-4 hover:bg-gray-400 rounded-lg " to="/">
        Home
      </Link>
      <Link className="p-4 hover:bg-gray-400 rounded-lg " to="/about">
        About
      </Link>
      <Link className="p-4 hover:bg-gray-400 rounded-lg " to="/contact">
        Contact
      </Link>
    </div>
  );
};

export default Dropdown;
