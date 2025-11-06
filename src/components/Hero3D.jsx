import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Sparkles } from 'lucide-react';

const Hero3D = () => {
  return (
    <section className="relative w-full h-[85vh] md:h-[90vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient vignette that won't block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70" />

      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs md:text-sm backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 text-fuchsia-400" />
              <span className="text-white/80">Creative Web Studio</span>
            </div>
            <h1 className="mt-4 font-semibold tracking-tight text-4xl sm:text-6xl md:text-7xl leading-[1.05]">
              We craft playful, modern web experiences
            </h1>
            <p className="mt-4 max-w-xl text-white/70 text-base md:text-lg">
              A design-led dev team turning bold ideas into interactive products.
              From portfolios to platforms — we ship fast and with style.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-full bg-fuchsia-500 px-5 py-3 text-sm font-medium text-black hover:bg-fuchsia-400 transition-colors"
              >
                <Rocket className="h-4 w-4" /> View our work
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-medium text-white hover:bg-white/10 transition-colors"
              >
                Start a project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero3D;
