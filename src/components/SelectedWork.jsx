import React from 'react';

const projects = [
  {
    title: 'Aurora Finance',
    tag: 'Product Marketing',
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Nebula Robotics',
    tag: 'R&D Website',
    image: 'https://images.unsplash.com/photo-1636255520934-0ac5f0361cd9?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxOZWJ1bGElMjBSb2JvdGljc3xlbnwwfDB8fHwxNzYyNDQ0MTAxfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    title: 'Monk AI',
    tag: 'Brand + App',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop',
  },
];

const Card = ({ item }) => {
  return (
    <a href="#" className="group block overflow-hidden rounded-2xl border border-white/10 bg-white/5">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img src={item.image} alt={item.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0" />
      </div>
      <div className="p-5">
        <p className="text-xs uppercase tracking-wide text-fuchsia-300/80">{item.tag}</p>
        <h3 className="mt-1 text-lg font-medium">{item.title}</h3>
      </div>
    </a>
  );
};

const SelectedWork = () => {
  return (
    <section id="work" className="py-16 md:py-24">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl md:text-4xl font-semibold tracking-tight">Selected work</h2>
          <p className="mt-3 text-white/70 max-w-2xl">A snapshot of things we’ve built recently. Each project blends design, engineering, and motion for a signature feel.</p>
        </div>
        <a href="#contact" className="hidden md:inline-flex rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium hover:bg-white/10 transition-colors">Start a project</a>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((p) => (
          <Card key={p.title} item={p} />
        ))}
      </div>
    </section>
  );
};

export default SelectedWork;
