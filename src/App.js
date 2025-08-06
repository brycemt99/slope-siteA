import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate
} from 'react-router-dom';

// ---- PAGE COMPONENTS ----

function Dashboard() {
  return (
    <div style={pageStyle}>
      <h2>📊 Dashboard</h2>
      <p>High-level metrics, margin tracking, and alerts go here.</p>
    </div>
  );
}

function PricingModels() {
  return (
    <div style={pageStyle}>
      <h2>💵 Pricing Models</h2>
      <p>Interactive editor for pricing per client, SKU, or project.</p>
    </div>
  );
}

function Scenarios() {
  return (
    <div style={pageStyle}>
      <h2>🧠 Scenario Planner</h2>
      <p>Simulate hiring, pricing, or churn scenarios here.</p>
    </div>
  );
}

function Insights() {
  return (
    <div style={pageStyle}>
      <h2>💡 Smart Insights</h2>
      <p>“Raise rate for Project X by 15%” — suggestions will go here.</p>
    </div>
  );
}

// ---- MAIN APP STRUCTURE ----

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', height: '100vh', fontFamily: 'Arial, sans-serif' }}>
        <Sidebar />
        <div style={{ flex: 1, backgroundColor: '#f9fafb', padding: '2rem' }}>
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/pricing" element={<PricingModels />} />
            <Route path="/scenarios" element={<Scenarios />} />
            <Route path="/insights" element={<Insights />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

// ---- SIDEBAR ----

function Sidebar() {
  const navItem = {
    padding: '1rem',
    textDecoration: 'none',
    color: '#111',
    display: 'block',
    fontWeight: 500,
  };

  const navStyle = {
    width: '220px',
    backgroundColor: '#ffffff',
    borderRight: '1px solid #e5e7eb',
    paddingTop: '2rem',
  };

  return (
    <nav style={navStyle}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Slope</h2>
      <Link to="/dashboard" style={navItem}>📊 Dashboard</Link>
      <Link to="/pricing" style={navItem}>💵 Pricing Models</Link>
      <Link to="/scenarios" style={navItem}>🧠 Scenarios</Link>
      <Link to="/insights" style={navItem}>💡 Insights</Link>
    </nav>
  );
}

// ---- STYLES ----

const pageStyle = {
  background: 'white',
  padding: '2rem',
  borderRadius: '12px',
  boxShadow: '0 2px 6px rgba(0,0,0,0.04)',
};

export default App;
