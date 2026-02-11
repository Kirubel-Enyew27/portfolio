import { Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24 max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-semibold mb-10 flex items-center gap-3">
        <Briefcase className="w-7 h-7 text-accent" />
        Work Experience
      </h2>

      <div className="space-y-12">
          {/* Cashflow Financial Technologies */}
        <div className="relative border-l-2 border-accent pl-6">
          <span className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-accent" />

          <h3 className="font-semibold">
            Full-Stack Developer —{" "}
          <a
          href="https://cashflow.et" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline hover:opacity-90 transition"
      >Cashflow Financial Technologies</a>
          </h3>
          <p className="text-sm text-white/60">
            September 2025 – Present
          </p>

          <ul className="mt-4 text-white/80 space-y-2">
            <li>• Implemented secure payment APIs as part of a payment gateway project</li>
            <li>• Developed a receipt verification system to validate transaction authenticity</li>
            <li>• Built an order management application for an escrow-based payment system</li>
            <li>• Worked closely with product and backend teams to deliver fintech solutions</li>
          </ul>
        </div>
        {/* Two F Capital */}
        <div className="relative border-l-2 border-accent pl-6">
          <span className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-accent" />

          <h3 className="font-semibold">
            Backend Developer —{}
          <a
          href="https://2f-capital.com" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline hover:opacity-90 transition"
      >Two F Capital</a>
          </h3>
          <p className="text-sm text-white/60">
            February 2024 – September 2025
          </p>

          <ul className="mt-4 text-white/80 space-y-2">
            <li>• Worked on a microservice-based delivery dispatch system using Golang</li>
            <li>• Developed and maintained backend APIs for inter-service communication</li>
            <li>• Built and maintained Dockerized services</li>
            <li>• Collaborated using Git in a team environment</li>
          </ul>
        </div>

        {/* ConDigital Technologies */}
        <div className="relative border-l-2 border-accent pl-6">
          <span className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-accent" />

          <h3 className="font-semibold">
            QA Tester —{" "}
          <a
          href="https://condigital.io" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline hover:opacity-90 transition"
      >ConDigital Technologies</a>
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
