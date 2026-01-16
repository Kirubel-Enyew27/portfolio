// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Projects from "./pages/Projects";
// import Contact from "./pages/Contact";


// export default function App() {
//   return (
//     <div className="bg-primary text-white min-h-screen">
//       <Navbar />
//       <Home />
//       <About />
//       <Projects />
//       <Contact />
//     </div>
//   );
// }
import Navbar from "./components/Navbar";
import Home from "./sections/Home";

export default function App() {
  return (
    <div className="bg-primary text-white">
      <Navbar />
      <Home />
    </div>
  );
}
