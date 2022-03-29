import React from 'react';
import Hero from '../components/Hero/Hero';
import Info from '../components/Info/Info';
import { sliderData } from '../assets';
import About from '../components/About/About';
import Features from '../components/Features/Features';
import Footer from '../components/Footer/Footer';

const Index = () => {
  return (
    <>
      <Hero slides={sliderData} />
      <Info />
      <About />
      <Features />
      <Footer/>
    </>
  );
};

export default Index;