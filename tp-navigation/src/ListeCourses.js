function ListeCourses({ articles }) {
  return (
    <div style={{ padding: '15px', border: '2px dashed #27ae60', borderRadius: '8px', backgroundColor: '#e9f7ef', display: 'inline-block', margin: '10px' }}>
      <h3 style={{ color: '#2ecc71', marginTop: 0 }}>🛒 À acheter :</h3>
      <ul style={{ textAlign: 'left', margin: 0, paddingLeft: '20px' }}>
        {articles.map((item, index) => (
          <li key={index} style={{ color: '#2c3e50', fontWeight: 'bold' }}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListeCourses;