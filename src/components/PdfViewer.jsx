import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faCopy, faSearchMinus, faSearchPlus, faHighlighter, faUnderline } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { saveAs } from 'file-saver';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import FileHeader from './FileHeader';
// Dynamic import of the PDF.js worker file
import('pdfjs-dist/build/pdf.worker.min.js').then((worker) => {
  pdfjs.GlobalWorkerOptions.workerSrc = worker.default;
});

const PDFViewer = ({ fileUrl }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.0);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const changePage = (offset) => {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  };

  const changeScale = (factor) => {
    setScale((prevScale) => prevScale + factor);
  };

  const downloadPDF = () => {
    saveAs(fileUrl, 'document.pdf');
  };

  const highlightText = () => {
    // Implement highlight functionality here
  };

  const underlineText = () => {
    // Implement underline functionality here
  };

  const copyText = () => {
    // Implement copy functionality here
  };

  return (
    <div className="p-4">
         <FileHeader className="bg-gray-900" h ={fileUrl} p=""/>
      <div className="flex justify-left mb-4 ">
       
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="px-4 py-2 mr-4 bg-gray-900 border border-gray-600 text-white rounded"
          onClick={() => changeScale(0.1)}
        >
          <FontAwesomeIcon icon={faSearchPlus} />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="px-4 py-2 mx-4 bg-gray-900 border border-gray-600 text-white rounded"
          onClick={() => changeScale(-0.1)}
        >
          <FontAwesomeIcon icon={faSearchMinus} />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="px-4 py-2 mx-4 bg-gray-900 border border-gray-600 text-white rounded"
          onClick={copyText}
        >
          <FontAwesomeIcon icon={faCopy} />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="px-4 py-2 mx-4 bg-gray-900 border border-gray-600 text-white rounded"
          onClick={highlightText}
        >
          <FontAwesomeIcon icon={faHighlighter} />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="px-4 py-2 mx-4 bg-gray-900 border border-gray-600 text-white rounded"
          onClick={underlineText}
        >
          <FontAwesomeIcon icon={faUnderline} />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="px-4 py-2 mx-4 bg-gray-900 border border-gray-600 text-white rounded"
          onClick={downloadPDF}
        >
          <FontAwesomeIcon icon={faDownload} />
        </motion.button>
      </div>
      <div className="flex justify-center">
        <Document
          file={fileUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={<div className="flex justify-center items-center h-96">Loading PDF...</div>}
          error={<div className="flex justify-center items-center h-96">Failed to load PDF.</div>}
        >
          <Page pageNumber={pageNumber} scale={scale} />
        </Document>
      </div>
      <div className="flex justify-between mt-4">
        <button
          className="px-4 py-2 bg-gray-900 border border-gray-600 text-white rounded"
          disabled={pageNumber <= 1}
          onClick={() => changePage(-1)}
        >
          Previous
        </button>
        <p className="text-lg">Page {pageNumber} of {numPages}</p>
        <button
          className="px-4 py-2 bg-gray-900 border border-gray-600 text-white rounded"
          disabled={pageNumber >= numPages}
          onClick={() => changePage(1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PDFViewer;
