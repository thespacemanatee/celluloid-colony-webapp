import { Link } from 'gatsby';
import React from 'react';

interface DropdownProps {
  isOpen: boolean;
}

const Dropdown = ({ isOpen }: DropdownProps) => {
  console.log(isOpen);
  return (
    <div
      className={
        isOpen
          ? 'grid grid-rows-3 text-center items-center bg-yellow-500'
          : 'hidden'
      }
    >
      <Link className="p-4" to="/">
        Home
      </Link>
      <Link className="p-4" to="/about">
        About
      </Link>
      <Link className="p-4" to="/contact">
        Contact
      </Link>
    </div>
  );
};

export default Dropdown;
