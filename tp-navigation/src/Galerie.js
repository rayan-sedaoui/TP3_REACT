function Galerie() {
  const imagesWeb = [
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
  ];

  return (
    <div style={{ marginTop: '20px', padding: '15px', border: '1px solid #bdc3c7', borderRadius: '10px' }}>
      <h3 style={{ color: '#8e44ad', marginTop: 0 }}>🖼️ Galerie des technos</h3>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
        {imagesWeb.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Logo techno ${index}`}
            style={{ width: '70px', height: '70px', objectFit: 'contain' }}
          />
        ))}
      </div>
    </div>
  );
}

export default Galerie;