import React from 'react';

import Container from '../layouts/common/Container';

const AboutPage = () => {
  return (
    <Container>
      <div className="h-screen flex justify-center items-center text-center bg-yellow-300">
        <h1 className="text-5xl md:text-7xl lg:text-9xl uppercase font-black text-center">
          About Page
        </h1>
      </div>
    </Container>
  );
};

export default AboutPage;
