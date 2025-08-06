import React from 'react';

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#111', lineHeight: 1.6 }}>
      {/* Hero */}
      <section style={{ padding: '5rem 2rem', textAlign: 'center', background: '#f9fafb' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>Slope</h1>
        <p style={{ fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
          The real-time financial OS for lean businesses. Understand your pricing, protect your margin, and grow confidently—without a CFO.
        </p>
        <button style={{
          backgroundColor: '#047857',
          color: 'white',
          padding: '0.75rem 1.5rem',
          fontSize: '1rem',
          borderRadius: '10px',
          border: 'none',
          cursor: 'pointer'
        }}>
          Join the Waitlist
        </button>
      </section>

      {/* Features */}
      <section style={{ padding: '4rem 2rem', background: 'white', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem' }}>Core Features</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
          {[
            { title: 'Pricing Model Builder', desc: 'Build and test per-client or per-product pricing models' },
            { title: 'Margin Dashboard', desc: 'Track contribution margin in real-time' },
            { title: 'Scenario Planner', desc: 'Model growth, hiring, pricing, and cash impact' },
            { title: 'Smart Alerts', desc: 'Suggestions like “Raise your rates 15% on X”' }
          ].map(({ title, desc }) => (
            <div key={title} style={{ background: '#f1f5f9', padding: '1.5rem', borderRadius: '12px' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>{title}</h3>
              <p style={{ fontSize: '0.95rem' }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section style={{ padding: '4rem 2rem', background: '#f9fafb', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem' }}>Pricing</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem' }}>
          {[
            { tier: 'Core', price: '$39/mo', features: ['Margin tracking', 'Pricing calculator', 'Basic dashboard'] },
            { tier: 'Pro', price: '$99/mo', features: ['Scenario planner', 'Smart insights', 'GSheets & QuickBooks integration'] },
            { tier: 'CFO+', price: '$199/mo', features: ['Multi-client dashboard', 'Report export', 'White-label tools'] }
          ].map(({ tier, price, features }) => (
            <div key={tier} style={{ background: 'white', padding: '2rem', borderRadius: '12px', minWidth: '250px', boxShadow: '0 0 10px rgba(0,0,0,0.05)' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{tier}</h3>
              <p style={{ fontSize: '1.5rem', margin: '1rem 0' }}>{price}</p>
              <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.95rem' }}>
                {features.map(f => <li key={f}>✓ {f}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials (optional placeholder) */}
      <section style={{ padding: '4rem 2rem', background: 'white', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem' }}>What Founders Are Saying</h2>
        <blockquote style={{ fontSize: '1.1rem', fontStyle: 'italic', maxWidth: '600px', margin: '0 auto' }}>
          “Slope gave me clarity on what to charge and who to fire. It paid for itself in 3 weeks.”<br />
          <span style={{ display: 'block', marginTop: '1rem', fontWeight: 'bold' }}>– Alex M., Founder of Nova</span>
        </blockquote>
      </section>

      {/* Call to Action */}
      <section style={{ padding: '4rem 2rem', background: '#047857', textAlign: 'center', color: 'white' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>Ready to Take Control of Your Margins?</h2>
        <p style={{ marginBottom: '2rem' }}>Join the waitlist and be among the first to experience Slope.</p>
        <button style={{
          backgroundColor: 'white',
          color: '#047857',
          padding: '0.75rem 1.5rem',
          fontSize: '1rem',
          borderRadius: '10px',
          border: 'none',
          cursor: 'pointer'
        }}>
          Get Early Access
        </button>
      </section>

      {/* Footer */}
      <footer style={{ padding: '2rem', fontSize: '0.9rem', textAlign: 'center', background: '#f1f5f9' }}>
        &copy; {new Date().getFullYear()} Slope. Built for lean operators.
      </footer>
    </div>
  );
}

export default App;
