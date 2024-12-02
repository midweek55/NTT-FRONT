import React from 'react';

const ProfesorCard = ({ profesor }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-4">
      <h2 className="text-xl font-bold mb-2">{profesor.nombre}</h2>
      <p className="text-gray-700 mb-4">Curso: {profesor.curso}</p>
      <ul className="list-disc list-inside text-gray-600">
        {profesor.estudiantes.length > 0 ? (
          profesor.estudiantes.map((estudiante, index) => (
            <li key={index}>{estudiante}</li>
          ))
        ) : (
          <li className="text-red-500">No hay estudiantes</li>
        )}
      </ul>
    </div>
  );
};

export default ProfesorCard;
