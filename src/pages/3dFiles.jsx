import React from 'react';
import ResponsiveTable3d from '../components/ResponsiveTable3d';
import { motion } from 'framer-motion';

const Files3d = () => {
  const sampleData = [
    {
      percorsoFile: 'file1.pdf',
      descrizione: 'Descrizione 1',
      argomento: 'Informatica',
      downloadLink: '/path/to/file1.pdf',
      view3DLink: '/path/to/3dview1',
    },
    {
      percorsoFile: 'file2.pdf',
      descrizione: 'Descrizione 2',
      argomento: 'Telecomunicazioni',
      downloadLink: '/path/to/file2.pdf',
      view3DLink: '/path/to/3dview2',
    },
    {
      percorsoFile: 'file3.pdf',
      descrizione: 'Descrizione 3',
      argomento: 'TPSI',
      downloadLink: '/path/to/file3.pdf',
      view3DLink: '/path/to/3dview3',
    },
    {
      percorsoFile: 'file4.pdf',
      descrizione: 'Descrizione 4',
      argomento: 'Sistemi',
      downloadLink: '/path/to/file4.pdf',
      view3DLink: '/path/to/3dview4',
    },
    {
      percorsoFile: 'file5.pdf',
      descrizione: 'Descrizione 5',
      argomento: 'Informatica',
      downloadLink: '/path/to/file5.pdf',
      view3DLink: '/path/to/3dview5',
    },
    {
      percorsoFile: 'file6.pdf',
      descrizione: 'Descrizione 6',
      argomento: 'Telecomunicazioni',
      downloadLink: '/path/to/file6.pdf',
      view3DLink: '/path/to/3dview6',
    },
    {
      percorsoFile: 'file7.pdf',
      descrizione: 'Descrizione 7',
      argomento: 'TPSI',
      downloadLink: '/path/to/file7.pdf',
      view3DLink: '/path/to/3dview7',
    },
    {
      percorsoFile: 'file8.pdf',
      descrizione: 'Descrizione 8',
      argomento: 'Sistemi',
      downloadLink: '/path/to/file8.pdf',
      view3DLink: '/path/to/3dview8',
    },
    {
      percorsoFile: 'file9.pdf',
      descrizione: 'Descrizione 9',
      argomento: 'Informatica',
      downloadLink: '/path/to/file9.pdf',
      view3DLink: '/path/to/3dview9',
    },
    {
      percorsoFile: 'file10.pdf',
      descrizione: 'Descrizione 10',
      argomento: 'Telecomunicazioni',
      downloadLink: '/path/to/file10.pdf',
      view3DLink: '/path/to/3dview10',
    },
    {
      percorsoFile: 'file11.pdf',
      descrizione: 'Descrizione 11',
      argomento: 'TPSI',
      downloadLink: '/path/to/file11.pdf',
      view3DLink: '/path/to/3dview11',
    },
    {
      percorsoFile: 'file12.pdf',
      descrizione: 'Descrizione 12',
      argomento: 'Sistemi',
      downloadLink: '/path/to/file12.pdf',
      view3DLink: '/path/to/3dview12',
    },
    {
      percorsoFile: 'file13.pdf',
      descrizione: 'Descrizione 13',
      argomento: 'Informatica',
      downloadLink: '/path/to/file13.pdf',
      view3DLink: '/path/to/3dview13',
    },
    {
      percorsoFile: 'file14.pdf',
      descrizione: 'Descrizione 14',
      argomento: 'Telecomunicazioni',
      downloadLink: '/path/to/file14.pdf',
      view3DLink: '/path/to/3dview14',
    },
    {
      percorsoFile: 'file15.pdf',
      descrizione: 'Descrizione 15',
      argomento: 'TPSI',
      downloadLink: '/path/to/file15.pdf',
      view3DLink: '/path/to/3dview15',
    },
  ];

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
          Files di Modelli 
        </motion.h1>
      </header>
      <ResponsiveTable3d data={sampleData} />
    </div>
  );
};

export default Files3d;
