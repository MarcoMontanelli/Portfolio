import React, { useState } from 'react';
import PDFCard from './PDFCard';

import { motion } from 'framer-motion';

const PDFsPage = () => {
  const [filter, setFilter] = useState('');
  const [yearFilter, setYearFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [yearDropdownOpen, setYearDropdownOpen] = useState(false);
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);

  const pdfs = [
    // Populate this array with your PDF data
    {
      image: '/test.PNG',
      title: 'Bus di Campo',
      year: '2022',
      category: 'Informatica',
      description: 'Spiegazione ISO stack e fieldbus per PLC',
      link: 'path/to/pdf1.pdf',
    },
    {
        image: '/test.PNG',
        title: 'Bus di Campo',
        year: '2022',
        category: 'Informatica',
        description: 'Spiegazione ISO stack e fieldbus per PLC',
        link: 'path/to/pdf1.pdf',
      },
      {
        image: '/test.PNG',
        title: 'Bus di Campo',
        year: '2022',
        category: 'Informatica',
        description: 'Spiegazione ISO stack e fieldbus per PLC',
        link: 'path/to/pdf1.pdf',
      },
      {
        image: '/test.PNG',
        title: 'Bus di Campo',
        year: '2022',
        category: 'Informatica',
        description: 'Spiegazione ISO stack e fieldbus per PLC',
        link: 'path/to/pdf1.pdf',
      },
      {
        image: '/test.PNG',
        title: 'Bus di Campo',
        year: '2022',
        category: 'Informatica',
        description: 'Spiegazione ISO stack e fieldbus per PLC',
        link: 'path/to/pdf1.pdf',
      },
      {
        image: '/test.PNG',
        title: 'Bus di Campo',
        year: '2022',
        category: 'Informatica',
        description: 'Spiegazione ISO stack e fieldbus per PLC',
        link: 'path/to/pdf1.pdf',
      },

    // Add more PDF objects here
  ];

  const filteredPDFs = pdfs.filter(pdf =>
    pdf.title.toLowerCase().includes(filter.toLowerCase()) &&
    (yearFilter ? pdf.year === yearFilter : true) &&
    (categoryFilter ? pdf.category === categoryFilter : true)
  );

  const years = [...new Set(pdfs.map(pdf => pdf.year))];
  const categories = [...new Set(pdfs.map(pdf => pdf.category))];

  return (
    <div className="container mx-auto p-4">
    <div className="mb-4 flex space-x-4">
      <div className="relative">
        <button
          onClick={() => setYearDropdownOpen(!yearDropdownOpen)}
          className="w-40 bg-gray-900 text-white p-2 border border-gray-700 rounded-lg"
        >
          Filter by Year
        </button>
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: yearDropdownOpen ? 1 : 0, height: yearDropdownOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute z-10 mt-1 w-40 bg-gray-900 text-white border border-gray-700 rounded-lg overflow-hidden"
          style={{ display: yearDropdownOpen ? 'block' : 'none' }}
        >
          {years.map(year => (
            <div
              key={year}
              onClick={() => {
                setYearFilter(year);
                setYearDropdownOpen(false);
              }}
              className="p-2 hover:bg-gray-700 cursor-pointer"
            >
              {year}
            </div>
          ))}
        </motion.div>
      </div>

      <div className="relative">
        <button
          onClick={() => setCategoryDropdownOpen(!categoryDropdownOpen)}
          className="w-40 bg-gray-900 text-white p-2 border border-gray-700 rounded-lg"
        >
          Filter by Category
        </button>
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: categoryDropdownOpen ? 1 : 0, height: categoryDropdownOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute z-10 mt-1 w-40 bg-gray-900 text-white border border-gray-700 rounded-lg overflow-hidden"
          style={{ display: categoryDropdownOpen ? 'block' : 'none' }}
        >
          {categories.map(category => (
            <div
              key={category}
              onClick={() => {
                setCategoryFilter(category);
                setCategoryDropdownOpen(false);
              }}
              className="p-2 hover:bg-gray-700 cursor-pointer"
            >
              {category}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredPDFs.map((pdf, index) => (
          <PDFCard key={index} {...pdf} />
        ))}
      </div>
    </div>
  );
}

export default PDFsPage;
