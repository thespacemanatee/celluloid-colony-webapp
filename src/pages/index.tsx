import React from 'react';
import mapboxgl from 'mapbox-gl';

import Hero from '../components/Hero';
import Content from '../components/Content';
import Container from '../layouts/common/Container';
import Dropdown from '../components/Dropdown';

// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass =
  require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

const IndexPage = () => {
  return (
    <Container>
      <Hero />
      <Content />
    </Container>
  );
};

export default IndexPage;
