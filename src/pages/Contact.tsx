import {
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaMapMarkerAlt,
  FaUser,
} from "react-icons/fa";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 flex flex-col items-center py-12 px-6">
      {/* Título principal */}
      <section className="max-w-3xl text-center mb-10">
        <h1 className="text-4xl font-bold mb-4 text-indigo-600 dark:text-indigo-400">
          Contáctame
        </h1>
        <p className="text-lg leading-relaxed">
          Si deseas colaborar, contratar mis servicios o simplemente conversar
          sobre desarrollo web, no dudes en ponerte en contacto conmigo.
        </p>
      </section>

      {/* Información de contacto */}
      <section className="max-w-3xl grid md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white dark:bg-gray-800 shadow rounded-2xl p-6 text-center">
          <FaEnvelope className="text-indigo-500 text-3xl mx-auto mb-3" />
          <h3 className="font-semibold mb-1">Correo</h3>
          <a
            href="mailto:osmelmr.dev@gmail.com"
            className="text-indigo-700 dark:text-indigo-400 hover:underline"
          >
            osmelmr.dev@gmail.com
          </a>
        </div>

        <div className="bg-white dark:bg-gray-800 shadow rounded-2xl p-6 text-center">
          <FaPhone className="text-indigo-500 text-3xl mx-auto mb-3" />
          <h3 className="font-semibold mb-1">Teléfono</h3>
          <a
            href="tel:+53963967194"
            className="text-indigo-700 dark:text-indigo-400 hover:underline"
          >
            +53 96397194
          </a>
        </div>

        <div className="bg-white dark:bg-gray-800 shadow rounded-2xl p-6 text-center">
          <FaGithub className="text-indigo-500 text-3xl mx-auto mb-3" />
          <h3 className="font-semibold mb-1">GitHub</h3>
          <a
            href="https://github.com/ormelmr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-700 dark:text-indigo-400 hover:underline"
          >
            github.com/ormelmr
          </a>
        </div>
      </section>

      {/* Formulario de contacto */}
      <section className="max-w-2xl w-full bg-white dark:bg-gray-800 shadow rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-6 text-center">
          Envíame un mensaje
        </h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Gracias por tu mensaje. Te responderé pronto.");
          }}
          className="space-y-4"
        >
          <div>
            <label htmlFor="name" className="block font-medium mb-1">
              Nombre
            </label>
            <div className="flex items-center border dark:border-gray-600 rounded-lg px-3 bg-white dark:bg-gray-700">
              <FaUser className="text-gray-400 mr-2" />
              <input
                id="name"
                type="text"
                required
                className="w-full py-2 bg-transparent outline-none"
                placeholder="Tu nombre"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block font-medium mb-1">
              Correo electrónico
            </label>
            <div className="flex items-center border dark:border-gray-600 rounded-lg px-3 bg-white dark:bg-gray-700">
              <FaEnvelope className="text-gray-400 mr-2" />
              <input
                id="email"
                type="email"
                required
                className="w-full py-2 bg-transparent outline-none"
                placeholder="tucorreo@ejemplo.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block font-medium mb-1">
              Mensaje
            </label>
            <textarea
              id="message"
              required
              className="w-full border dark:border-gray-600 bg-white dark:bg-gray-700 rounded-lg p-3 outline-none"
              placeholder="Escribe tu mensaje aquí..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 dark:bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-700 dark:hover:bg-indigo-600 transition"
          >
            Enviar mensaje
          </button>
        </form>
      </section>

      {/* Ubicación */}
      <section className="max-w-3xl text-center mt-10 text-gray-600 dark:text-gray-400">
        <div className="flex justify-center items-center gap-2">
          <FaMapMarkerAlt />
          <p>La Habana, Cuba</p>
        </div>
      </section>
    </div>
  );
}
