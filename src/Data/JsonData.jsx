// src/components/Data/JsonData.jsx
import React from 'react';
import Card from './Card';
import datos from '../data/datos.json';  // ← Ruta corregida

const JsonData = () => {
  return (
    <div className="json-data">
      <div className="cards-grid">
        {datos.map((item, index) => (
          <Card key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default JsonData;