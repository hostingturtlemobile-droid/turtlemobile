import React from 'react';
import Hero from '../sections/Hero';
import About from '../sections/About';
import WhyChus from '../sections/WhyChus';
import Services from '../sections/Services';
import Safety from '../sections/Safety';
import Drivers from '../sections/Drivers';
import Impact from '../sections/Impact';
import Technology from '../sections/Technology';
import Comparison from '../sections/Comparison';
import GetApp from '../sections/GetApp';
import Careers from '../sections/Careers';
import Contact from '../sections/Contact';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <WhyChus />
      <Services />
      <Safety />
      <Drivers />
      <Impact />
      <Technology />
      <Comparison />
      <GetApp />
      <Careers />
      <Contact />
    </>
  );
};

export default Home;
