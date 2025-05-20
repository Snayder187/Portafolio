import React from "react";

// src/components/Hero.jsx
export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white flex items-center"
    >
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between">
        {/* Texto a la izquierda */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            ¡Hola, soy Hector Ramos!
          </h1>
          <p className="text-xl md:text-2xl mb-6 drop-shadow">
            Programador backend con más de 5 años de experiencia con el lenguaje .Net C#. Este portafolio está en construcción 🚧.
          </p>
          <a
            href="#sobremi"
            className="inline-block bg-white text-purple-700 font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition duration-300"
          >
            Conóceme más
          </a>
        </div>

        {/* Imagen a la derecha */}
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <img
            src="/HectorRamos.jpg" // ✅ Reemplaza esto con tu imagen
            alt="Foto de Hector"
            className="w-64 h-64 rounded-full object-cover border-4 border-white shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}