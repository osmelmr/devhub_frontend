import {
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaReact,
  FaPython,
  FaJava,
  FaDatabase,
  FaCode,
  FaGitAlt,
  FaCogs,
} from "react-icons/fa";
import {
  SiDjango,
  SiPostgresql,
  SiJavascript,
  SiCplusplus,
} from "react-icons/si";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col items-center py-12 px-6">
      {/* ---------- Presentación ---------- */}
      <section className="max-w-4xl text-center mb-10">
        <h1 className="text-4xl font-bold mb-4 text-indigo-600">Sobre mí</h1>
        <p className="text-lg leading-relaxed">
          ¡Hola! Soy{" "}
          <span className="font-semibold text-indigo-700">
            Osmel Medero Rosales
          </span>
          , desarrollador web especializado en{" "}
          <span className="font-semibold">React</span>. Estudio en la
          Universidad de las Ciencias Informáticas de La Habana y llevo más de
          un año desarrollando y construyendo software con pasión, disciplina y
          enfoque en la calidad del código.
        </p>
      </section>

      {/* ---------- Habilidades técnicas ---------- */}
      <section className="max-w-4xl mb-10">
        <h2 className="text-2xl font-bold text-indigo-600 mb-4 text-center">
          Habilidades Técnicas
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Lenguajes */}
          <div className="bg-white shadow rounded-2xl p-6">
            <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
              <FaCode className="text-indigo-500" /> Lenguajes
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <SiJavascript className="text-yellow-400" /> JavaScript
              </li>
              <li className="flex items-center gap-2">
                <FaPython className="text-blue-500" /> Python
              </li>
              <li className="flex items-center gap-2">
                <SiCplusplus className="text-indigo-700" /> C++
              </li>
              <li className="flex items-center gap-2">
                <FaJava className="text-red-500" /> Java
              </li>
              <li className="flex items-center gap-2">
                <FaDatabase className="text-green-600" /> SQL
              </li>
            </ul>
          </div>

          {/* Frameworks y gestores */}
          <div className="bg-white shadow rounded-2xl p-6">
            <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
              <FaReact className="text-cyan-500" /> Frameworks y gestores
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <FaReact className="text-sky-400" /> React
              </li>
              <li className="flex items-center gap-2">
                <SiDjango className="text-green-700" /> Django
              </li>
              <li className="flex items-center gap-2">
                <FaCogs className="text-red-500" /> Django REST Framework
              </li>
              <li className="flex items-center gap-2">
                <SiPostgresql className="text-blue-500" /> PostgreSQL
              </li>
              <li className="flex items-center gap-2">
                <FaGitAlt className="text-orange-500" /> Git &{" "}
                <FaGithub className="text-gray-800" /> GitHub
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ---------- Especialidad ---------- */}
      <section className="max-w-3xl mb-10 text-center">
        <h2 className="text-2xl font-bold text-indigo-600 mb-4">
          Especialidad
        </h2>
        <p className="text-lg leading-relaxed">
          Me especializo en el desarrollo frontend con React, aplicando buenas
          prácticas de enrutamiento, manejo de estado global, custom hooks y
          organización modular. Busco siempre construir interfaces limpias,
          eficientes y mantenibles.
        </p>
      </section>

      {/* ---------- Contacto ---------- */}
      <section className="max-w-3xl text-center">
        <h2 className="text-2xl font-bold text-indigo-600 mb-4">Contacto</h2>
        <div className="flex flex-col items-center gap-3">
          <a
            href="mailto:osmelmr.dev@gmail.com"
            className="flex items-center gap-2 text-indigo-700 hover:underline"
          >
            <FaEnvelope /> osmelmr.dev@gmail.com
          </a>
          <a
            href="tel:+53963967194"
            className="flex items-center gap-2 text-indigo-700 hover:underline"
          >
            <FaPhone /> 63967194
          </a>
          <a
            href="https://github.com/ormelmr"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-indigo-700 hover:underline"
          >
            <FaGithub /> github.com/ormelmr
          </a>
        </div>
      </section>
    </div>
  );
}
