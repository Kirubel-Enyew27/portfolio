import { BookOpen } from "lucide-react";
import AAULogo from "../assets/aau-logo.png"; 

export default function Education() {
  return (
    <section id="education" className="py-24 max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-semibold mb-10 flex items-center gap-3">
        <BookOpen className="w-7 h-7 text-accent" />
        Education
      </h2>

      <div className="bg-primary/60 p-6 rounded-xl border border-white/10
                      hover:border-accent/40 hover:shadow-lg transition-all duration-300 flex items-center gap-6">
        {/* University Logo */}
        <img
          src={AAULogo}
          alt="Addis Ababa University"
          className="w-16 h-16 object-contain rounded-full border border-white/20 shadow-md"
        />

        {/* Text Info */}
        <div>
          <h3 className="font-semibold text-lg mb-1">BSc in Computer Science</h3>
          <p className="text-white/70 mb-1 flex items-center gap-2">
            Addis Ababa University
          </p>
          <p className="text-sm text-white/60">2019 – 2023</p>
        </div>
      </div>
    </section>
  );
}
