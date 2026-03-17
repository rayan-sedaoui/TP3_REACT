function ListeTaches() {
  const missions = [
    { id: 101, description: "Maîtriser les composants React" },
    { id: 102, description: "Comprendre le routage interne" },
    { id: 103, description: "Déployer l'application finale" }
  ];

  return (
    <div style={{ textAlign: 'left', display: 'inline-block', backgroundColor: '#f9f9f9', padding: '15px', borderRadius: '8px', marginTop: '15px' }}>
      <h4 style={{ marginTop: 0, color: '#2c3e50' }}>🎯 Mes objectifs du TP :</h4>
      <ul style={{ paddingLeft: '20px', margin: 0 }}>
        {missions.map((mission) => (
          <li key={mission.id} style={{ marginBottom: '8px', color: '#555', fontWeight: 'bold' }}>
            {mission.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListeTaches;