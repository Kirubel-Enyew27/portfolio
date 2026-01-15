import myImage from "../assets/me.jpg";

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        
        {/* LEFT SIDE — TEXT */}
        <div className="flex flex-col justify-center">
          <h1 className="text-5xl font-extrabold text-white py-10">
            Hello, I'm
            <div className="text-accent whitespace-nowrap">
            Kirubel Enyew
            </div>
            {" "}
            Web Developer
          </h1>

          <p className="mt-4 text-xl text-white/80">
            I’m a Full‑Stack <strong>Go + React</strong> Developer
            building scalable and modern web applications.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-accent text-black rounded-lg font-medium hover:bg-accent/90 transition"
            >
              View Projects
            </a>
          </div>
        </div>

        {/* RIGHT SIDE — IMAGE */}
        <div className="flex justify-center items-center">
          <img
            src={myImage}
            alt="Kirubel Enyew"
            className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-2 border-accent shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
