import ListeTaches from './ListeTaches';
import Logo from './Logo';
import LecteurAudio from './LecteurAudio';
import Notifications from './Notifications';
import ListeCourses from './ListeCourses';
import Galerie from './Galerie';

function Accueil() {
  const mesAchats = ["Café", "Clavier mécanique", "Écran 4K"];

  return (
    <div style={{ padding: '20px', border: '2px solid #3498db', borderRadius: '10px', margin: '10px' }}>
      <h2 style={{ color: '#2980b9' }}>🏠 Bienvenue sur l'Accueil</h2>

      <Notifications />
      <Logo />
      <LecteurAudio />

      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px', marginTop: '10px' }}>
        <ListeTaches />
        <ListeCourses articles={mesAchats} />
      </div>

      <Galerie />
    </div>
  );
}

export default Accueil;