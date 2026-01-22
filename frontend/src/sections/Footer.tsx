import { Phone, Mail, Linkedin, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black/40 border-t border-white/10 py-12">
      <div className="max-w-6xl mx-auto px-6 text-center space-y-6">
        <h4 className="text-xl font-semibold">Contact</h4>

        <div className="space-y-3 text-white/70">
          <div className="flex items-center justify-center gap-3 hover:text-accent transition">
            <Phone size={18} />
            <span>+251 948 260 013</span>
          </div>

          <a
            href="mailto:kirubelenyew76@gmail.com"
            className="flex items-center justify-center gap-3 hover:text-accent transition"
          >
            <Mail size={18} />
            <span>kirubelenyew76@gmail.com</span>
          </a>

          <div className="flex items-center justify-center gap-3">
            <MapPin size={18} />
            <span>Addis Ababa, Ethiopia</span>
          </div>

          <a
            href="https://www.linkedin.com/in/kirubel-enyew/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-3 text-accent hover:underline"
          >
            <Linkedin size={18} />
            <span>LinkedIn</span>
          </a>
        </div>

        <p className="text-xs text-white/40 pt-6">
          © {new Date().getFullYear()} Kirubel Enyew. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
