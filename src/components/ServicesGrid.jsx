import React from 'react';
import { Code2, Palette, Zap, Sparkles } from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'Brand-led Design',
    desc: 'Visual systems, design language, and UI kits that feel uniquely yours.'
  },
  {
    icon: Code2,
    title: 'Full-Stack Development',
    desc: 'React frontends, FastAPI backends, and realtime experiences that scale.'
  },
  {
    icon: Zap,
    title: 'Performance & SEO',
    desc: 'Fast, accessible, and search-ready. We obsess over the details.'
  },
  {
    icon: Sparkles,
    title: 'Motion & 3D',
    desc: 'Framer Motion, WebGL and Spline to bring interfaces to life.'
  }
];

const ServicesGrid = () => {
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="max-w-2xl">
        <h2 className="text-2xl md:text-4xl font-semibold tracking-tight">What we do</h2>
        <p className="mt-3 text-white/70">A small team with big energy. We partner with founders, marketers and product teams to ship memorable web experiences.</p>
      </div>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {services.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-5 md:p-6 backdrop-blur-sm hover:border-fuchsia-400/40 transition-all">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-fuchsia-500/20 p-2 text-fuchsia-300">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-medium">{title}</h3>
            </div>
            <p className="mt-3 text-sm text-white/70">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesGrid;
