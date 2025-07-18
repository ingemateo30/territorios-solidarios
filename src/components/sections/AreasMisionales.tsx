'use client'

import { 
  MessageCircle, 
  Users, 
  Megaphone, 
  GraduationCap,
  ArrowRight,
  Heart
} from 'lucide-react'

const AreasMisionales = () => {
  const areasCentrales = [
    {
      id: 'comunicacion',
      titulo: 'COMUNICACIÓN',
      color: '#FFEB3B', // Amarillo
      gradientFrom: '#FFEB3B',
      gradientTo: '#FFC107',
      icono: MessageCircle,
      descripcion: 'Gestión integral de la multimedia de comunicación: página web, redes sociales y medios territoriales para fortalecer la identidad y cohesión territorial.'
    },
    {
      id: 'proyeccion',
      titulo: 'PROYECCIÓN Y MOVILIZACIÓN SOCIAL',
      color: '#4472C4', // Azul
      gradientFrom: '#4472C4',
      gradientTo: '#2c5aa0',
      icono: Megaphone,
      descripcion: 'Promovemos la participación ciudadana y la movilización social para la transformación territorial y el fortalecimiento del tejido social.'
    },
    {
      id: 'organizaciones',
      titulo: 'ORGANIZACIONES SOLIDARIAS',
      color: '#00A650', // Verde
      gradientFrom: '#00A650',
      gradientTo: '#008f44',
      icono: Users,
      descripcion: 'Fortalecemos y articulamos organizaciones sociales, promoviendo nuevas formas de organización solidaria y cooperativa en los territorios.'
    },
    {
      id: 'educacion',
      titulo: 'EDUCACIÓN & INVESTIGACIÓN',
      color: '#C5504B', // Rojo
      gradientFrom: '#C5504B',
      gradientTo: '#a8443f',
      icono: GraduationCap,
      descripcion: 'Desarrollamos procesos educativos e investigativos que fortalecen el conocimiento y las capacidades territoriales para el desarrollo solidario.'
    }
  ]

  return (
    <section id="areas-misionales" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header principal */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1A519E] mb-6">
            Áreas Misionales
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            <strong>TERRITORIOS SOLIDARIOS</strong> estructura su trabajo en cuatro áreas estratégicas 
            que se articulan en torno al <strong>desarrollo humano sustentable y solidario</strong>
          </p>
        </div>

        {/* Diseño circular de las áreas */}
        <div className="relative mb-20">
          {/* Contenedor principal del círculo */}
          <div className="relative mx-auto" style={{ width: '600px', height: '600px' }}>
            
            {/* Círculo central */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 bg-gradient-to-br from-[#1A519E] to-[#0f2557] rounded-full flex flex-col items-center justify-center text-white shadow-2xl border-4 border-white">
                <Heart className="w-12 h-12 mb-4 text-[#F9B233]" />
                <h3 className="text-lg font-bold text-center leading-tight mb-2">Desarrollo humano</h3>
                <h3 className="text-lg font-bold text-center leading-tight mb-2">sustentable</h3>
                <h3 className="text-lg font-bold text-center leading-tight text-[#F9B233]">y solidario</h3>
              </div>
            </div>

            {/* Áreas distribuidas en círculo */}
            {areasCentrales.map((area, index) => {
              // Posiciones en círculo (empezando desde arriba y yendo en sentido horario)
              const positions = [
                { top: '10%', left: '50%', transform: 'translate(-50%, -50%)' }, // Arriba - Proyección
                { top: '50%', right: '10%', transform: 'translate(50%, -50%)' }, // Derecha - Organizaciones
                { bottom: '10%', left: '50%', transform: 'translate(-50%, 50%)' }, // Abajo - Educación
                { top: '50%', left: '10%', transform: 'translate(-50%, -50%)' }  // Izquierda - Comunicación
              ]
              
              const position = positions[index]
              const IconComponent = area.icono

              return (
                <div
                  key={area.id}
                  className="absolute group cursor-pointer"
                  style={position}
                >
                  <div 
                    className="w-40 h-40 rounded-full flex flex-col items-center justify-center text-white shadow-2xl hover:scale-110 transition-all duration-300 border-4 border-white hover:shadow-3xl"
                    style={{ 
                      background: `linear-gradient(135deg, ${area.gradientFrom}, ${area.gradientTo})` 
                    }}
                  >
                    <IconComponent className="w-10 h-10 mb-3" />
                    <h4 className="text-sm font-bold text-center leading-tight px-2">
                      {area.titulo}
                    </h4>
                  </div>
                  
                  {/* Tooltip con descripción */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-80 bg-white p-4 rounded-xl shadow-xl border border-gray-200 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
                    <h5 className="font-bold text-[#1A519E] mb-2">{area.titulo}</h5>
                    <p className="text-sm text-gray-600 leading-relaxed">{area.descripcion}</p>
                  </div>
                </div>
              )
            })}

            {/* Líneas conectoras (opcional) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
              <circle
                cx="300"
                cy="300"
                r="170"
                fill="none"
                stroke="#1A519E"
                strokeWidth="2"
                strokeDasharray="8,8"
                className="animate-pulse"
              />
            </svg>
          </div>
        </div>

        {/* Descripción detallada de cada área */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {areasCentrales.map((area) => {
            const IconComponent = area.icono
            return (
              <div 
                key={area.id}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div 
                    className="w-16 h-16 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300"
                    style={{ 
                      background: `linear-gradient(135deg, ${area.gradientFrom}, ${area.gradientTo})` 
                    }}
                  >
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-[#1A519E] mb-2 group-hover:text-[#C62877] transition-colors">
                      {area.titulo}
                    </h4>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {area.descripcion}
                </p>
                
                {/* Elementos específicos por área */}
                <div className="border-t border-gray-100 pt-4">
                  {area.id === 'comunicacion' && (
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-gray-700">• Página web institucional</p>
                      <p className="text-sm font-medium text-gray-700">• Redes sociales estratégicas</p>
                      <p className="text-sm font-medium text-gray-700">• Medios territoriales</p>
                    </div>
                  )}
                  {area.id === 'proyeccion' && (
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-gray-700">• Participación ciudadana</p>
                      <p className="text-sm font-medium text-gray-700">• Movilización social</p>
                      <p className="text-sm font-medium text-gray-700">• Incidencia territorial</p>
                    </div>
                  )}
                  {area.id === 'organizaciones' && (
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-gray-700">• Fortalecimiento organizacional</p>
                      <p className="text-sm font-medium text-gray-700">• Nuevas formas cooperativas</p>
                      <p className="text-sm font-medium text-gray-700">• Articulación territorial</p>
                    </div>
                  )}
                  {area.id === 'educacion' && (
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-gray-700">• Formación en economía solidaria</p>
                      <p className="text-sm font-medium text-gray-700">• Investigación territorial</p>
                      <p className="text-sm font-medium text-gray-700">• Transferencia de conocimiento</p>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-800 to-blue-700 rounded-2xl p-8 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">Trabajemos Juntos por el Desarrollo Territorial</h3>
            <p className="text-xl text-blue-200 mb-6 max-w-2xl mx-auto">
              Nuestras áreas misionales están diseñadas para fortalecer el tejido social 
              y promover un desarrollo verdaderamente inclusivo y sostenible
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-300 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                Conocer Programas
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300">
                Unirse a la Red
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default AreasMisionales