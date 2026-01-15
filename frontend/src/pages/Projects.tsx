const projects = [
  {
    title: "Payment API",
    desc: "High-performance REST API built with Go & Gin.",
  },
  {
    title: "Business Dashboard",
    desc: "React dashboard with analytics & role-based access.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-bold mb-10">Projects</h3>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map(p => (
            <div
              key={p.title}
              className="p-6 border border-white/10 rounded-xl hover:border-accent transition"
            >
              <h4 className="text-xl font-semibold">{p.title}</h4>
              <p className="text-white/70 mt-2">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
