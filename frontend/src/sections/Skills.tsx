export default function Skills() {
const skills = {
"Programming Languages": ["Golang", "JavaScript/TypeScript", "Node.js", "Python", "Java", ".NET"],
Databases: ["PostgreSQL", "MySQL", "CockroachDB", "MongoDB"],
Frontend: ["React", "HTML5", "CSS"],
"DevOps & Tools": ["Docker", "Git"],
"Testing & QA": ["Cucumber (godog)", "Test Assurance"],
Security: ["JWT", "OAuth", "RBAC"],
};


return (
<section id="skills" className="py-24 bg-secondary/20">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-3xl font-semibold mb-10">Skills</h2>
<div className="grid md:grid-cols-3 gap-8">
{Object.entries(skills).map(([title, items]) => (
<div key={title} className="bg-primary/60 p-6 rounded-xl border border-white/10">
<h3 className="font-semibold text-accent mb-4">{title}</h3>
<ul className="text-sm space-y-2 text-white/80">
{items.map((item) => (
<li key={item}>• {item}</li>
))}
</ul>
</div>
))}
</div>
</div>
</section>
);
}