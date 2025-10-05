// pages/JsonDataPage.jsx
import React from 'react';
import JsonData from '../Data/JsonData';

const JsonDataPage = () => {
  return (
    <div className="json-data-page">
      <h1>Datos desde Archivo JSON</h1>
      <p>Información sobre películas, libros, videojuegos, etc.</p>
      <JsonData />
    </div>
  );
};

export default JsonDataPage;