import React, { useEffect, useState } from 'react';
import Dropdown from '../../components/Dropdown';

import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';

interface ContainerProps {}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <>
      <NavBar />
      <Dropdown />
      {children}
      <Footer />
    </>
  );
};

export default Container;
