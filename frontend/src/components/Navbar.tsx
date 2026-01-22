// import { Mail } from "lucide-react";

// export default function Navbar() {
//   return (
//     <nav className="fixed w-full z-50 bg-primary/90 backdrop-blur border-b border-white/10">
//       <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
//         <ul className="flex gap-6 text-xl">
//           <li><a href="#home" className="hover:text-accent">Home</a></li>
//           <li><a href="#about" className="hover:text-accent">About</a></li>
//           <li><a href="#projects" className="hover:text-accent">Projects</a></li>
//           <li><a href="#contact" className="hover:text-accent">Contact</a></li>
//         </ul>
//             <a
//               href="#contact"
//               className="px-4 py-2 border border-white/30 rounded-lg hover:border-accent hover:text-accent transition"
//             >
//           <Mail className="w-5 h-5" />
//             </a>
//       </div>
//     </nav>
//   );
// }
import { useState, useEffect, useRef, type SetStateAction } from "react";
import { Mail, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_HEIGHT = 80;

const navItems = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const navRef = useRef<HTMLElement>(null);

  /* 🔗 Navigate with offset + URL sync */
  const navigateTo = (id: any) => {
    const el = document.getElementById(id);
    if (!el) return;

    const top =
      el.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;

    window.history.pushState(null, "", `#${id}`);
    window.scrollTo({ top, behavior: "smooth" });

    setActive(id);
    setOpen(false);
  };

  /* 🔄 Outside click */
  useEffect(() => {
    const handler = (e: { target: any; }) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  /* ⌨ ESC close */
  useEffect(() => {
    const handler = (e: { key: string; }) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      navItems.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (!el) return;

        const rect = el.getBoundingClientRect();
        if (rect.top <= NAV_HEIGHT + 10 && rect.bottom > NAV_HEIGHT + 10) {
          setActive(id);
          window.history.replaceState(null, "", `#${id}`);
        }
      });
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* 📊 Scroll Progress */}
      <motion.div
        className="fixed top-0 left-0 h-[2px] bg-accent z-[60]"
        style={{
          scaleX: 1,
          transformOrigin: "left",
        }}
        animate={{
          scaleX:
            document.documentElement.scrollTop /
            (document.documentElement.scrollHeight -
              window.innerHeight),
        }}
      />

        <motion.nav
        ref={navRef}
        initial={{ y: 0 }}
        animate={{ y: 0 }}
        className="fixed w-full z-50 bg-primary/90 backdrop-blur border-b border-white/10"
        style={{ height: NAV_HEIGHT }}
        >

        <div className="max-w-6xl mx-auto px-6 h-full flex justify-between items-center">

          {/* Desktop */}
          <ul className="hidden md:flex gap-6 text-sm">
            {navItems.map(({ name, id }) => (
              <li key={id}>
                <button
                  onClick={() => navigateTo(id)}
                  className={`hover:text-accent transition ${
                    active === id ? "text-accent" : ""
                  }`}
                >
                  {name}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <button
              onClick={() => navigateTo("contact")}
              className="hidden md:flex px-4 py-2 border border-white/30 rounded-lg hover:border-accent hover:text-accent transition"
            >
              <Mail size={18} />
            </button>

            <button className="md:hidden" onClick={() => setOpen(!open)}>
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-primary border-t border-white/10"
            >
              <ul className="px-6 py-4 space-y-4 text-sm">
                {navItems.map(({ name, id }) => (
                  <li key={id}>
                    <button
                      onClick={() => navigateTo(id)}
                      className={`block ${
                        active === id ? "text-accent" : ""
                      }`}
                    >
                      {name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}


