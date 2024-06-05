import React from 'react';
import { motion } from 'framer-motion';

const PDFCard = ({ image, title, year, category, description, link }) => {
  return (
    <motion.div 
      className="relative bg-gray-950 border border-gray-700 shadow-lg rounded-lg overflow-hidden"
      whileHover={{ scale: 1.05 }}
    >
      <div className="bg-gray-900 text-white p-2 text-center font-semibold">{title}</div>
      <div className="relative">
        <img src={image} alt={title} className="w-full h-auto" style={{ aspectRatio: '3/4' }} />
      </div>
      <div className="p-4 text-white">
        <div className="flex space-x-2 mb-2">
          <span className="bg-blue-700 opacity-60 text-white text-xs font-semibold px-2.5 py-0.5 rounded">{year}</span>
          <span className="bg-purple-700 opacity-60 text-white text-xs font-semibold px-2.5 py-0.5 rounded">{category}</span>
        </div>
        <p className="text-sm text-gray-400 mb-4">{description}</p>
        <a href={link} className="inline-block  border border-indigo-500 bg-gradient-to-r from-purple-950 via-indigo-950 to-fuchsia-950 hover:bg-purple-700 text-white text-sm font-semibold py-2 px-4 rounded">Apri pdf</a>
      </div>
    </motion.div>
  );
}

export default PDFCard;
