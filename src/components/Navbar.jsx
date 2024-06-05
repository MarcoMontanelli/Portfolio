import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faFilePdf, faHome, faInfoCircle, faFile, faCogs } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/react.svg'; // Adjust the path to your logo

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [pdfsOpen, setPdfsOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const togglePdfs = () => {
    setPdfsOpen(!pdfsOpen);
  };

  const menuVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "-100%" }
  };

  const dropdownVariants = {
    open: { opacity: 1, height: "auto" },
    closed: { opacity: 0, height: 0 }
  };

  return (
    <nav className="bg-gray-950 text-white p-4 flex justify-between items-center relative z-20 rounded-b-lg shadow-lg">
      <div className="flex items-center">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 w-10" />
          <span className="ml-2 text-xl font-extrabold">SmontaBlog</span>
        </Link>
      </div>
      <div className="hidden md:flex space-x-4 items-center font-semibold">
        <Link to="/home" className="hover:text-blue-300 transition-colors duration-300 flex items-center">
          <FontAwesomeIcon icon={faHome} className="mr-2" /> Home
        </Link>
        <Link to="/about-me" className="hover:text-blue-300 transition-colors duration-300 flex items-center">
          <FontAwesomeIcon icon={faInfoCircle} className="mr-2" /> About Me
        </Link>
        <Link to="/files" className="hover:text-blue-300 transition-colors duration-300 flex items-center">
          <FontAwesomeIcon icon={faFile} className="mr-2" /> Files
        </Link>
        <div className="relative group">
          <button onClick={togglePdfs} className="hover:text-blue-300 transition-colors duration-300 flex items-center">
            <FontAwesomeIcon icon={faFilePdf} className="mr-2" /> PDFs
          </button>
          <motion.div
            initial="closed"
            animate={pdfsOpen ? "open" : "closed"}
            variants={dropdownVariants}
            className="absolute bg-gray-800 text-white rounded mt-2 space-y-2 p-2 shadow-lg origin-top"
          >
            <Link to="/pdfs/tpsi" className="block hover:text-blue-300 transition-colors duration-300">TPSI</Link>
            <Link to="/pdfs/informatica" className="block hover:text-blue-300 transition-colors duration-300">Informatica</Link>
            <Link to="/pdfs/sistemi" className="block hover:text-blue-300 transition-colors duration-300">Sistemi</Link>
            <Link to="/pdfs/italiano" className="block hover:text-blue-300 transition-colors duration-300">Italiano</Link>
            <Link to="/pdfs/storia" className="block hover:text-blue-300 transition-colors duration-300">Storia</Link>
            <Link to="/pdfs/inglese" className="block hover:text-blue-300 transition-colors duration-300">Inglese</Link>
            <Link to="/pdfs/telecomunicazioni" className="block hover:text-blue-300 transition-colors duration-300">Telecomunicazioni</Link>
          </motion.div>
        </div>
        <Link to="/viewer3d" className="hover:text-blue-300 transition-colors duration-300 flex items-center">
          <FontAwesomeIcon icon={faCogs} className="mr-2" /> 3D Viewer
        </Link>
      </div>
      <button className="md:hidden" onClick={toggleMenu}>
        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} size="lg" />
      </button>
      {menuOpen && (
        <motion.div
          initial="closed"
          animate={menuOpen ? "open" : "closed"}
          variants={menuVariants}
          className="absolute top-16 left-0 w-full bg-gray-800 text-white flex flex-col space-y-2 p-4 md:hidden z-30 rounded-b-lg"
        >
          <Link to="/home" className="hover:text-blue-300 transition-colors duration-300 flex items-center" onClick={() => setMenuOpen(false)}>
            <FontAwesomeIcon icon={faHome} className="mr-2" /> Home
          </Link>
          <Link to="/about-me" className="hover:text-blue-300 transition-colors duration-300 flex items-center" onClick={() => setMenuOpen(false)}>
            <FontAwesomeIcon icon={faInfoCircle} className="mr-2" /> About Me
          </Link>
          <Link to="/files" className="hover:text-blue-300 transition-colors duration-300 flex items-center" onClick={() => setMenuOpen(false)}>
            <FontAwesomeIcon icon={faFile} className="mr-2" /> Files
          </Link>
          <button onClick={togglePdfs} className="hover:text-blue-300 transition-colors duration-300 flex items-center">
            <FontAwesomeIcon icon={faFilePdf} className="mr-2" /> PDFs
          </button>
          {pdfsOpen && (
            <motion.div
              initial="closed"
              animate="open"
              variants={dropdownVariants}
              className="pl-4 space-y-1"
            >
              <Link to="/pdfs/tpsi" className="block hover:text-blue-300 transition-colors duration-300" onClick={() => setMenuOpen(false)}>TPSI</Link>
              <Link to="/pdfs/informatica" className="block hover:text-blue-300 transition-colors duration-300" onClick={() => setMenuOpen(false)}>Informatica</Link>
              <Link to="/pdfs/sistemi" className="block hover:text-blue-300 transition-colors duration-300" onClick={() => setMenuOpen(false)}>Sistemi</Link>
              <Link to="/pdfs/italiano" className="block hover:text-blue-300 transition-colors duration-300" onClick={() => setMenuOpen(false)}>Italiano</Link>
              <Link to="/pdfs/storia" className="block hover:text-blue-300 transition-colors duration-300" onClick={() => setMenuOpen(false)}>Storia</Link>
              <Link to="/pdfs/inglese" className="block hover:text-blue-300 transition-colors duration-300" onClick={() => setMenuOpen(false)}>Inglese</Link>
              <Link to="/pdfs/telecomunicazioni" className="block hover:text-blue-300 transition-colors duration-300" onClick={() => setMenuOpen(false)}>Telecomunicazioni</Link>
            </motion.div>
          )}
          <Link to="/viewer3d" className="hover:text-blue-300 transition-colors duration-300 flex items-center" onClick={() => setMenuOpen(false)}>
            <FontAwesomeIcon icon={faCogs} className="mr-2" /> 3D Viewer
          </Link>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
