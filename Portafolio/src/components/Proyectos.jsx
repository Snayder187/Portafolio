import React from "react";

// src/components/Proyectos.jsx
export default function Proyectos() {
  return (
    <section id="proyectos" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Mis Proyectos
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Proyecto NexTix */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg relative group hover:shadow-xl transition duration-300">
            {/* Imagen */}
            <img
              src="/AtencionAlCliente.jpg" // ⚠️ Reemplaza con tu imagen en /public
              alt="Proyecto NexTix"
              className="h-70 w-full object-cover"
            />

            {/* Contenido inferior */}
            <div className="p-4 flex flex-col justify-between h-30 relative bg-white">
              {/* Nombre del proyecto */}
              <h3 className="text-lg font-semibold text-gray-800 absolute bottom-16 left-4">
                NexTix
              </h3>

              {/* Línea divisora */}
              <div className="h-1 w-full bg-gradient-to-r from-purple-500 to-pink-500 my-2 rounded-full" />

              {/* Iconos y descripción */}
              <div className="flex justify-between items-center text-sm text-gray-600">
                {/* Tecnologías */}
                <div className="flex space-x-0">
                  <img
                    src="/svg/csharp.svg"
                    alt="C#"
                    className="w-10 h-10"
                  />
                  <img
                    src="/svg/sqlserver.svg"
                    alt="SQL Server"
                    className="w-10 h-10"
                  />
                </div>

                {/* Descripción */}
                <p className="text-right">Atención al cliente por ticket</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}