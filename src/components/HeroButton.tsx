import { ChevronDownIcon } from '@heroicons/react/outline';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import React from 'react';

const HeroButton = () => (
  <AnchorLink
    to="/#main-map"
    className="py-3 px-5 md:py-6 md:px-10 bg-gray-500 rounded-full text-1xl md:text-2xl lg:text-3xl font-body text-white hover:bg-gray-400 transition duration-300 ease-in-out flex items-center animate-bounce shadow-lg"
  >
    Start Now
    <ChevronDownIcon className="w-5 h-5 md:w-8 md:h-8 ml-2 md:ml-3" />
  </AnchorLink>
);

export default HeroButton;
