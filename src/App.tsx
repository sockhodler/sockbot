import React, {useEffect} from 'react';
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
import ReactGA from 'react-ga';
import './styles/base/_base.scss';

const TRACKING_ID = 'UA-77305039-7';
ReactGA.initialize(TRACKING_ID);
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);


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
