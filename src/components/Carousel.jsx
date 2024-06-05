import React from 'react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const images = [
  'https://via.placeholder.com/1200x600', 
  'https://via.placeholder.com/1200x600/ff0000', 
  'https://via.placeholder.com/1200x600/00ff00'
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="absolute w-full h-full"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: currentIndex === index ? 1 : 0, x: currentIndex === index ? 0 : '-100%' }}
            transition={{ duration: 1 }}
          >
            <img src={image} alt={`Slide ${index}`} className="w-full h-full object-cover" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
