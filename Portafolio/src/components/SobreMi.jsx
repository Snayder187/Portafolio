import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const experiences = [
  {
    id: 1,
    title: "Curtiembre la pisqueña - Curpisco",
    description: (
      <>
        <p><strong>Septiembre 2017 – Octubre 2019</strong></p>
        <p>Funciones:</p>
        <ul className="list-disc list-inside">
          <li>Soporte técnico</li>
          <li>Actualizar y mejorar el sistema de la empresa (FullStack), configuración del servidor</li>
          <li>Creación de Facturación Electrónica UBL 2.0</li>
          <li>Aplicativo móvil de la empresa</li>
        </ul>
      </>
    ),
    image: "/Curpisco.png",
  },
  {
    id: 2,
    title: "Ministerio de Educación",
    description: (
      <>
        <p><strong>Octubre 2019 – Diciembre 2019</strong></p>
        <p>Funciones:</p>
        <ul className="list-disc list-inside">
          <li>Creación de un sistema Semáforo</li>
          <li>Relacionar bases de datos existentes</li>
          <li>Reportes diarios y mensuales</li>
          <li>Reportes de altas y bajas de dotaciones</li>
          <li>Firmas digitales</li>
        </ul>
      </>
    ),
    image: "/Minedu.png",
  },
  {
    id: 3,
    title: "Metrología e Ingeniería Lino - Metroil",
    description: (
      <>
        <p><strong>Febrero 2022 – Septiembre 2024</strong></p>
        <p>Funciones:</p>
        <ul className="list-disc list-inside">
          <li>Optimizar el código del sistema y los SP</li>
          <li>Reducir el tiempo de ejecución de la BD</li>
          <li>Diseño de nuevos módulos</li>
          <li>Implementación de envío de mensajes por WhatsApp</li>
          <li>Implementar firmas digitales a los documentos</li>
          <li>Creación de Reportes</li>
          <li>Toma de fotos de los productos que ingresan y salen</li>
          <li>Soporte de manera efectiva y rápida</li>
          <li>Solucionar la eficiencia del trabajador, ahorro de tiempo y materiales</li>
        </ul>
      </>
    ),
    image: "/Metroil.png",
  },
];

const tecnologias = [
  { src: "/logos/dotnet.png", alt: ".NET C#" },
  { src: "/logos/sqlserver.png", alt: "SQL Server" },
  { src: "/logos/devexpress.png", alt: "DevExpress" },
  { src: "/logos/xamarin.png", alt: "Xamarin" },
];

export default function SobreMi() {
  const [activeId, setActiveId] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section id="sobremi" className="min-h-screen bg-white text-gray-800 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-center text-pink-600">Sobre mí</h2>
        <p className="text-lg leading-relaxed text-justify mb-12">
          Soy un analista de sistemas apasionado por el desarrollo de software y la creación de experiencias digitales impactantes.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className={`flex items-center transition-all duration-500 ${
                activeId === null || activeId === exp.id ? "opacity-100" : "opacity-0"
              }`}
              onMouseEnter={() => setActiveId(exp.id)}
              onMouseLeave={() => setActiveId(null)}
            >
              <div
                className={`transform transition-transform duration-500 ${
                  activeId === exp.id ? "-translate-x-10" : "translate-x-0"
                }`}
              >
                <img
                  src={exp.image}
                  alt={exp.title}
                  className={`w-75 h-75 object-contain transition duration-300 ease-in-out ${
                    activeId === exp.id ? "" : "grayscale"
                  }`}
                />
              </div>
              {activeId === exp.id && (
                <div className="ml-6 p-8 bg-gray-100 rounded-xl shadow w-250">
                  <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                  <div className="text-sm text-gray-700">{exp.description}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <section id="tecnologias" className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold text-pink-600 mb-8">Tecnologías</h2>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
          <img src="/logos/dotnet.png" alt="C#" className="w-38 h-38 sm:w-38 sm:h-38" />
          <img src="/logos/sqlserver.png" alt="SQL Server" className="w-38 h-38 sm:w-38 sm:h-38" />
          <img src="/logos/devexpress.png" alt="SQL Server" className="w-38 h-38 sm:w-38 sm:h-38" />
          <img src="/logos/xamarin.png" alt="SQL Server" className="w-38 h-38 sm:w-38 sm:h-38" />
          {/* Agrega más íconos aquí si deseas */}
        </div>
      </section>
    </section>
  );
}
