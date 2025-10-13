import React from "react";
import "../../styles/main.css";
import ProfileCard from "./ProfileCard.jsx";

const Carlos = () => {
  const integrante = {
    nombre: "Carlos Sebastian Gauto",
    edad: 34,
    habilidades: ["Java", "JavaScript", "Node.js"],
    peliculasFavoritas: ["Blade Runner", "Interstellar", "Matrix"],
    avatar: "avatar_carlos.png",
    musicaFavorita: [
      "(I Just) Died In Your Arms Tonight",
      "Walk of Life",
      "Africa",
    ],
  };

  return <ProfileCard integrante={integrante} />;
};

export default Carlos;
