import React from 'react';
import { Link } from 'react-router-dom';

const Jumbotron = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-4">
      <div className="bg-black bg-opacity-75 rounded-lg p-8 shadow-lg flex items-center space-x-4 text-white max-w-4xl mx-auto">
      <div className="w-32 h-32 rounded-full overflow-hidden">
          <img src="https://via.placeholder.com/150" alt="Profile" className="w-full h-full object-cover" />
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-2">CHI SONO</h1>
          <h2 className="text-3xl font-bold mb-2">MARCO MONTANELLI</h2>
          <p className="text-lg mb-4">
            Sono uno studente del quinto ed ultimo anno di scuola superiore in un istituto tecnico indirizzo informatica.
            Questo è il mio blog in cui troverai i miei appunti, i miei progetti e le mie risorse realizzati durante il mio percorso scolastico, spero che ti possano essere utili.
          </p>
          <Link to="/about-me" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Scopri di più
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
