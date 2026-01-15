export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-primary/90 backdrop-blur border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Kirubel.dev</h1>
        <ul className="flex gap-6 text-sm">
          <li><a href="#home" className="hover:text-accent">Home</a></li>
          <li><a href="#about" className="hover:text-accent">About</a></li>
          <li><a href="#projects" className="hover:text-accent">Projects</a></li>
          <li><a href="#contact" className="hover:text-accent">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
