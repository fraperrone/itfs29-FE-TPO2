// pages/JsonDataPage.jsx
import React from 'react';
import JsonData from '../Data/JsonData';
import { useNavigate } from 'react-router-dom';
import ParticleBackground from '../components/UI/ParticleBackground'

const JsonDataPage = () => {
  const navigate = useNavigate();
  return (
    <div className="json-data-page">
      <div className="back-button-container">
        <button className="back-button" onClick={() => navigate(-1)}>
          ← Volver
        </button>
      </div>
      <div className="body">
        {/* Efecto particulas */}
        <ParticleBackground />
        <div className="profile">
          <div className="name">
            <h1 className="title">Datos desde Archivo JSON</h1>
           
            <div className="info">
              <p>
                En esta sección se muestran datos cargados desde un archivo JSON local,
                incluyendo información sobre películas, libros, videojuegos y otros contenidos.
              </p>
              
              <JsonData />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JsonDataPage;