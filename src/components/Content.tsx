import React from 'react';
import { ArrowUpIcon } from '@heroicons/react/solid';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

import borders from '../data/indonesia-en.json';
import DashboardMap from '../layouts/common/DashboardMap';

const Content = () => (
  <div id="main-map" className="relative h-screen">
    <DashboardMap borders={borders} />
    <div className="flex absolute bottom-5 justify-center inset-x-0 z-10">
      <AnchorLink
        to="/#main-hero"
        title="move-up"
        className="rounded-full h-8 w-8 flex items-center justify-center bg-white shadow-lg animate-bounce"
      >
        <ArrowUpIcon className="h-6 w-6" aria-hidden="true" fill="gray" />
      </AnchorLink>
    </div>
  </div>
);

export default Content;
