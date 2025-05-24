import React, { useEffect, useState } from "react";

// src/components/Hero.jsx
export default function Hero() {
  const [showFirstImage, setShowFirstImage] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirstImage((prev) => !prev);
    }, 4000); // Cambia cada 4 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white flex items-center"
    >
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between">
        {/* Texto a la izquierda */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            Software Developer
          </h1>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            ¡Hola, soy Hector Ramos!
          </h1>
          <p className="text-xl md:text-2xl mb-6 drop-shadow">
            Programador backend con más de 5 años de experiencia con el lenguaje de .Net C#. Este portafolio está en construcción 🚧.
            
          </p>
          <a
            href="#sobremi"
            className="inline-block bg-white text-purple-700 font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition duration-300 mr-4"
          >
            Conóceme más
          </a>
          <a
            href="/CV-Snax.pdf"
            download
            className="inline-block bg-white text-purple-700 font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition duration-300"
          >
            Descargar CV
          </a>
        </div>

        {/* Imagen a la derecha con efecto de cambio */}
        <div className="md:w-1/2 flex items-center justify-center relative w-[450px] h-[650px]">
          <img
            src="/HectorRamosFondoTransparente.png"
            alt="Foto 1"
            className={`absolute w-[450px] h-[650px] object-cover rounded-full border-4 border-white shadow-lg transition-opacity duration-1000 ease-in-out ${
              showFirstImage ? "opacity-100" : "opacity-0"
            }`}
          />
          <img
            src="/HRPicture.png"
            alt="Foto 2"
            className={`absolute w-[450px] h-[650px] object-cover rounded-full border-4 border-white shadow-lg transition-opacity duration-1000 ease-in-out ${
              showFirstImage ? "opacity-0" : "opacity-100"
            }`}
          />
        </div>
      </div>
    </section>
  );
}
