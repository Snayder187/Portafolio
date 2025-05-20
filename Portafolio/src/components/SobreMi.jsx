import React from "react";

// src/components/SobreMi.jsx
export default function SobreMi() {
  return (
    <section id="sobremi" className="min-h-screen bg-white text-gray-800 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-center text-pink-600">Sobre mí</h2>
        <p className="text-lg leading-relaxed text-justify">
          ¡Hola! Soy Snax, un apasionado por el desarrollo web y la creación de experiencias digitales impactantes. 
          Actualmente estoy construyendo mi portafolio desde cero con React y Tailwind CSS 🚀.
        </p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-gray-100 p-4 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">🎨 Creativo</h3>
            <p>
              Me encanta experimentar con diseño visual y hacer que las interfaces cobren vida.
            </p>
          </div>
          <div className="bg-gray-100 p-4 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">💻 Apasionado por el código</h3>
            <p>
              Siempre estoy aprendiendo nuevas tecnologías y mejorando mis habilidades como desarrollador.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}