export default function About() {
  return (
    <section id="about" className="py-24 bg-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-bold mb-6">About Me</h3>
        <p className="max-w-3xl text-white/70">
          I’m a full-stack developer specializing in Golang backends and
          modern React frontends. I help companies build reliable systems,
          internal tools, and customer-facing platforms.
        </p>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          {["Go", "React", "PostgreSQL", "Docker"].map(skill => (
            <div
              key={skill}
              className="p-4 border border-white/10 rounded-lg text-center"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
