import React from 'react';
import HeroButton from './HeroButton';

const Hero = () => {
  return (
    <div className="bg-white h-screen flex flex-col justify-center items-center">
      <h1 className="text-5xl md:text-7xl lg:text-9xl font-body font-black mb-14 text-center">
        Celluloid Colony
      </h1>
      <HeroButton />
    </div>
  );
};

export default Hero;
