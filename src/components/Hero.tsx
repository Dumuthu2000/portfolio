import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import myCv from '../assets/Dumuthu_Jayasinghe_CV(ATS).pdf'

const Hero = () => {
  return (
    <section
      id="home"
      className="relative bg-cover bg-center py-20"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1522252234503-e356532cafd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxjb2RlfGVufDB8MHx8fDE2OTQwOTg0MTZ8MA&ixlib=rb-4.0.3&q=80&w=1080')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-80 z-0"></div>

      {/* Content (text and buttons) */}
      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 3 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Hi, I am Dumuthu Jayasinghe
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 dark:text-gray-300">
            I'm a passionate developer creating amazing web experiences
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <motion.a
              href="#contact"
              className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
              <ArrowRight className="ml-2" size={20} />
            </motion.a>
            <motion.a
              href={myCv}
              download="Dumuthu_Jayasinghe_CV(ATS).pdf"
              className="inline-flex items-center px-6 py-3 rounded-full text-lg font-semibold text-white transition-colors"
              style={{
                background:
                  'linear-gradient(90deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #8b00ff)',
                backgroundSize: '400% 400%',
                animation: 'rainbow 5s ease infinite',
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download CV
              <Download className="ml-2" size={20} />
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Optional keyframe animation for the button */}
      <style>{`
        @keyframes rainbow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
