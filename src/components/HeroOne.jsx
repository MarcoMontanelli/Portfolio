// src/components/PromoSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const PromoSection = () => {
  return (
    <section className="">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <motion.a
          href="#"
          className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm   rounded-full bg-black text-white border border-infigo-500 hover:bg-gray-700"
          role="alert"
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-xs bg-purple-700 rounded-full text-white px-4 py-1.5 mr-3">New</span>
          <span className="text-sm font-medium">PROGETTO LED WS2812B</span>
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
          className="text-center mb-8 lg:mb-16 space-y-4"
        >
          <motion.h1
            className="mb-2 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
            whileHover={{ scale: 1.05 }}
          >
            PROGETTO LED WS2812B
          </motion.h1>
          <motion.p
            className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400"
            whileHover={{ scale: 1.05 }}
          >
            Scarica alcuni file python per controllare alcune semplici animazioni per dei led 2812b controllati da un raspberry pi zero w.
          </motion.p>
          <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a
              href="#"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-indigo-500 bg-gradient-to-r from-purple-950 via-indigo-950 to-fuchsia-950 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              <FontAwesomeIcon icon={faDownload} className="mr-2" /> Scarica Applicativo
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
        >
          <div className="bg-gray-900 text-gray-300 px-4 py-2 flex items-center justify-between">
            <div className="flex space-x-2">
              <span className="w-3 h-3 bg-red-500 rounded-full"></span>
              <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            </div>
            <span className="text-sm">Terminal</span>
            <div></div>
          </div>
          <div className="">
            <img src="/proto.jpg" alt="LED Project" className="" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PromoSection;
