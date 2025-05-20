import React from "react";

// src/components/Contacto.jsx
export default function Contacto() {
  return (
    <section id="contacto" className="py-16 px-6 bg-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-gray-800">Contáctame</h2>
        <p className="text-gray-600 mb-8">
          ¿Tienes un proyecto en mente o deseas trabajar conmigo? ¡Hablemos!
        </p>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          <input
            type="text"
            placeholder="Tu nombre"
            className="p-4 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="email"
            placeholder="Tu correo"
            className="p-4 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <textarea
            placeholder="Escribe tu mensaje..."
            rows="5"
            className="md:col-span-2 p-4 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          ></textarea>
          <button
            type="submit"
            className="md:col-span-2 bg-purple-600 text-white py-3 px-6 rounded hover:bg-purple-700 transition duration-300"
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
}