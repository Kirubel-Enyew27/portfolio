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
import { Mail } from "lucide-react";


export default function Navbar() {
return (
<nav className="fixed w-full z-50 bg-primary/90 backdrop-blur border-b border-white/10">
<div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
<ul className="flex gap-6 text-sm">
<li><a href="#home" className="hover:text-accent">Home</a></li>
<li><a href="#about" className="hover:text-accent">About</a></li>
<li><a href="#skills" className="hover:text-accent">Skills</a></li>
<li><a href="#projects" className="hover:text-accent">Projects</a></li>
<li><a href="#contact" className="hover:text-accent">Contact</a></li>
</ul>
<a
href="#contact"
className="px-4 py-2 border border-white/30 rounded-lg hover:border-accent hover:text-accent transition"
>
<Mail size={18} />
</a>
</div>
</nav>
);
}