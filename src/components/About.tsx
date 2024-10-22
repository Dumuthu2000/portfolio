import { motion } from 'framer-motion';
import profileImage from '../assets/profileImage1.jpg';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">About Me</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 3 }}
            className="md:w-1/2 mb-8 md:mb-0"
          >
            {/* Wrapper for the image and black overlay */}
            <div className="relative">
              <img
                src={profileImage}
                alt="Profile"
                className="rounded-lg shadow-lg max-w-full h-[45rem] object-cover border-black-800 border-[10px]"
              />
              {/* Black overlay */}
              <div className="absolute inset-0 bg-black opacity-30 max-w-[36.2rem] rounded-lg"></div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 3 }}
            className="md:w-1/2 md:pl-12"
          >
            <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Who am I?</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I'm a passionate web developer with a keen eye for design and a love for creating
              seamless user experiences. With expertise in modern web technologies, I bring ideas
              to life through clean, efficient code and intuitive interfaces.
            </p>
            <ul className="text-gray-600 dark:text-gray-300 mb-6">
              <li className="mb-2">✓ 3+ years of experience in web development</li>
              <li className="mb-2">✓ Proficient in React, JavaScript, and modern CSS</li>
              <li className="mb-2">✓ Strong problem-solving and analytical skills</li>
              <li>✓ Committed to delivering high-quality, scalable solutions</li>
            </ul>
            <motion.a
              href="#contact"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Connect
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;