import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import TechStacks from './components/TechStacks';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100"
      >
        <Header />
        <Hero />
        <About />
        <Services />
        <TechStacks />
        <Portfolio />
        <Contact />
        <Footer />
      </motion.div>
    </ThemeProvider>
  );
}

export default App;