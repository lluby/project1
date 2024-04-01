import React from 'react';

const BodyComponent = () => {
  return (
  <div className="bg-image" style={{backgroundImage: "url('/public/Background.png')", height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', padding: '0 2rem'}}>
    <h1 style={{ font: 'Inter', fontWeight: 700, fontSize: '60px', lineHeight: '72px', marginBottom: '0.5rem', letterSpacing: '-2px', color: '#000000' }}>
    Mitra terbaik untuk <br /> 
    <span style={{ color: '#E6E8EB' }}>Sistem Keuangan</span>
    <br /> Anda
    </h1>
    <p style={{ font: 'Inter', fontWeight: 700, fontSize: '18px', lineHeight: '28px', marginBottom: '1rem', color: '#F6F8F8' }}>
    Optimalkan operasional bisnis anda dengan kemudahan <br /> 
    <span style={{ color: '#E6E8EB' }}>software kami.</span> Anda bisa fokus pada bisnis dan <br /> 
    mengembangkannya.
    </p>
  <div style={{ display: 'flex', gap: '1rem' }}>
    <button className="my-button btn btn-outline-light rounded-3" style={{ backgroundColor: '#0BA5BB', borderColor: '#0BA5BB' }}>Pelajari Kebutuhan</button>
    <button className="my-button btn btn-light rounded-3" style={{ backgroundColor: '#ffffff', color: '#0BA5BB', borderColor: '#0BA5BB' }}>Request Demo</button>
  </div>
  </div>
  );
}

export default BodyComponent