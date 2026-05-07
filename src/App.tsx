import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Challenge from './pages/Challenge';
import Solution from './pages/Solution';
import Contact from './pages/Contact';
import About from './pages/About';
import Technology from './pages/Technology';
import Career from './pages/Career';
import Investor from './pages/Investor';
import ChusMobility from './pages/ChusMobility';
import TurtleKiss from './pages/TurtleKiss';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/challenge" element={<Challenge />} />
          <Route path="/solution" element={<Solution />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/tech" element={<Technology />} />
          <Route path="/career" element={<Career />} />
          <Route path="/investor" element={<Investor />} />
          <Route path="/chus" element={<ChusMobility />} />
          <Route path="/kiss" element={<TurtleKiss />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
