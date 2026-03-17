function Notifications() {
  const alertesActives = 3;

  return (
    <div style={{ margin: '10px 0' }}>
      {alertesActives > 0 && (
        <p style={{ color: '#d35400', fontWeight: 'bold', backgroundColor: '#fdebd0', padding: '10px', borderRadius: '5px', display: 'inline-block' }}>
          🔔 Vous avez des notifications en attente !
        </p>
      )}
    </div>
  );
}

export default Notifications;