import { useState } from 'react';

function Connexion() {
  const [estEnLigne, setEstEnLigne] = useState(false);

  return (
    <div style={{
      margin: '20px auto',
      padding: '15px',
      backgroundColor: estEnLigne ? '#d4edda' : '#f8d7da',
      borderRadius: '8px',
      width: '60%'
    }}>
      <h3 style={{ color: estEnLigne ? '#155724' : '#721c24' }}>
        {estEnLigne ? '🟢 Utilisateur en ligne' : '🔴 Mode hors-ligne'}
      </h3>

      <button
        onClick={() => setEstEnLigne(!estEnLigne)}
        style={{ padding: '8px 15px', cursor: 'pointer', borderRadius: '5px', border: 'none', backgroundColor: '#34495e', color: 'white' }}
      >
        Changer le statut
      </button>
    </div>
  );
}

export default Connexion;