import React, { useEffect, useState } from "react";

interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  thumbnail: string;
  tech_stack: string[];
  status: "draft" | "published";
}

export const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const dark = document.documentElement.classList.contains("dark");

  useEffect(() => {
    const mockProjects: Project[] = [
      {
        id: "1",
        title: "Todo List",
        slug: "todo-list",
        description: "Gestor de tareas con React y Redux Toolkit.",
        thumbnail: dark
          ? "https://res.cloudinary.com/dctwk3rlf/image/upload/v1763957570/fcseiouw9htgnjjjkrrt.png"
          : "https://i.imgur.com/VZevIct.png",
        tech_stack: ["React", "TypeScript", "Redux Toolkit"],
        status: "published",
      },

      {
        id: "2",
        title: "Weather App",
        slug: "weather-app",
        description:
          "Aplicación meteorológica con API externa y hooks personalizados.",
        thumbnail: "https://source.unsplash.com/400x250/?weather,app",
        tech_stack: ["React", "Vite", "Tailwind", "OpenWeather API"],
        status: "published",
      },
      {
        id: "3",
        title: "Portfolio CMS",
        slug: "portfolio-cms",
        description: "Panel para gestionar los proyectos de DevHub.",
        thumbnail: "https://source.unsplash.com/400x250/?dashboard,developer",
        tech_stack: ["Django REST", "React", "JWT Auth"],
        status: "draft",
      },
    ];

    setProjects(mockProjects);
  }, []);

  return (
    <main className="container mx-auto px-4 py-12 bg-white dark:bg-gray-900 transition-colors">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
        Mis Proyectos
      </h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.id}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
          >
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-5">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {project.title}
              </h2>

              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech_stack.map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-100 text-blue-700 dark:bg-blue-700 dark:text-blue-100 text-xs font-medium px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={`/projects/${project.slug}`}
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
              >
                Ver Proyecto
              </a>
            </div>
          </article>
        ))}
      </div>

      {projects.length === 0 && (
        <p className="text-center text-gray-500 dark:text-gray-300 mt-8">
          No hay proyectos disponibles aún.
        </p>
      )}
    </main>
  );
};

export default Projects;
