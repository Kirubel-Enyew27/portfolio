export default function Experience() {
return (
<section id="experience" className="py-24 max-w-6xl mx-auto px-6">
<h2 className="text-3xl font-semibold mb-10">Work Experience</h2>


<div className="space-y-10">
<div className="border-l-2 border-accent pl-6">
<h3 className="font-semibold">Backend Developer — Two F Capital</h3>
<p className="text-sm text-white/60">February 2024 – Present</p>
<ul className="mt-4 text-white/80 space-y-2">
<li>• Developed backend APIs using Golang</li>
<li>• Worked with PostgreSQL, MySQL, CockroachDB</li>
<li>• Built Dockerized services</li>
<li>• Used Git for collaboration</li>
</ul>
</div>


<div className="border-l-2 border-accent pl-6">
<h3 className="font-semibold">QA Tester — ConDigital Technologies</h3>
<p className="text-sm text-white/60">May 2024 – September 2024</p>
<ul className="mt-4 text-white/80 space-y-2">
<li>• Conducted functional and regression testing</li>
<li>• Reported and documented defects</li>
<li>• Collaborated closely with developers</li>
</ul>
</div>
</div>
</section>
);
}