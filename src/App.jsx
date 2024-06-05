import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import AboutMe from './pages/aboutMe';
import Files from './pages/files';
import './index.css';
import TPSI from './pages/pdfs/tpsi';
import Informatica from './pages/pdfs/informatica';
import Sistemi from './pages/pdfs/sistemi';
import Italiano from './pages/pdfs/italiano';
import Storia from './pages/pdfs/storia';
import Inglese from './pages/pdfs/inglese';
import Telecomunicazioni from './pages/pdfs/tlc';
import Viewer3D from './pages/3dViewer';
import Navbar from './components/Navbar';
import Viewer from './pages/pdfs/pdfViewer';
import Files3d from './pages/3dFiles';
import Footer from './components/Footer';
import ViewerPage from './pages/Pdf';

const App = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/files" element={<Files />} />
            <Route path="/pdfs/tpsi" element={<TPSI />} />
            <Route path="/pdfs/informatica" element={<Informatica />} />
            <Route path="/pdfs/sistemi" element={<Sistemi />} />
            <Route path="/pdfs/italiano" element={<Italiano />} />
            <Route path="/pdfs/storia" element={<Storia />} />
            <Route path="/pdfs/inglese" element={<Inglese />} />
            <Route path="/pdfs/telecomunicazioni" element={<Telecomunicazioni />} />
            <Route path="/pdfs/viewerpdf" element={<Viewer />} />
            <Route path="/viewer3d" element={<Viewer3D />} />
            <Route path="/3dmodels" element={<Files3d />} />
            <Route path="/pdfViewer/:file" element={<ViewerPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;
