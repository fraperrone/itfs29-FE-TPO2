// src/routes/AppRoutes.jsx
import { Routes, Route } from 'react-router-dom';
import HomePage from '../../pages/HomePage';
import BitacoraPage from '../../pages/BitacoraPage';
import JsonDataPage from '../../pages/JsonDataPage';
import ApiDataPage from '../../pages/ApiDataPage';
import CarlosPage from '../../pages/CarlosPage';
import FrancoPage from '../../pages/FrancoPage';
import GuillePage from '../../pages/GuillePage';
// import PaulaPage from '../../pages/PaulaPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/bitacora" element={<BitacoraPage />} />
      <Route path="/perfil/carlos" element={<CarlosPage />} />
      <Route path="/perfil/franco" element={<FrancoPage />} />
      <Route path="/perfil/guillermo" element={<GuillePage />} />
      <Route path="/json-data" element={<JsonDataPage />} />
      <Route path="/api-data" element={<ApiDataPage />} />
    </Routes>
  );
};

export default AppRoutes;