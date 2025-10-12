import React, { useRef } from 'react'
import { useProfileAnimation } from '../hooks/useProfileAnimation.js'
import '../styles/main.css'
import avatarImg from '../assets/avatar_guillermo.png'
import { useNavigate } from 'react-router-dom';

const Guillermo = () => {
  const navigate = useNavigate();
  const habilidades = ['JavaScript', 'React', 'Node.js']
  const peliculasFavoritas = ['Volver al futuro', 'The Elizabeth Thown', 'Los Sospechosos de siempre']
  const profileRef = useRef(null)

  useProfileAnimation(profileRef)

  // Bloque de prueba para el avatar

  return (
    <div>
      <div className="back-button-container">
        <button className="back-button" onClick={() => navigate(-1)}>
          ← Volver
        </button>
      </div>
      {/* <div style={{backgroundImage:`url(${avatarImg})`}} className="avatar">
                <h2>Bloque con fondo</h2>
                <p>Este es un bloque de prueba con imagen de fondo.</p>
            </div> */}

      {/* El resto de tu componente */}
      <div className="body">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="particle" />
        ))}

        <div className="profile" ref={profileRef}>
          <div
            className="avatar"
            style={{
              backgroundImage: `url(${avatarImg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              width: '100%',
              height: '300px',
            }}
          />
          <div className="name">
            <h1 className="title">Guillermo Kopacek</h1>
            <ul className="info">
              <li>
                <strong>Edad:</strong> 39
              </li>
              <li>
                <strong>Habilidades:</strong>
                <ul>
                  {habilidades.map((habilidad, idx) => (
                    <li key={idx}>{habilidad}</li>
                  ))}
                </ul>
              </li>
              <li>
                <strong>Películas Favoritas:</strong>
                <ul>
                  {peliculasFavoritas.map((pelicula, idx) => (
                    <li key={idx}>{pelicula}</li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Guillermo