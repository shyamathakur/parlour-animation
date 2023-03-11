import Blog from './Component/Blog';
import Contact from './Component/Contact';
import Footer from './Component/Footer';
import Home from './Component/Home';
import Milestones from './Component/Milestones';
import Portfolio from './Component/Portfolio';
import Pricing from './Component/Pricing';
import ScrollToTop from './Component/ScrollToTop';
import Services from './Component/Services';
import Skills from './Component/Skills';
import Testimonials from './Component/Testimonials';
import Video from './Component/Video';
import { motion } from 'framer-motion';
import React from 'react';

function App() {
  return (
    <motion.div initial="hidden" animate="show">
      <Home />
      <Services />
      <Portfolio />
      <Milestones />
      <Blog />
      <Video />
      <Pricing />
      <Testimonials />
      <Skills />
      <Contact />
      <Footer />
      <ScrollToTop />
    </motion.div>
  )
}

export default App