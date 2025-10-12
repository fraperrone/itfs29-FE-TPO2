// src/pages/ApiDataPage.jsx
import React from 'react';
import ApiData from '../Data/ApiData';
import ParticleBackground from '../components/UI/ParticleBackground'

const ApiDataPage = () => {
  return (
    <div className="api-data-page">
      <div className="body">
        {/* Efecto particulas */}
        <ParticleBackground />
        <div className="profile">
          <div className="name">
            <h1 className="title">Datos desde API Externa</h1>
            <p>Información en tiempo real desde una API pública de Pokémon</p>
            <ApiData />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiDataPage;