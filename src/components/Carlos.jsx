// import React, { useRef } from 'react'
// import { useProfileAnimation } from '../hooks/useProfileAnimation.js'
// import '../styles/main.css'
// import avatarImg from '../assets/avatar_carlos.png'

// const Carlos = () => {
//   const habilidades = ['Java', 'JavaScript', 'Node.js']
//   const peliculasFavoritas = ['Blade Runner', 'Interstellar', 'Matrix']
//   const musicaFavorita = ['(I Just) Died In Your Arms Tonight', 'Walk of Life', 'Africa']
//   const profileRef = useRef(null)

//   useProfileAnimation(profileRef)

//   // Bloque de prueba para el avatar

//   return (
//     <div>
//       {/* <div style={{backgroundImage:`url(${avatarImg})`}} className="avatar">
//                 <h2>Bloque con fondo</h2>
//                 <p>Este es un bloque de prueba con imagen de fondo.</p>
//             </div> */}

//       {/* El resto de tu componente */}
//       <div className="body">
//         {[...Array(9)].map((_, i) => (
//           <div key={i} className="particle" />
//         ))}

//         <div className="profile" ref={profileRef}>
//           <div
//             className="avatar"
//             style={{
//               backgroundImage: `url(${avatarImg})`,
//               backgroundSize: 'cover',
//               backgroundPosition: 'center',
//               width: '100%',
//               height: '300px',
//             }}
//           />
//           <div className="name">
//             <h1 className="title">Carlos Gauto</h1>
//             <ul className="info">
//               <li>
//                 <strong>Edad:</strong> 33
//               </li>
//               <li>
//                 <strong>Habilidades:</strong>
//                 <ul>
//                   {habilidades.map((habilidad, idx) => (
//                     <li key={idx}>{habilidad}</li>
//                   ))}
//                 </ul>
//               </li>
//               <li>
//                 <strong>Películas Favoritas:</strong>
//                 <ul>
//                   {peliculasFavoritas.map((pelicula, idx) => (
//                     <li key={idx}>{pelicula}</li>
//                   ))}
//                 </ul>
//               </li>
//               <li>
//                 <strong>Música Favorita:</strong>
//                 <ul>
//                   {musicaFavorita.map((musica, idx) => (
//                     <li key={idx}>{musica}</li>
//                   ))}
//                 </ul>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Carlos

// Carlos.jsx - Versión corregida
import React, { useRef } from 'react'
import { useProfileAnimation } from '../hooks/useProfileAnimation.js'
import '../styles/main.css'
import avatarImg from '../assets/avatar_carlos.png'

const Carlos = () => {
  const habilidades = ['Java', 'JavaScript', 'Node.js']
  const peliculasFavoritas = ['Blade Runner', 'Interstellar', 'Matrix']
  const musicaFavorita = [
    '(I Just) Died In Your Arms Tonight', 
    'Walk of Life', 
    'Africa'
  ]
  
  const profileRef = useRef(null)
  useProfileAnimation(profileRef)

  return (
    <div>
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
            <h1 className="title">Carlos Gauto</h1>
            <ul className="info">
              <li>
                <strong>Edad:</strong> 33
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
              <li>
                <strong>Música Favorita:</strong>
                <ul>
                  {musicaFavorita.map((musica, idx) => (
                    <li key={idx}>{musica}</li>
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

export default Carlos