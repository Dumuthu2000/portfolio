import { motion } from 'framer-motion';
import { Link, NavLink } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Github, Linkedin, Facebook } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">Get in Touch</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>
        <div className="flex flex-col md:flex-row">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 mb-8 md:mb-0"
          >
            <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Contact Information</h3>
            <div className="flex items-center mb-4">
              <Mail className="text-blue-600 mr-4" size={24} />
              <p className="text-gray-600 dark:text-gray-300">dumuthujayasinghe@example.com</p>
            </div>
            <div className="flex items-center mb-4">
              <Phone className="text-blue-600 mr-4" size={24} />
              <p className="text-gray-600 dark:text-gray-300">+94 76 662 08 00</p>
            </div>
            <div className="flex items-center">
              <MapPin className="text-blue-600 mr-4" size={24} />
              <p className="text-gray-600 dark:text-gray-300">Minuwangoda, Sri Lanka</p>
            </div>
            <div className="flex items-center justify-center mt-5 bg-slate-700 w-[10rem] rounded-md p-2 dark:bg-white">
            <a href="https://github.com/Dumuthu2000" target="_blank" rel="noopener noreferrer">
              <Github className="text-white mr-4 dark:text-black" size={24} />
            </a>
            <a href="https://www.linkedin.com/in/dumuthu-jayasinghe/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="text-white mr-4 dark:text-black" size={24} />
            </a>
            <a href="https://www.facebook.com/dimuthu.jayasinghe.1806" target="_blank" rel="noopener noreferrer">
              <Facebook className="text-white mr-4 dark:text-black" size={24} />
            </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2"
          >
            <form>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                />
              </div>
              <div className="mb-4">
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;