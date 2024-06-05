import React from 'react';
import { motion } from 'framer-motion';
import PDFsPage from '../../components/PDFsPage';

const Telecomunicazioni = () => {
  return (
    <div>
      <header className="text-center my-1">
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.1 }}
        >
          Documenti di tcl
        </motion.h1>
      </header>
      <PDFsPage />
    </div>
  );
};

export default Telecomunicazioni;
