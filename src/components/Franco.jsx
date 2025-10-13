import React from "react";
import "../styles/main.css";
import ProfileCard from "./Profile/ProfileCard.jsx";

const Franco = () => {
  const integrante = {
    nombre: "Franco Perrone",
    edad: 34,
    habilidades: ["JavaScript", "React", "Node.js"],
    peliculasFavoritas: ["Inception", "The Matrix", "Interstellar"],
    avatar: "avatar_franco.jpg",
    // agregamos musicaFavorita
    musicaFavorita: [
      "Queen - Bohemian Rhapsody",
      "Nirvana - Smells Like Teen Spirit",
      "The Beatles - Hey Jude",
    ],
  };

  return <ProfileCard integrante={integrante} />;
};

export default Franco;
