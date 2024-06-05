import React from 'react';

const ResponsiveTable3d = ({ data }) => {
  return (
    <div className="container mx-auto p-4">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-gray-950 text-white border border-gray-700 rounded-lg overflow-hidden shadow-lg">
          <thead className="hidden lg:table-header-group">
            <tr>
              <th className="py-3 px-4 bg-gray-900 border border-gray-700">Nome File</th>
              <th className="py-3 px-4 bg-gray-900 border border-gray-700">Descrizione</th>
              <th className="py-3 px-4 bg-gray-900 border border-gray-700">Argomento</th>
              <th className="py-3 px-4 bg-gray-900 border border-gray-700">Download</th>
              <th className="py-3 px-4 bg-gray-900 border border-gray-700">Visualizza 3D</th>
            </tr>
          </thead>
          <tbody className='font-bold'>
            {data.map((file, index) => (
              <tr key={index} className="block lg:table-row mb-4 lg:mb-0 border border-gray-700">
                <td className="block lg:table-cell py-3 px-4 relative lg:static" data-label="Nome File">
                  <span className="lg:hidden block mb-2 font-bold">Nome File</span>
                  {file.percorsoFile}
                </td>
                <td className="block lg:table-cell py-3 px-4 relative lg:static" data-label="Descrizione">
                  <span className="lg:hidden block mb-2 font-bold">Descrizione</span>
                  {file.descrizione}
                </td>
                <td className="block lg:table-cell py-3 px-4 relative lg:static" data-label="Argomento">
                  <span className="lg:hidden block mb-2 font-bold">Argomento</span>
                  {file.argomento}
                </td>
                <td className="block lg:table-cell py-3 px-4 relative lg:static" data-label="Download">
                  <span className="lg:hidden block mb-2 font-bold">Download</span>
                  <a href={file.downloadLink} className="border border-indigo-500 bg-gradient-to-r from-purple-950 via-indigo-950 to-fuchsia-950 text-white py-1 px-3 rounded hover:bg-purple-600">Scarica</a>
                </td>
                <td className="block lg:table-cell py-3 px-4 relative lg:static" data-label="Visualizza 3D">
                  <span className="lg:hidden block mb-2 font-bold">Visualizza 3D</span>
                    <a href={file.view3DLink} className="border border-indigo-500 bg-gradient-to-r from-purple-950 via-indigo-950 to-fuchsia-950 text-white py-1 px-3 rounded hover:bg-purple-600">Visualizza</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ResponsiveTable3d;
