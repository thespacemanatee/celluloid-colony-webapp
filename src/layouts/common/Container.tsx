import React from 'react';

import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';

interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => (
  <>
    <header className="sticky top-0 z-50">
      <NavBar />
    </header>
    <main className="relative">{children}</main>
    <footer>
      <Footer />
    </footer>
  </>
);

export default Container;
