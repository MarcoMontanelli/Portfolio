import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PDFViewer from '../components/PdfViewer';

const ViewerPage = () => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-grow">
      <PDFViewer />
    </main>
    <Footer />
  </div>
);

export default ViewerPage;
