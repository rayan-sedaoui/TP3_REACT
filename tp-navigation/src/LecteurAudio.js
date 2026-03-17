function LecteurAudio() {
  return (
    <div style={{ margin: '15px 0', padding: '10px', backgroundColor: '#e8f6f3', borderRadius: '8px', display: 'inline-block', border: '1px solid #1abc9c' }}>
      <p style={{ margin: '0 0 10px 0', fontWeight: 'bold', color: '#16a085' }}>🎧 Audio de présentation :</p>
      <audio controls src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" style={{ outline: 'none' }}></audio>
    </div>
  );
}

export default LecteurAudio;