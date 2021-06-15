import React from 'react';

import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';

interface ContainerProps {}

const Container: React.FC<ContainerProps> = ({ children }) => (
  <>
    <NavBar />
    {children}
    <Footer />
  </>
);

export default Container;
