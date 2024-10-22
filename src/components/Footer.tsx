import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p>&copy; 2023 Your Name. All rights reserved.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex space-x-4 mt-4 md:mt-0"
          >
            <a href="#" className="hover:text-blue-400 transition-colors">
              <Github size={24} />
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              <Twitter size={24} />
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;