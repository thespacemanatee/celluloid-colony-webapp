import React from 'react';

import borders from '../data/indonesia-en.json';
import DashboardMap from '../layouts/common/DashboardMap';

const Content = () => {
  return (
    <main id="main-map" className="relative h-screen">
      <DashboardMap borders={borders} />
    </main>
  );
};

export default Content;
