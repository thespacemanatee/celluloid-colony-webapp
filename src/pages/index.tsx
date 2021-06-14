import React from 'react';

import DashboardMap from '../layouts/common/DashboardMap';
import borders from '../data/indonesia-en.json';

const IndexPage = () => {
  if (!borders) {
    return <div>Welcome to Celluloid Colony!</div>;
  }
  return <DashboardMap borders={borders} />;
};

export default IndexPage;
