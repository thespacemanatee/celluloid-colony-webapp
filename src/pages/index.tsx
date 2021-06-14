import React from 'react';

import DashboardMap from '../layouts/common/DashboardMap';
import borders from '../data/indonesia-en.json';
import mapboxgl from 'mapbox-gl';
// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass =
  require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

const IndexPage = () => {
  if (!borders) {
    return <div>Welcome to Celluloid Colony!</div>;
  }
  return <DashboardMap borders={borders} />;
};

export default IndexPage;
