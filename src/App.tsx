import React from 'react';
import { Helmet } from 'react-helmet';

import {
  Header,
  Hero,
  About,
  Info,
  Story,
  Faq,
  TheBrand,
  Footer,
} from './components';

import './styles/base/_base.scss';
function App() {
  return (

    <main>
      <Helmet>
        <title>SockBot - Algorand NFT Collection - Created by SockHodler</title>
        <meta name="author" content="SockHodler" />
      </Helmet>
      <Header />
      <Hero />
      <About />
      <Story />
      <Info />
      <Faq />
      <TheBrand />
      <Footer />
    </main>

  );
}

export default App;
