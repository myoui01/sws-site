import React from 'react';
import Header from './components/Header';
import Slider from './components/Slider';
import Services from './components/Services';
import Features from './components/Features';
import About from './components/About';
import About2 from './components/About2';
import Footer from './components/Footer';
import SearchPopup from './components/SearchPopup';
import ScrollTopButton from './components/ScrollTopButton';

const App: React.FC = () => {
  return (
    <div className="wrapper">
      <Header />
      <Slider />
      <Services />
      <Features />
      <About2 />
      <About />
      <Footer />
      <SearchPopup />
      <ScrollTopButton />
    </div>
  );
};

export default App;