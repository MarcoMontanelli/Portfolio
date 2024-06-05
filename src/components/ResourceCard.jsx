import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ResourceCard = ({ image, title, description, link }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className=" rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 bg-black border border-gray-700 max-w-sm mx-auto"
    >
      <div className="bg-gray-900 text-gray-300 px-4 py-2 flex items-center justify-center">
        <span className="text-sm text-center">SmontaBlog</span>
        
      </div>
      <Link to={link}>
        <div className="relative">
          <img src={image} alt={title} className="w-full h-48 object-cover object-center" />
        </div>
        <div className="p-4 bg-gray-950">
          
          <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
          <hr  className="border-gray-600 mb-1 "></hr>
          <p className="text-gray-400 mb-4">{description}</p>
          <div className="flex justify-center">
            <Link to={link} className="border border-indigo-500 bg-gradient-to-r from-purple-950 via-indigo-950 to-fuchsia-950 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
              Scopri di più <span className="ml-2">&rarr;</span>
            </Link>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ResourceCard;
