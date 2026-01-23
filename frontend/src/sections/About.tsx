import { User } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-semibold mb-6 flex items-center gap-3">
        <User className="w-7 h-7 text-accent" />
        Profile
      </h2>

      <p className="text-white/70 leading-relaxed sm:text-lg">
        I am a Golang and React full-stack developer with more than two years of
        professional experience building scalable, production-ready web
        applications. My work spans backend architecture, API development,
        database design, and containerized deployment with Docker. I hold a
        Bachelor of Science in <b>Computer Science</b> from{" "}
        <b>Addis Ababa University</b>.
      </p>
    </section>
  );
}
