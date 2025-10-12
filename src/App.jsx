// src/App.jsx
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './components/Layout/Sidebar';
import Footer from './components/Footer/footer'
import AppRoutes from './components/Routes/AppRoutes';
import './styles/main.css';
import './styles/responsive.css';
/*import Footer from './components/footer/footer.jsx'*/
import './App.css'


function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <main className="main-content">
          <AppRoutes />
          <Footer />
        </main>
      </div>
    </Router>
  );
}
export default App;