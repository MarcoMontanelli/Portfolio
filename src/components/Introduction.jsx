// src/components/Introduction.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Introduction = () => {
  return (
    <section className=" text-white py-1 px-4">
      <div className="max-w-screen-xl mx-auto text-center">
        <motion.a
          href="#"
          className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm rounded-full bg-black text-white border border-indigo-500 hover:bg-gray-700"
          role="alert"
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-xs bg-purple-700 rounded-full text-white px-4 py-1.5 mr-3">New</span>
          <span className="text-sm font-medium">Guarda anche i miei applicativi</span>
          <svg
            className="ml-2 w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a 1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </motion.a>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 lg:mb-16 space-y-4"
        >
          <motion.h1
            className="mb-2 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl"
            whileHover={{ scale: 1.05 }}
          >
            Ecco il mio portfolio personale
          </motion.h1>
          <motion.p
            className="text-lg font-normal lg:text-xl"
            whileHover={{ scale: 1.05 }}
          >
            Esplora i miei progetti e guarda a cosa sto lavorando!
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Introduction;
