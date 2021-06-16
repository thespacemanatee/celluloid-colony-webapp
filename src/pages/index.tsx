import React from 'react';
import { Helmet } from 'react-helmet';

import Hero from '../components/Hero';
import Content from '../components/Content';
import Container from '../layouts/common/Container';

const IndexPage = () => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <html lang="en" />
      <title>Home Page</title>
    </Helmet>
    <Container>
      <Hero />
      <Content />
    </Container>
  </>
);

export default IndexPage;
