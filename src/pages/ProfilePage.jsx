// pages/ProfilePage.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ProfileCard from '../components/Profile/ProfileCard';

const ProfilePage = () => {
  const { id } = useParams();

  const integrantes = {
    franco: {
      nombre: 'Franco Perrone Rey',
      edad: 34,
      habilidades: ['JavaScript', 'React', 'Node.js'],
      peliculasFavoritas: ['Inception', 'The Matrix', 'Interstellar'],
      avatar: 'avatar_franco.jpg'
    },
    carlos: {
      nombre: 'Carlos Sebastian Gauto',
      edad: 33,
      habilidades: ['Java', 'JavaScript', 'Node.js'],
      peliculasFavoritas: ['Blade Runner', 'Interstellar', 'Matrix'],
    //   musicaFavorita: ['(I Just) Died In Your Arms Tonight', 'Walk of Life', 'Africa'],
      avatar: 'avatar_carlos.png'
    },
    guillermo: {
      nombre: 'Guillermo Kopacek',
      edad: 25,
      habilidades: ['Python', 'Django', 'React'],
      peliculasFavoritas: ['Avengers', 'Star Wars', 'The Dark Knight'],
      avatar: 'avatar_guillermo.jpg'
    },
    paula: {
      nombre: 'Paula Núñez',
      edad: 28,
      habilidades: ['HTML/CSS', 'JavaScript', 'UI/UX Design'],
      peliculasFavoritas: ['La La Land', 'Forrest Gump', 'The Notebook'],
      avatar: 'avatar_paula.jpg'
    }
  };

  const integrante = integrantes[id] || integrantes.franco;

  return (
    <div className="profile-page">
      <div className="volver-container">
        <Link to="/" className="button-volver">← Volver al Inicio</Link>
      </div>
      <ProfileCard integrante={integrante} />
    </div>
  );
};

export default ProfilePage;