import React from 'react';

import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import './styles/base/_base.scss';

function App() {
  return (

    <main>
      <title>Home Page</title>
      <Header />
      <Hero />
      <About />
    </main>

  );
}

export default App;
