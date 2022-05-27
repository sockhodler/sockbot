import React from 'react';

import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Story from './components/story/Story';
import Faq from './components/faq/Faq';
import './styles/base/_base.scss';

function App() {
  return (

    <main>
      <title>Home Page</title>
      <Header />
      <Hero />
      <About />
      <Story />
      <Faq />
    </main>

  );
}

export default App;
