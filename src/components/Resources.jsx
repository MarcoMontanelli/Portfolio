import React from 'react';
import ResourceCard from './ResourceCard';
import Jumbotron from './Header';
import { motion } from 'framer-motion';

const resources = [
  {
    image: 'https://via.placeholder.com/1200x675', // Replace with actual image URL
    title: 'Riassunti ed appunti',
    description: 'Consulta e scarica liberamente i riassunti realizzati da me nel corso del mio percorso scolastico.',
    link: '/pdfs/italiano',
  },
  {
    image: 'https://via.placeholder.com/1200x675', // Replace with actual image URL
    title: 'Modelli Blender',
    description: 'Scarica alcuni semplici modelli blender realizzati da me, ne troverai diverse tipologie che ti potranno essere utili.',
    link: '/files',
  },
  {
    image: 'https://via.placeholder.com/1200x675', // Replace with actual image URL
    title: 'Applicativi',
    description: 'Scarica alcuni programmi realizzati da me durante il mio tempo libero ed a scuola in java, c#, c++, javascript, python.',
    link: '/viewer3d',
  },
];

const Resources = () => {
  return (
    <div className="bg-black">
      <div className="container mx-auto ">
        <Jumbotron />
        
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.3 } },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {resources.map((resource, index) => (
            <motion.div key={index} variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}>
              <ResourceCard {...resource} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Resources;
