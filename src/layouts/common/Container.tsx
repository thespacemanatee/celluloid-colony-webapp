import React, { useEffect, useState } from 'react';
import Dropdown from '../../components/Dropdown';

import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';

interface ContainerProps {}

const Container: React.FC<ContainerProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideDropdown = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', hideDropdown);

    return () => {
      window.removeEventListener('resize', hideDropdown);
    };
  });

  return (
    <>
      <NavBar toggle={handleOpenToggle} />
      <Dropdown isOpen={isOpen} />
      {children}
      <Footer />
    </>
  );
};

export default Container;
