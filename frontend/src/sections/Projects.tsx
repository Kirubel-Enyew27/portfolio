export default function Projects() {
const projects = [
{
title: "REST API Backend",
desc: "Secure RESTful backend with authentication and RBAC.",
stack: "Go, Gin, PostgreSQL, Docker",
},
{
title: "Portfolio Backend",
desc: "Gin backend with SMTP email contact service.",
stack: "Go, Gin, SMTP",
},
];


return (
<section id="projects" className="py-24 bg-secondary/20">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-3xl font-semibold mb-10">Projects</h2>
<div className="grid md:grid-cols-2 gap-8">
{projects.map((p) => (
<div key={p.title} className="bg-primary/60 p-6 rounded-xl border border-white/10">
<h3 className="font-semibold mb-2">{p.title}</h3>
<p className="text-white/80 mb-3">{p.desc}</p>
<p className="text-sm text-accent">{p.stack}</p>
</div>
))}
</div>
</div>
</section>
);
}