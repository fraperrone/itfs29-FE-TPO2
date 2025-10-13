import React, { useRef } from "react";
import { useProfileAnimation } from "../hooks/useProfileAnimation.js";
import "../styles/main.css";
import avatarImg from "../assets/avatar_guillermo.png";

const Guillermo = () => {
  const habilidades = ["JavaScript", "React", "Node.js"];
  const peliculasFavoritas = [
    "Volver al futuro",
    "The Elizabeth Thown",
    "Los Sospechosos de siempre",
  ];
  const profileRef = useRef(null);

  useProfileAnimation(profileRef);

  // Bloque de prueba para el avatar

  return (
    <div className="profile" ref={profileRef}>
      <div
        className="avatar"
        style={{
          backgroundImage: `url(${avatarImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "300px",
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
  );
};

export default Guillermo;
