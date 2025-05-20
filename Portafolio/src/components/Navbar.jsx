// src/components/Navbar.jsx
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiFileText } from "react-icons/fi";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md px-8 py-4 flex items-center justify-between">
      {/* Íconos a la izquierda */}
      <div className="flex items-center gap-4 text-xl text-gray-700">
        <a href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer" className="hover:text-black">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/tuusuario" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
          <FaLinkedin />
        </a>
        <a href="/CV-Snax.pdf" download className="hover:text-green-700">
          <FiFileText />
        </a>
      </div>

      {/* Menú a la derecha */}
      <ul className="flex items-center gap-8 text-gray-800 font-medium text-sm">
        <li><a href="#inicio" className="hover:text-blue-600">Inicio</a></li>
        <li><a href="#sobre-mi" className="hover:text-blue-600">Sobre mí</a></li>
        <li><a href="#proyectos" className="hover:text-blue-600">Proyectos</a></li>
        <li><a href="#contacto" className="hover:text-blue-600">Contacto</a></li>
      </ul>
    </nav>
  );
}