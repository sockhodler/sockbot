import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Helmet } from 'react-helmet';

import {
  Header,
  Hero,
  About,
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
      <Faq />
      <TheBrand />
      <Footer />
    </main>

  );
}

export default App;
