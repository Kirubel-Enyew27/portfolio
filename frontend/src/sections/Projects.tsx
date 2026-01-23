import { Github, ExternalLink, FolderGit2 } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Learning Management System",
      desc: "A full-featured learning platform with role-based access, course management, and secure authentication.",
      stack: "Go · React · PostgreSQL · Docker",
      image: "/projects/lms.jpeg",
      github: "https://github.com/yourusername/lms",
      live: "https://lms-demo.com",
    },
    {
      title: "Restaurant Management System",
      desc: "System for managing orders, menus, staff, and daily operations with RBAC support.",
      stack: "Go · React · PostgreSQL · Docker",
      image: "/projects/restaurant.jpeg",
      github: "https://github.com/yourusername/restaurant-management",
      live: "https://restaurant-demo.com",
    },
    {
      title: "Social Media Management System",
      desc: "Scalable platform for managing users, posts, and interactions with a secure backend.",
      stack: "Go · React · PostgreSQL",
      image: "/projects/social.jpg",
      github: "https://github.com/yourusername/social-media-management",
      live: "https://social-demo.com",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-secondary/20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-10 flex items-center gap-3">
          <FolderGit2 className="w-7 h-7 text-accent" />
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((p) => (
            <div
              key={p.title}
              className="bg-primary/60 rounded-xl border border-white/10 overflow-hidden
                         transform transition-all duration-300 hover:scale-105 hover:shadow-2xl
                         flex flex-col group"
            >
              {/* Screenshot */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover
                             transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-semibold text-lg mb-2">{p.title}</h3>
                <p className="text-white/80 mb-4 flex-grow">{p.desc}</p>

                <p className="text-sm text-accent font-medium mb-6">
                  {p.stack}
                </p>

                {/* Buttons */}
                <div className="flex gap-4 mt-auto">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg
                               border border-white/20 text-sm
                               hover:border-accent hover:text-accent transition"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>

                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg
                               bg-accent text-black text-sm font-medium
                               hover:opacity-90 transition"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
