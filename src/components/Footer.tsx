import { motion } from 'framer-motion';
import { Github, Linkedin, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        {/* Top Section: Social Media and Links */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex space-x-4 mb-6 md:mb-0"
          >
            {/* Social Media Links */}
            <a href="https://github.com/Dumuthu2000" target="_blank" rel="noopener noreferrer">
              <Github className="text-white hover:text-blue-500" size={24} />
            </a>
            <a href="https://www.linkedin.com/in/dumuthu-jayasinghe/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="text-white hover:text-blue-500" size={24} />
            </a>
            <a href="https://www.facebook.com/dimuthu.jayasinghe.1806" target="_blank" rel="noopener noreferrer">
              <Facebook className="text-white hover:text-blue-500" size={24} />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <Twitter className="text-white hover:text-blue-500" size={24} />
            </a>
          </motion.div>
          
          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex space-x-6 text-gray-300"
          >
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            <a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a>
          </motion.div>
        </div>

        {/* Bottom Section: Copyright and Terms */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center text-white"
          >
            <p>&copy; 2023 Dumuthu Jayasinghe. All rights reserved.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 md:mt-0 text-gray-400 text-sm"
          >
            <a href="#privacy" className="hover:text-white transition-colors mr-4">Privacy Policy</a>
            <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
