import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Carlos from '../components/Carlos';
import Franco from '../components/Franco';
import Guille from '../components/guillermo';
// import Paula from '../components/Paula'; 

const ProfilePage = () => {
  const { id } = useParams();

  const componentMap = {
    carlos: Carlos,
    franco: Franco,
    guillermo: Guille,
    paula: Paula
  };

  // const ProfileComponent = componentMap[id] || componentMap.franco;
  const ProfileComponent = componentMap[id];

  return (
    <div className="profile-page">
      <div className="volver-container">
        <Link to="/" className="button-volver">Volver al Inicio</Link>
      </div>
      <ProfileComponent />
    </div>
  );
};

export default ProfilePage;