import React from 'react';
import Hero3D from './components/Hero3D';
import ServicesGrid from './components/ServicesGrid';
import SelectedWork from './components/SelectedWork';
import FooterCTA from './components/FooterCTA';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white selection:bg-fuchsia-500/30 selection:text-fuchsia-200">
      <Hero3D />
      <main className="mx-auto max-w-7xl px-6 md:px-8">
        <ServicesGrid />
        <SelectedWork />
      </main>
      <FooterCTA />
    </div>
  );
}

export default App;
