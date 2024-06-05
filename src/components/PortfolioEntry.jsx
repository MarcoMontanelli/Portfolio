// src/components/PortfolioEntry.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const PortfolioEntry = ({ image, title, description, date, link }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      className="relative rounded-lg overflow-hidden shadow-lg aspect-w-16 aspect-h-9"
    >
      <Link to={link}>
        <div className="relative w-full h-full">
          <img src={image} alt={title} className="w-full h-full object-cover" />
          <div className="absolute top-0 left-0 right-0 bg-gray-900 text-gray-300 px-4 py-2 flex items-center justify-between">
            <div className="flex space-x-2">
              <span className="w-3 h-3 bg-red-500 rounded-full"></span>
              <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            </div>
            <input
              type="text"
              value={title}
              readOnly
              className="bg-gray-800 text-white rounded-md px-2 py-1 w-3/4"
            />
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-50 hover:bg-opacity-0 transition duration-300 flex items-end p-4">
            <div className="text-left">
              <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
              <p className="text-gray-400 text-sm mb-2">{date}</p>
              <p className="text-gray-400 text-sm">{description}</p>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default PortfolioEntry;