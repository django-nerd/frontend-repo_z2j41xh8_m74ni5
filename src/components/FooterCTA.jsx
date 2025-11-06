import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';

const FooterCTA = () => {
  return (
    <footer id="contact" className="relative mt-8">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-fuchsia-500/10 via-fuchsia-500/0 to-transparent" />
      <div className="mx-auto max-w-7xl px-6 md:px-8 py-14 md:py-20">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-10 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">Have a bold idea? Let’s build it.</h3>
              <p className="mt-2 text-white/70">Share a few details and we’ll get back within 24 hours. We take on a limited number of projects each month.</p>
            </div>
            <a
              href="mailto:hello@yourstudio.com?subject=Project%20Inquiry"
              className="inline-flex items-center gap-2 rounded-full bg-fuchsia-500 px-5 py-3 text-sm font-medium text-black hover:bg-fuchsia-400 transition-colors"
            >
              <Mail className="h-4 w-4" />
              hello@yourstudio.com
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="mt-6 text-xs text-white/50">
            © {new Date().getFullYear()} Your Creative Studio. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterCTA;
