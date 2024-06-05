import React from 'react';
import { Link } from 'react-router-dom';
import { string } from 'three/examples/jsm/nodes/Nodes.js';

const FileHeader = ({h}) => {
  const modifiedH = h.substring(1);
  return (
    <div className="   text-center  ">
      <h1 className="text-5xl font-extrabold text-white mb-4 ">Stai guardando {modifiedH}</h1>
      
      
    </div>
  );
};

export default FileHeader;
