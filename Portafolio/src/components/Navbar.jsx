// src/components/Navbar.jsx
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiFileText } from "react-icons/fi";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full h-20 bg-black/60 text-white flex items-center justify-between px-8 shadow-lg z-50 backdrop-blur-md">
      
      {/* Íconos a la izquierda */}
      <div className="flex items-center gap-5 text-2xl">
        <a
          href="https://github.com/Snayder187"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300 transition-colors"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/hector-miguel-ramos-santisteban-88b35a156/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition-colors"
        >
          <FaLinkedin />
        </a>
        <a
          href="/CV-Snax.pdf"
          download
          className="hover:text-green-400 transition-colors"
        >
          <FiFileText />
        </a>
      </div>

      {/* Menú a la derecha */}
      <ul className="flex items-center gap-10 text-white font-medium text-base">
        <li><a href="#hero" className="hover:text-pink-400 transition-colors">Inicio</a></li>
        <li><a href="#sobremi" className="hover:text-pink-400 transition-colors">Sobre mí</a></li>
        <li><a href="#proyectos" className="hover:text-pink-400 transition-colors">Proyectos</a></li>
        <li><a href="#contacto" className="hover:text-pink-400 transition-colors">Contacto</a></li>
      </ul>
    </nav>
  );
}
