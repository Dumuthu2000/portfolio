import { motion } from 'framer-motion';
import { Code, Palette, Smartphone } from 'lucide-react';

const services = [
  {
    icon: <Code size={40} />,
    title: 'Web Development',
    description: 'Creating responsive and dynamic websites using modern technologies.',
  },
  {
    icon: <Palette size={40} />,
    title: 'UI/UX Design',
    description: 'Designing intuitive and visually appealing user interfaces.',
  },
  {
    icon: <Smartphone size={40} />,
    title: 'Mobile App Development',
    description: 'Building cross-platform mobile applications for iOS and Android.',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-r from-gray-400 to-blue-3000 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 3 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">My Services</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gradient-to-r from-white to-blue-200 dark:bg-gray-700 p-8 rounded-lg shadow-md text-center"
            >
              <div className="text-blue-600 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-black">{service.title}</h3>
              <p className="text-gray-600 dark:text-blue-800">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;