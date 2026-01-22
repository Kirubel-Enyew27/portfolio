import { motion } from "framer-motion";
import myImage from "../assets/me.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-24"
    >
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

          {/* TEXT */}
          <motion.div
            className="order-2 md:order-1 text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              Hello, I&apos;m{" "}
              <span className="text-accent whitespace-nowrap">
                Kirubel Enyew
              </span>
            </h1>

            <p className="mt-4 text-lg sm:text-xl text-white/80 font-medium">
              Full-Stack Developer
            </p>

            <p className="mt-4 max-w-xl mx-auto md:mx-0 text-white/70 leading-relaxed text-base sm:text-lg">
              Building secure backends and sleek frontends with <span className="text-accent">Go</span> & <span className="text-accent">React</span>.
              Creating robust systems and intuitive interfaces for modern web experiences.
            </p>

            {/* CTA buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#projects"
                className="px-8 py-3 rounded-lg bg-accent text-black font-medium hover:opacity-90 hover:scale-105 transition-transform duration-300"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="px-8 py-3 rounded-lg border border-white/30 hover:border-accent hover:text-accent hover:scale-105 transition-transform duration-300"
              >
                Contact Me
              </a>
            </div>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            className="order-1 md:order-2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-accent/30 blur-xl animate-pulse" />
              <img
                src={myImage}
                alt="Kirubel Enyew"
                className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full object-cover border border-white/20 shadow-2xl"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
