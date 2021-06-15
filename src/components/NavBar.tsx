import React, { useEffect } from 'react';
import { Link } from 'gatsby';

const NavBar = () => {
  useEffect(() => {
    const btn = document.querySelector('#navbar-dropdown-btn');
    const dropDown = document.querySelector('#navbar-dropdown');

    btn?.addEventListener('click', () => {
      dropDown?.classList.toggle('-translate-y-full');
    });

    return () => {
      btn?.removeEventListener('click', () => {
        dropDown?.classList.toggle('-translate-y-full');
      });
    };
  });

  return (
    <>
      <nav
        className="flex justify-between items-center h-16 bg-white text-black relative shadow-md font-body z-10"
        role="navigation"
      >
        <Link to="/" className="pl-8 font-semibold">
          Celluloid Colony
        </Link>
        <button
          type="button"
          id="navbar-dropdown-btn"
          className="px-3 py-3 md:hidden"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div className="pr-8 md:block hidden">
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
      </nav>
    </>
  );
};

export default NavBar;
