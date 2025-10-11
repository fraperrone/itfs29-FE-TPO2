// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Layout/Sidebar';
import HomePage from './pages/HomePage';
import BitacoraPage from './pages/BitacoraPage';
import JsonDataPage from './pages/JsonDataPage';
import ApiDataPage from './pages/ApiDataPage';
import './styles/main.css';
import './styles/responsive.css';
/*import Footer from './components/footer/footer.jsx'*/
import './App.css'

import CarlosPage from './pages/CarlosPage';
import FrancoPage from './pages/FrancoPage';
import GuillePage from './pages/GuillePage';
// import PaulaPage from './pages/PaulaPage';

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/bitacora" element={<BitacoraPage />} />
            <Route path="/perfil/carlos" element={<CarlosPage />} />
            <Route path="/perfil/franco" element={<FrancoPage />} />
            <Route path="/perfil/guillermo" element={<GuillePage />} />
            {/* <Route path="/perfil/paula" element={<PaulaPage />} /> */}
            <Route path="/json-data" element={<JsonDataPage />} />
            <Route path="/api-data" element={<ApiDataPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
export default App;