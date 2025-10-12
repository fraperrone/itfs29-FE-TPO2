import React, { useRef } from 'react'
import '../styles/main.css'
import ProfileCard from './Profile/ProfileCard.jsx'

const Carlos = () => {
  const integrante = {
    nombre: 'Carlos Sebastian Gauto',
    edad: 34,
    habilidades: ['Java', 'JavaScript', 'Node.js'],
    peliculasFavoritas: ['Blade Runner', 'Interstellar', 'Matrix'],
    avatar: 'avatar_carlos.png',
    musicaFavorita: [
    '(I Just) Died In Your Arms Tonight', 
    'Walk of Life', 
    'Africa'
    ],
  }

  return (
    <div>
      <ProfileCard integrante={integrante} />
    </div>
  )
}

export default Carlos