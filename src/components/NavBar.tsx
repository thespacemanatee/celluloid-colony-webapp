import React from 'react';
import { Link } from 'gatsby';

import NavBarMenu from './NavBarMenu';

const NavBar = () => (
  <nav
    className="flex justify-between items-center h-16 bg-white text-black relative shadow-md font-body"
    role="navigation"
  >
    <Link to="/" className="pl-8 font-semibold">
      Celluloid Colony
    </Link>
    <NavBarMenu />
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
);

export default NavBar;
