import React from 'react';
import HeroButton from './HeroButton';

const Hero = () => {
  return (
    <div className="bg-white h-screen flex flex-col justify-center items-center">
      <h1 className="lg:text-9xl md:text-7xl text-5xl -3xl font-black mb-14 text-center">
        Celluloid Colony
      </h1>
      <HeroButton />
    </div>
  );
};

export default Hero;
