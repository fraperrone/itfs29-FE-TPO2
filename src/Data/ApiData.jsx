// src/components/Data/ApiData.jsx
import React, { useState, useEffect } from 'react';
import Card from './Card';

const ApiData = () => {
  const [datos, setDatos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setCargando(true);
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20');
        if (!response.ok) {
          throw new Error('Error al cargar los datos');
        }
        const data = await response.json();
        setDatos(data.results);
        setError(null);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching data:', err);
      } finally {
        setCargando(false);
      }
    };

    fetchData();
  }, []);

  if (cargando) {
    return (
      <div className="loading">
        <p>Cargando datos desde la API...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error">
        <p>Error: {error}</p>
        <p>Intenta recargar la página</p>
      </div>
    );
  }

  return (
    <div className="api-data">
      <div className="cards-grid">
        {datos.map((pokemon, index) => (
          <Card key={index} data={pokemon} tipo="pokemon" />
        ))}
      </div>
    </div>
  );
};

export default ApiData;