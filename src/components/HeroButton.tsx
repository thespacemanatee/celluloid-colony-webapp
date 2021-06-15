import { AnchorLink } from 'gatsby-plugin-anchor-links';
import React from 'react';

const HeroButton = () => {
  return (
    <AnchorLink
      to="/#main-map"
      className="py-3 px-5 md:py-6 md:px-10 bg-gray-500 rounded-full text-1xl md:text-2xl lg:text-3xl text-white hover:bg-gray-400 transition duration-300 ease-in-out flex items-center animate-bounce shadow-lg"
    >
      Start Now
      <svg
        className="w-6 h-6 ml-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </AnchorLink>
  );
};

export default HeroButton;
