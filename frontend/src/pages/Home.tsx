export default function Home() {
  return (
    <section id="home" className="min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-6 pt-32">
        <h2 className="text-5xl font-extrabold leading-tight">
          Full-Stack <span className="text-accent">Go</span> &{" "}
          <span className="text-accent">React</span> Developer
        </h2>

        <p className="mt-6 max-w-xl text-white/70">
          I build fast, scalable web applications and APIs for businesses
          and startups.
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-accent text-black rounded-lg font-medium"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-white/20 rounded-lg"
          >
            Hire Me
          </a>
        </div>
      </div>
    </section>
  );
}
