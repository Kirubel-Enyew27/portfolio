import { Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24 max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-semibold mb-10 flex items-center gap-3">
        <Briefcase className="w-7 h-7 text-accent" />
        Work Experience
      </h2>

      <div className="space-y-12">
        {/* Two F Capital */}
        <div className="relative border-l-2 border-accent pl-6">
          <span className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-accent" />

          <h3 className="font-semibold">
            Backend Developer — <span className="text-accent">Two F Capital</span>
          </h3>
          <p className="text-sm text-white/60">
            February 2024 – Present
          </p>

          <ul className="mt-4 text-white/80 space-y-2">
            <li>• Developed backend APIs using Golang</li>
            <li>• Worked with PostgreSQL, MySQL, and CockroachDB</li>
            <li>• Built and maintained Dockerized services</li>
            <li>• Collaborated using Git in a team environment</li>
          </ul>
        </div>

        {/* ConDigital Technologies */}
        <div className="relative border-l-2 border-accent pl-6">
          <span className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-accent" />

          <h3 className="font-semibold">
            QA Tester —{" "}
            <span className="text-accent">ConDigital Technologies</span>
          </h3>
          <p className="text-sm text-white/60">
            May 2024 – September 2024
          </p>

          <ul className="mt-4 text-white/80 space-y-2">
            <li>• Conducted functional and regression testing</li>
            <li>• Reported, tracked, and documented defects</li>
            <li>• Collaborated closely with developers and stakeholders</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
