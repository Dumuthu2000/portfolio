import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import paintCorner1 from '../assets/paintCorner1.png';
import paintCorner2 from '../assets/paintCorner2.png';
import paintCorner3 from '../assets/paintCorner3.png';
import paintCorner5 from '../assets/paintCorner5.png';
import paintCorner6 from '../assets/paintCorner6.png';
import paintCorner7 from '../assets/paintCorner7.png';

const projects = [
  {
    title: 'Vehicle Repair Management System',
    category: 'Web Development',
    image: 'https://scontent.fcmb2-2.fna.fbcdn.net/v/t39.30808-6/384497735_171232409362764_4309217187760119073_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEU4brmspcnVUnZOd1SrYGBIneaanO2Yboid5pqc7ZhuszXYRvyMOGiW-Nn1AXqzlbaEIw3orMwgl9KNWfAG_jN&_nc_ohc=wj7ovCPa_ZwQ7kNvgECyzNd&_nc_zt=23&_nc_ht=scontent.fcmb2-2.fna&_nc_gid=A1PYugv0Xx8F4ctMpKjlbdS&oh=00_AYBt_9IuD5Nk7fhKJTeb_r7acTTivtLwbrAXcVDqaKOkfg&oe=671D392F',
    images: [paintCorner1, paintCorner2, paintCorner2, paintCorner3, paintCorner5,  paintCorner6, paintCorner7],
    description: 'A vehicle repair management system that handles estimates, quotes, purchase orders, invoices, and reports with robust user authentication for Paint Corner Vehicle Accident Repair Center',
    technologies: ['React.js', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Docker'],
    functionality: [
      'User authentication and authorization',
      'Create estimates, supplementary estimates, and quotations',
      'Manage purchase orders and invoices',
      'Generate detailed reports',
    ],
    githubLink1: 'https://github.com/frontend-repo',
    githubLink2: 'https://github.com/backend-repo'
  },
  {
    title: 'Real Estate Web Application',
    category: 'Web Development',
    image: 'https://img.freepik.com/premium-vector/logo-real-estate-with-house-house-middle_885060-39.jpg',
    images: [
      'https://img.freepik.com/premium-vector/logo-real-estate-with-house-house-middle_885060-39.jpg',
      'https://img.freepik.com/premium-vector/logo-real-estate-with-house-house-middle_885060-39.jpg',
      'https://img.freepik.com/premium-vector/logo-real-estate-with-house-house-middle_885060-39.jpg'
    ],
    description: 'A comprehensive MERN stack-based real estate platform enabling property listings, advanced search functionality, image management, email communications, and role-based authentication. Features include virtual tours, mortgage calculators, and neighborhood analytics.',
    technologies: ['React.js', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Redux Toolkit', 'Firebase'],
    functionality: [
      'User authentication and authorization',
      'Create and search property listings',
      'Upload and manage property images',
      'Fund transfers and bill payments',
      'Role-based user authentication',
      'Email notifications',
      'Virtual property tours',
      'Mortgage calculator',
      'Neighborhood analytics',
      'Property comparison tool'
    ],
    githubLink1: 'https://github.com/frontend-repo',
    githubLink2: 'https://github.com/backend-repo'
  },
  {
    title: 'Job Finder Web Application',
    category: 'Web Design',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtfJXzDVJc9EbItaYAGR2tq5_nEySalSprTg&s',
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtfJXzDVJc9EbItaYAGR2tq5_nEySalSprTg&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtfJXzDVJc9EbItaYAGR2tq5_nEySalSprTg&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtfJXzDVJc9EbItaYAGR2tq5_nEySalSprTg&s'
    ],
    description: 'A sophisticated job portal built with Spring Boot microservices architecture, allowing users to search and apply for jobs while providing administrators with powerful vacancy management tools. Features include resume parsing, skill matching, and automated application tracking.',
    technologies: ['React.js', 'Spring Boot', 'MySQL', 'Eureka Server', 'Microservices', 'Docker', 'Kubernetes'],
    functionality: [
      'User authentication and authorization',
      'Advanced job search and filtering',
      'Resume upload and parsing',
      'Automated skill matching',
      'Application tracking system',
      'Email notifications',
      'Admin dashboard for vacancy management',
      'Analytics and reporting',
      'Interview scheduling',
      'Integration with external job boards'
    ],
    githubLink1: 'https://github.com/frontend-repo',
    githubLink2: 'https://github.com/backend-repo'
  },
  {
    title: 'Food Delivery Mobile Application',
    category: 'Mobile Development',
    image: 'https://static.vecteezy.com/system/resources/previews/013/529/077/non_2x/delivery-food-boy-handing-package-food-with-seeing-customer-location-map-on-mobile-phone-food-ordering-and-delivery-concept-with-yellow-scooter-vector.jpg',
    images: [
      'https://static.vecteezy.com/system/resources/previews/013/529/077/non_2x/delivery-food-boy-handing-package-food-with-seeing-customer-location-map-on-mobile-phone-food-ordering-and-delivery-concept-with-yellow-scooter-vector.jpg',
      'https://static.vecteezy.com/system/resources/previews/013/529/077/non_2x/delivery-food-boy-handing-package-food-with-seeing-customer-location-map-on-mobile-phone-food-ordering-and-delivery-concept-with-yellow-scooter-vector.jpg',
      'https://static.vecteezy.com/system/resources/previews/013/529/077/non_2x/delivery-food-boy-handing-package-food-with-seeing-customer-location-map-on-mobile-phone-food-ordering-and-delivery-concept-with-yellow-scooter-vector.jpg'
    ],
    description: 'An Android app for food delivery with separate admin and customer portals, supporting cart management, orders, SMS notifications, and Google Maps integration.',
    technologies: ['Java', 'Android Studio', 'SQLite'],
    functionality: [
      'User authentication and authorization',
      'Manage food items (admin portal)',
      'Add to cart and checkout orders',
      'SMS notifications via SMS gateway',
      'Display delivery locations using Google Maps',
    ],
    githubLink1: 'https://github.com/Dumuthu2000/Food_Ordering_Mobile_app.git',
  },
  {
    title: 'Point of Sales Management System',
    category: 'Desktop Development',
    image: 'https://restaurantify.com/wp-content/uploads/2023/08/Main-Banner-Is-it-necessary-for-restaurant-to-have-a-POS-system.png',
    images: [
      'https://evolve-sl.com/assets/images/RetailPOSBanner.jpg',
      'https://restaurantify.com/wp-content/uploads/2023/08/Main-Banner-Is-it-necessary-for-restaurant-to-have-a-POS-system.png',
      'https://evolve-sl.com/assets/images/RetailPOSBanner.jpg'
    ],
    description: 'A point of sales system for managing products, generating invoices, and tracking daily and monthly income with secure user authentication.',
    technologies: ['Java', 'Java Swing', 'MySQL'],
    functionality: [
      'User authentication and authorization',
      'Manage product inventory',
      'Generate invoices for sales',
      'View daily and monthly income reports',
    ],
    githubLink1: 'https://github.com/Dumuthu2000/Point_OF_Sales_System.git',
  },
  {
    title: 'Employee Management System',
    category: 'Desktop Development',
    image: 'https://cse.final-year-projects.in/wp-content/uploads/2015/08/pg-00634-employee-managemen.jpg',
    images: [
      'https://cse.final-year-projects.in/wp-content/uploads/2015/08/pg-00634-employee-managemen.jpg',
      'https://cse.final-year-projects.in/wp-content/uploads/2015/08/pg-00634-employee-managemen.jpg',
      'https://cse.final-year-projects.in/wp-content/uploads/2015/08/pg-00634-employee-managemen.jpg'
    ],
    description: 'This system manages employee details with strong user authentication, ensuring secure storage and easy management of employee information.',
    technologies: ['C#', '.Net', 'MySQL'],
    functionality: [
      'User authentication and authorization',
      'Manage employee information',
      'Add, update, and delete employee records',
      'View employee details',
      'Database connectivity for persistent storage',
    ],
    githubLink1: 'https://github.com/Dumuthu2000/Point_OF_Sales_System.git',
  }
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) =>
      prevIndex === selectedProject.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? selectedProject.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-r from-gray-200 to-blue-100 dark:bg-gray-700 w-[90%] mx-auto p-5 rounded-xl mb-6">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-800 dark:text-black">My Portfolio</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer hover:shadow-xl transition-shadow duration-300"
              onClick={() => openModal(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-center text-white p-4">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm">{project.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            >
              <motion.div
                className="bg-white dark:bg-gray-900 rounded-lg shadow-lg w-full max-w-4xl max-h-[90vh] relative flex flex-col"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={e => e.stopPropagation()}
              >
                {/* Header */}
                <div className="p-6 border-b dark:border-gray-700">
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-white pr-8">
                    {selectedProject.title}
                  </h3>
                  <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 text-gray-600 dark:text-white hover:text-gray-900 dark:hover:text-gray-300 transition-colors duration-200"
                  >
                    <X size={24} />
                  </button>
                </div>

                {/* Scrollable Content */}
                <div className="overflow-y-auto flex-1 p-6">
                  {/* Project Images */}
                  <div className="relative mb-6 rounded-lg overflow-hidden">
                    <img
                      src={selectedProject.images[currentImageIndex]}
                      alt={`Project ${currentImageIndex + 1}`}
                      className="w-full h-72 object-cover rounded-lg"
                    />
                    <button
                      onClick={prevImage}
                      className="absolute top-1/2 left-2 transform -translate-y-1/2 text-white p-2 bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full transition-colors duration-200"
                    >
                      {'←'}
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white p-2 bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full transition-colors duration-200"
                    >
                      {'→'}
                    </button>
                  </div>

                  {/* Project Description */}
                  <div className="prose dark:prose-invert max-w-none mb-6">
                    <p className="text-gray-700 dark:text-gray-300 text-lg">
                      {selectedProject.description}
                    </p>
                  </div>

                  {/* Technologies Section */}
                  <div className="mb-6">
                    <h2 className="text-white text-center font-bold text-xl mb-4 bg-slate-700 p-2 rounded-md">
                      Technologies
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features Section */}
                  <div className="mb-6">
                    <h2 className="text-white text-center font-bold text-xl mb-4 bg-slate-700 p-2 rounded-md">
                      Features
                    </h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {selectedProject.functionality.map((feature, index) => (
                        <li key={index} className="text-gray-700 dark:text-gray-300 flex items-center">
                          <span className="mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer */}
                <div className="p-6 border-t dark:border-gray-700">
                  <div className="flex flex-wrap gap-4">
                    <a
                      href={selectedProject.githubLink1}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-md transition-colors duration-200"
                    >
                      Frontend Repository
                    </a>
                    {selectedProject.githubLink2 && (
                      <a
                        href={selectedProject.githubLink2}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-md transition-colors duration-200"
                      >
                        Backend Repository
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Portfolio;