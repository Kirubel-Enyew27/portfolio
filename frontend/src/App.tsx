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
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import Home from "./sections/Home";

export default function App() {
  return (
    <div className="bg-primary text-white">
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 5000, 
          style: {
            background: "rgba(0, 0, 0, 0.4)", 
            color: "#fff",
            padding: "14px 22px",
            borderRadius: "12px",
            boxShadow: "0 6px 18px rgba(0, 0, 0, 0.35)",
            fontWeight: 500,
            fontSize: "14px",
            backdropFilter: "blur(4px)", 
          },
          success: {
            iconTheme: {
              primary: "#16c784", 
              secondary: "#fff",
            },
          },
          error: {
            iconTheme: {
              primary: "#e74c3c", 
              secondary: "#fff",
            },
          },
        }}
      />


      <Navbar />
      <Home />
    </div>
  );
}
