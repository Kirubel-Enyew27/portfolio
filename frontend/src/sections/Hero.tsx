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
          <div className="order-2 md:order-1 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              Hello, I&apos;m{" "}
              <span className="text-accent whitespace-nowrap">
                Kirubel Enyew
              </span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-white/80">
              Golang Backend Developer
            </p>

            <p className="mt-6 max-w-xl mx-auto md:mx-0 text-white/70 leading-relaxed">
              I build scalable, secure backend systems using Go, modern
              databases, and containerized architectures.
            </p>

            {/* CTA buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#projects"
                className="px-8 py-3 rounded-lg bg-accent text-black font-semibold hover:opacity-90 transition"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="px-8 py-3 rounded-lg border border-white/30 hover:border-accent hover:text-accent transition"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* IMAGE */}
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-accent/30 blur-xl" />
              <img
                src={myImage}
                alt="Kirubel Enyew"
                className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full object-cover border border-white/20 shadow-2xl"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
