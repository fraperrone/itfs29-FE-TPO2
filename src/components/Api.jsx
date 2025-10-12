import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/main.css';

const CyberpunkInfo = () => {
  const [data, setData] = useState(null);
  const apiKey = import.meta.env.VITE_OMDB_API_KEY;

  useEffect(() => {
    axios.get('https://www.omdbapi.com/', {
      params: {
        t: 'Cyberpunk 2077',
        apikey: apiKey
      }
    })
    .then(response => setData(response.data))
    .catch(error => console.error('Error al consultar la API:', error));
  }, []);

  return (
    <div className='body'>
        {[...Array(9)].map((_, i) => (
        <div key={i} className="particle" />
      ))}
      {data ? (
        <div className='profile'>
          <ul>
            <li><strong>Título:</strong> {data.Title}</li>
            <li><strong>Año:</strong> {data.Year}</li>
            <li><strong>Descripción:</strong> {data.Plot}</li>
          </ul>
          <img src={data.Poster} alt="Cyberpunk Poster"/>
        </div>
      ) : (
        <p>Cargando información...</p>
      )}
    </div>
  );
};

export default CyberpunkInfo;