import { Code2 } from "lucide-react";

export default function Skills() {
  const skills = {
    "Programming Languages": [
      "Golang",
      "JavaScript/TypeScript",
      "Node.js",
      "Python",
      "Java",
      ".NET",
    ],
    Databases: ["PostgreSQL", "MySQL", "CockroachDB", "MongoDB"],
    Frontend: ["React", "HTML5", "CSS"],
    "DevOps & Tools": ["Docker", "Git"],
    "Testing & QA": ["Cucumber (godog)", "Test Assurance"],
    Security: ["JWT", "OAuth", "RBAC"],
  };

  return (
    <section id="skills" className="py-24 bg-secondary/20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-10 flex items-center gap-3">
          <Code2 className="w-7 h-7 text-accent" />
          Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([title, items]) => (
            <div
              key={title}
              className="bg-primary/60 p-6 rounded-xl border border-white/10 hover:border-accent/40 transition"
            >
              <h3 className="font-semibold text-accent mb-4">{title}</h3>
              <ul className="text-sm space-y-2 text-white/80">
                {items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="text-accent">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
