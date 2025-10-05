// components/Layout/Sidebar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';
// import logo from '../../assets/logo.png';

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        {/* <img src={logo} alt="Logo Grupo 8" /> */}
        <h2>GRUPO 8</h2>
      </div>
      
      <nav className="sidebar-nav">
        <ul>
          <li className={location.pathname === '/' ? 'active' : ''}>
            <Link to="/">Portada</Link>
          </li>
          <li className={location.pathname === '/bitacora' ? 'active' : ''}>
            <Link to="/bitacora">Bitácora</Link>
          </li>
          <li className={location.pathname.includes('/perfil') ? 'active' : ''}>
            <Link to="/perfil/franco">👥 Integrantes</Link>
          </li>
          <li className={location.pathname === '/json-data' ? 'active' : ''}>
            <Link to="/json-data">Datos JSON</Link>
          </li>
          <li className={location.pathname === '/api-data' ? 'active' : ''}>
            <Link to="/api-data">API Externa</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;