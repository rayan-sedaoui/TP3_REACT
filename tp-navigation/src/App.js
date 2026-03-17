import { Routes, Route, Link } from 'react-router-dom';
import Accueil from './Accueil';
import Apropos from './Apropos';
import Contact from './Contact';
import Connexion from './Connexion';
import './App.css';

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: 'auto', textAlign: 'center', padding: '20px' }}>

      <h1 className="titre">🚀 Mon Application React</h1>

      <nav style={{ padding: '15px', backgroundColor: '#ecf0f1', marginBottom: '20px', borderRadius: '8px', display: 'flex', justifyContent: 'center', gap: '30px' }}>
        <Link to="/" style={{ textDecoration: 'none', color: '#2c3e50', fontWeight: 'bold' }}>Accueil</Link>
        <Link to="/apropos" style={{ textDecoration: 'none', color: '#2c3e50', fontWeight: 'bold' }}>À propos</Link>
        <Link to="/contact" style={{ textDecoration: 'none', color: '#e67e22', fontWeight: 'bold' }}>Contact</Link>
      </nav>

      <Connexion />

      <hr style={{ margin: '30px 0', border: 'none', borderTop: '2px dashed #bdc3c7' }} />

      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;