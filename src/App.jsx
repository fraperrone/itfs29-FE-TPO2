// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Layout/Sidebar';
import HomePage from './pages/HomePage';
import BitacoraPage from './pages/BitacoraPage';
import ProfilePage from './pages/ProfilePage';
import JsonDataPage from './pages/JsonDataPage';
import ApiDataPage from './pages/ApiDataPage';
import './styles/main.css';
import './styles/responsive.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/bitacora" element={<BitacoraPage />} />
            <Route path="/perfil/:id" element={<ProfilePage />} />
            <Route path="/json-data" element={<JsonDataPage />} />
            <Route path="/api-data" element={<ApiDataPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;