import React from 'react';
import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const container = {
  padding: '20px',
  maxWidth: 1100,
  margin: '0 auto'
};

const cardGrid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
  gap: 20,
  marginTop: 20
};

const card = {
  border: '1px solid #e5e7eb',
  borderRadius: 16,
  overflow: 'hidden',
  background: '#fff',
  boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
};

const imgStyle = {
  width: '100%',
  height: 180,
  objectFit: 'cover'
};

const button = {
  padding: '10px 16px',
  borderRadius: 999,
  border: '1px solid #0284c7',
  background: '#e0f2fe',
  color: '#075985',
  fontWeight: 600,
  cursor: 'pointer'
};

const destinations = [
  { name: 'Dubai', image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21', desc: 'Luxury shopping, ultramodern architecture, and desert adventures.' },
  { name: 'Singapore', image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0', desc: 'Futuristic skyline, gardens, and a world-class food scene.' },
  { name: 'Bali', image: 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff', desc: 'Beaches, temples, and lush rice terraces galore.' },
  { name: 'Thailand', image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39', desc: 'Golden temples, vibrant markets, and island escapes.' },
  { name: 'Malaysia', image: 'https://images.unsplash.com/photo-1533681018184-68bd1d883546', desc: 'Cultural mix, rainforests, and modern skylines.' },
  { name: 'Maldives', image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21', desc: 'Turquoise waters, overwater villas, and total relaxation.' }
];

const Header = () => (
  <header style={{ background: '#0ea5e9', color: 'white', padding: '18px 0', marginBottom: 10 }}>
    <div style={container}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
          <h1 style={{ margin: 0 }}>Trail of Wings</h1>
        </Link>
        <nav style={{ display: 'flex', gap: 14 }}>
          <a href="https://instagram.com" rel="noreferrer" target="_blank" style={{ color: 'white' }}>Instagram</a>
          <a href="https://facebook.com" rel="noreferrer" target="_blank" style={{ color: 'white' }}>Facebook</a>
        </nav>
      </div>
    </div>
  </header>
);

const Home = () => (
  <div style={container}>
    <h2 style={{ marginTop: 0 }}>Explore Our Top Destinations</h2>
    <div style={cardGrid}>
      {destinations.map((dest, i) => (
        <motion.div key={i} whileHover={{ scale: 1.03 }} style={card}>
          <Link to={`/${dest.name.toLowerCase()}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <img src={dest.image} alt={dest.name} style={imgStyle} />
            <div style={{ padding: 16 }}>
              <h3 style={{ margin: 0 }}>{dest.name}</h3>
              <p style={{ marginTop: 8, color: '#475569' }}>{dest.desc}</p>
              <div style={{ marginTop: 8 }}>
                <span style={{ fontSize: 12, color: '#64748b' }}>Tap to view details →</span>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  </div>
);

const DestinationPage = ({ name, image, desc }) => (
  <div>
    <div style={{ height: 320, overflow: 'hidden' }}>
      <img src={image} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
    </div>
    <div style={container}>
      <h1 style={{ marginBottom: 8 }}>{name}</h1>
      <p style={{ color: '#475569' }}>{desc}</p>
      <div style={{ display: 'flex', gap: 10, marginTop: 14 }}>
        <button style={button}>Book Now</button>
        <Link to="/" style={{ alignSelf: 'center' }}>← Back to Home</Link>
      </div>
      <div style={{ marginTop: 24, padding: 16, border: '1px solid #e5e7eb', borderRadius: 16 }}>
        <h3>Highlights</h3>
        <ul>
          <li>Curated stays and activities</li>
          <li>Flexible itineraries</li>
          <li>24/7 support while you travel</li>
        </ul>
      </div>
    </div>
  </div>
);

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      {destinations.map((dest, i) => (
        <Route
          key={i}
          path={`/${dest.name.toLowerCase()}`}
          element={<DestinationPage {...dest} />}
        />
      ))}
    </Routes>
  </Router>
);

export default App;
