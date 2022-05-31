import React from 'react';

import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Story } from './components/Story/Story';
import { Faq } from './components/Faq/Faq';
import { TheBrand } from './components/TheBrand/TheBrand';
import { Footer } from './components/Footer/Footer';
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
      <TheBrand />
      <Footer />
    </main>

  );
}

export default App;
