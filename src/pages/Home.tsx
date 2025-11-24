// src/pages/Home.tsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type Stats = {
  projects: number;
  repos: number;
  languages: number;
};

function useStats() {
  const [data, setData] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    (async () => {
      try {
        const res = await fetch("/api/v1/stats/");
        const json = await res.json();
        if (active) setData(json);
      } catch {
        if (active) setData({ projects: 5, repos: 12, languages: 7 });
      } finally {
        if (active) setLoading(false);
      }
    })();
    return () => {
      active = false;
    };
  }, []);

  return { data, loading };
}

export function Home() {
  return (
    <main
      aria-labelledby="home-title"
      className="min-h-screen bg-white dark:bg-gray-900"
    >
      <HeroSection />
      <FeatureGrid />
      <StatsBar />
      <LearningMindset />
      <CallToAction />
    </main>
  );
}

function HeroSection() {
  return (
    <section className="relative isolate px-6 pt-14 pb-20 sm:pb-28 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h1
          id="home-title"
          className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl"
        >
          Construyendo y aprendiendo cada día
        </h1>
        <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
          Me apasiona crear proyectos con Django REST, React y Tailwind.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <Link
            to="/projects"
            className="rounded-md bg-indigo-600 px-5 py-3 text-sm font-semibold text-white hover:bg-indigo-700"
          >
            Ver proyectos
          </Link>
          <Link
            to="/contact"
            className="rounded-md border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-700"
          >
            Contáctame
          </Link>
        </div>
      </div>
    </section>
  );
}

function FeatureGrid() {
  const features = [
    {
      title: "Backend con Django REST",
      desc: "APIs seguras y escalables con autenticación y PostgreSQL.",
      icon: "⚙️",
    },
    {
      title: "Frontend con React + Tailwind",
      desc: "Interfaces modernas, responsivas y accesibles.",
      icon: "🎨",
    },
    {
      title: "Control de versiones",
      desc: "Git y GitHub para trabajo organizado.",
      icon: "🌱",
    },
    {
      title: "Lenguajes diversos",
      desc: "Python, TypeScript, Java y C++.",
      icon: "📚",
    },
  ];

  return (
    <section className="px-6 py-12 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Lo que practico y sigo aprendiendo
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <article
              key={f.title}
              className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800"
            >
              <div className="text-2xl">{f.icon}</div>
              <h3 className="mt-3 text-lg font-semibold text-gray-900 dark:text-white">
                {f.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                {f.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatsBar() {
  const { data, loading } = useStats();

  return (
    <section className="bg-gray-50 px-6 py-10 lg:px-8 dark:bg-gray-800">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Mi progreso
        </h2>

        {loading && (
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-300">
            Cargando estadísticas...
          </p>
        )}

        {data && (
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <StatCard label="Proyectos" value={data.projects} />
            <StatCard label="Repositorios" value={data.repos} />
            <StatCard label="Lenguajes" value={data.languages} />
          </div>
        )}
      </div>
    </section>
  );
}

function StatCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <p className="text-sm text-gray-500 dark:text-gray-300">{label}</p>
      <p className="mt-2 text-3xl font-semibold text-gray-900 dark:text-white">
        {value}
      </p>
    </div>
  );
}

function LearningMindset() {
  return (
    <section className="px-6 py-12 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Siempre con ganas de aprender
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Cada proyecto es una oportunidad para mejorar.
        </p>
      </div>
    </section>
  );
}

function CallToAction() {
  return (
    <section className="bg-indigo-600 px-6 py-12 text-white lg:px-8 dark:bg-indigo-700">
      <div className="mx-auto max-w-6xl flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div>
          <h2 className="text-2xl font-semibold">Explora mi portafolio</h2>
          <p className="mt-2 text-sm opacity-90">
            Proyectos, repositorios y aprendizajes en constante evolución.
          </p>
        </div>
        <Link
          to="/projects"
          className="rounded-md bg-white px-5 py-3 text-sm font-semibold text-indigo-700 hover:bg-indigo-50 dark:text-indigo-200 dark:hover:bg-indigo-600"
        >
          Ver proyectos
        </Link>
      </div>
    </section>
  );
}

export default Home;
