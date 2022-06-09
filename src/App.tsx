import React from 'react';
import { Helmet } from 'react-helmet';
import { Header } from './components/header/Header';
import { Hero } from './components/hero/Hero';
import { About } from './components/about/About';
import { Story } from './components/story/Story';
import { Faq } from './components/faq/Faq';
import { TheBrand } from './components/thebrand/TheBrand';
import { Footer } from './components/footer/Footer';
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
