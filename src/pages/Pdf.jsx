import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useParams } from 'react-router-dom';

import PDFViewer from '../components/PdfViewer';

const ViewerPage = () => {
    const { file } = useParams();
    const fileUrl = `/${file}`;
  
    return (
      <div className="flex flex-col min-h-screen">
     
        <main className="flex-grow">
          <PDFViewer fileUrl={fileUrl} />
        </main>
        
      </div>
    );
  };
  
  export default ViewerPage;
