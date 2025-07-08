'use client'

import { Calendar, Users, Heart } from 'lucide-react'
//import Image from 'next/image'

const AntecedentesHistoricos = () => {
  return (
    <section id="antecedentes" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header principal */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1A519E] mb-6">
            Nuestros Antecedentes Históricos
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Una historia construida sobre el legado de liderazgo social y desarrollo territorial 
            en las provincias del sur de Santander
          </p>
        </div>

        {/* Timeline histórico */}
        <div className="mb-20">
          <div className="relative">
            {/* Línea del tiempo */}
            <div className="absolute left-4 lg:left-1/2 transform lg:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-[#1A519E] to-[#C62877]"></div>
            
            <div className="space-y-16">
              {/* Proceso de SEPAS */}
              <div className="relative flex flex-col lg:flex-row lg:items-center">
                <div className="lg:w-1/2 lg:pr-12">
                  <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 ml-12 lg:ml-0">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#1A519E] to-[#0f2557] rounded-lg flex items-center justify-center">
                        <Heart className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#1A519E]">Décadas Anteriores</h3>
                        <p className="text-sm text-gray-500">Fundamentos del Desarrollo Solidario</p>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Durante varias décadas, las organizaciones cooperativas y solidarias impulsadas por <strong>SEPAS</strong>, 
                      con el liderazgo del <strong>Padre Ramón González Parra</strong>, contribuyeron al desarrollo solidario 
                      y sustentable de las provincias Guanentá, Comunera y Veleña.
                    </p>
                  </div>
                </div>
                
                {/* Punto en la línea del tiempo */}
                <div className="absolute left-4 lg:left-1/2 transform lg:-translate-x-1/2 w-4 h-4 bg-[#1A519E] rounded-full border-4 border-white shadow-lg"></div>
                
                <div className="lg:w-1/2 lg:pl-12">
                  <div className="hidden lg:block">
                    <div className="bg-gradient-to-br from-[#1A519E]/10 to-[#C62877]/10 p-6 rounded-xl">
                      <Users className="w-12 h-12 text-[#1A519E] mb-3" />
                      <h4 className="font-bold text-[#1A519E] mb-2">Legado de SEPAS</h4>
                      <p className="text-gray-600 text-sm">
                        Organización cooperativa que sentó las bases del desarrollo territorial solidario
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Fallecimiento del Padre Ramón */}
              <div className="relative flex flex-col lg:flex-row lg:items-center">
                <div className="lg:w-1/2 lg:pr-12">
                  <div className="hidden lg:block">
                    <div className="bg-gradient-to-br from-[#F9B233]/20 to-[#C62877]/20 p-6 rounded-xl">
                      <Calendar className="w-12 h-12 text-[#C62877] mb-3" />
                      <h4 className="font-bold text-[#C62877] mb-2">27 de Octubre 2022</h4>
                      <p className="text-gray-600 text-sm">
                        Partida del Padre Ramón González Parra
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Punto en la línea del tiempo */}
                <div className="absolute left-4 lg:left-1/2 transform lg:-translate-x-1/2 w-4 h-4 bg-[#C62877] rounded-full border-4 border-white shadow-lg"></div>
                
                <div className="lg:w-1/2 lg:pl-12">
                  <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 ml-12 lg:ml-0">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#C62877] to-[#a31e5a] rounded-lg flex items-center justify-center">
                        <Calendar className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#1A519E]">Octubre 2022</h3>
                        <p className="text-sm text-gray-500">Un Momento de Reflexión</p>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Al mes del fallecimiento del <strong>Padre Ramón</strong> (27 de octubre de 2022), 
                      por iniciativa del <strong>Padre Samuel González</strong> se reunieron sacerdotes y 
                      compañeros de trabajo de SEPAS surgidos del proceso de pastoral.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      En esta reunión se acordó realizar encuentros para reflexionar sobre el 
                      <strong> legado del Padre Ramón</strong> y proyectar acciones futuras.
                    </p>
                  </div>
                </div>
              </div>

              {/* Creación de la Comisión */}
              <div className="relative flex flex-col lg:flex-row lg:items-center">
                <div className="lg:w-1/2 lg:pr-12">
                  <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 ml-12 lg:ml-0">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#F9B233] to-[#e1a000] rounded-lg flex items-center justify-center">
                        <Heart className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#1A519E]">2023</h3>
                        <p className="text-sm text-gray-500">Nace la Articulación</p>
                      </div>
                    </div>
                    <h4 className="text-lg font-bold text-[#1A519E] mb-3">
                      Comisión Interinstitucional Pro Desarrollo Sustentable y Solidario
                    </h4>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Se creó una <strong>Comisión Interinstitucional</strong> para las provincias del sur de Santander, 
                      con el objetivo de impulsar colectivamente una propuesta de desarrollo humano regional.
                    </p>
                    <div className="bg-[#F9B233]/10 p-4 rounded-lg">
                      <p className="text-sm text-gray-700 font-medium">
                        <span className="text-[#1A519E]">Objetivo:</span> Articular todos los actores sociales 
                        del territorio para el desarrollo sustentable y solidario.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Punto en la línea del tiempo */}
                <div className="absolute left-4 lg:left-1/2 transform lg:-translate-x-1/2 w-4 h-4 bg-[#F9B233] rounded-full border-4 border-white shadow-lg"></div>
                
                <div className="lg:w-1/2 lg:pl-12">
                  <div className="hidden lg:block">
                    <div className="bg-gradient-to-br from-[#F9B233]/10 to-[#1A519E]/10 p-6 rounded-xl">
                      <Heart className="w-12 h-12 text-[#F9B233] mb-3" />
                      <h4 className="font-bold text-[#1A519E] mb-2">Articulación Territorial</h4>
                      <p className="text-gray-600 text-sm">
                        Uniendo fuerzas para un desarrollo humano regional integral
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Segundo Foro */}
              <div className="relative flex flex-col lg:flex-row lg:items-center">
                <div className="lg:w-1/2 lg:pr-12">
                  <div className="hidden lg:block">
                    {/* Imagen del foro si está disponible */}
                    <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100">
                      <div className="bg-gradient-to-br from-[#1A519E] to-[#0f2557] rounded-xl p-6 text-white text-center">
                        <Users className="w-16 h-16 mx-auto mb-4 text-[#F9B233]" />
                        <h4 className="font-bold text-lg mb-2">II Foro por el Desarrollo</h4>
                        <p className="text-blue-100 text-sm">San Gil y Municipios de Guanentá</p>
                        <p className="text-[#F9B233] text-sm mt-2">15 de marzo de 2024</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Punto en la línea del tiempo */}
                <div className="absolute left-4 lg:left-1/2 transform lg:-translate-x-1/2 w-4 h-4 bg-[#1A519E] rounded-full border-4 border-white shadow-lg"></div>
                
                <div className="lg:w-1/2 lg:pl-12">
                  <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 ml-12 lg:ml-0">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#1A519E] to-[#0f2557] rounded-lg flex items-center justify-center">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#1A519E]">15 de Marzo 2024</h3>
                        <p className="text-sm text-gray-500">El Segundo Foro</p>
                      </div>
                    </div>
                    <h4 className="text-lg font-bold text-[#1A519E] mb-3">
                      II Foro por el Desarrollo de San Gil y Los Municipios de la Provincia de Guanentá
                    </h4>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      La Comisión consideró necesario organizar este segundo foro para promover 
                      el desarrollo territorial con la participación de todos los actores sociales.
                    </p>
                    <div className="bg-[#1A519E]/10 p-4 rounded-lg">
                      <p className="text-sm text-gray-700 font-medium">
                        <span className="text-[#1A519E]">Conclusión clave:</span> Crear una instancia que promoviera 
                        la articulación de la institucionalidad pública y privada.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Creación de Territorios Solidarios */}
              <div className="relative flex flex-col lg:flex-row lg:items-center">
                <div className="lg:w-1/2 lg:pr-12">
                  <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 ml-12 lg:ml-0">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#C62877] to-[#a31e5a] rounded-lg flex items-center justify-center">
                        <Heart className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#1A519E]">2024 - Presente</h3>
                        <p className="text-sm text-gray-500">Nace Territorios Solidarios</p>
                      </div>
                    </div>
                    <h4 className="text-lg font-bold text-[#1A519E] mb-3">
                      Asociación Territorios Solidarios
                    </h4>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Inicialmente se consideró reactivar a <strong>INDECOL</strong>, pero la personería jurídica 
                      ya estaba vencida. Entonces se decidió crear una nueva asociación que impulsara 
                      la articulación social de las provincias del sur de Santander.
                    </p>
                    <div className="bg-gradient-to-r from-[#C62877]/10 to-[#1A519E]/10 p-4 rounded-lg">
                      <p className="text-sm text-gray-700 font-bold">
                        Nuestro presente: Una organización renovada con el legado de décadas 
                        de trabajo territorial solidario.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Punto final en la línea del tiempo */}
                <div className="absolute left-4 lg:left-1/2 transform lg:-translate-x-1/2 w-6 h-6 bg-gradient-to-r from-[#C62877] to-[#1A519E] rounded-full border-4 border-white shadow-xl"></div>
                
                <div className="lg:w-1/2 lg:pl-12">
                  <div className="hidden lg:block">
                    <div className="bg-gradient-to-br from-[#C62877]/20 to-[#1A519E]/20 p-6 rounded-xl border-2 border-[#C62877]/20">
                      <Heart className="w-12 h-12 text-[#C62877] mb-3" />
                      <h4 className="font-bold text-[#1A519E] mb-2">Territorios Solidarios Hoy</h4>
                      <p className="text-gray-600 text-sm">
                        Continuamos el legado con una nueva visión de desarrollo territorial
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Homenaje al Padre Ramón */}
        <div className="bg-gradient-to-r from-[#1A519E] to-[#0f2557] rounded-2xl p-8 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <div className="w-16 h-16 bg-[#F9B233] rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-[#1A519E]" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Honrando el Legado</h3>
            <p className="text-blue-100 text-lg leading-relaxed mb-6">
              Territorios Solidarios nace como una continuación natural del trabajo iniciado por el 
              <strong className="text-[#F9B233]"> Padre Ramón González Parra</strong> y SEPAS, 
              manteniendo vivo el espíritu de desarrollo territorial solidario que ha caracterizado 
              a las provincias del sur de Santander.
            </p>
            <div className="bg-white/10 p-4 rounded-lg">
              <p className="text-sm italic">
                &quot;El desarrollo territorial solidario no es solo una metodología, 
    es una forma de vida que honra la dignidad humana y respeta la naturaleza&quot;
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default AntecedentesHistoricos