'use client'

import { MapPin, Leaf, Network, ArrowRight, Users2 } from 'lucide-react'

const PropuestaTerritorial = () => {
  const principios = [
    {
      icon: Leaf,
      title: "Solidaridad",
      description: "Promovemos la cooperación y el apoyo mutuo como base del desarrollo territorial.",
      color: "from-pink-600 to-red-600"
    },
    {
      icon: Leaf,
      title: "Sustentabilidad",
      description: "Buscamos un desarrollo que preserve el medio ambiente para las futuras generaciones.",
      color: "from-green-600 to-emerald-600"
    },
    {
      icon: Users2,
      title: "Participación",
      description: "Fomentamos la participación activa de las comunidades en su propio desarrollo.",
      color: "from-blue-600 to-indigo-600"
    },
    {
      icon: Network,
      title: "Articulación",
      description: "Construimos redes y alianzas para fortalecer el tejido social del territorio.",
      color: "from-purple-600 to-pink-600"
    }
  ]

  const ejes = [
    {
      numero: "01",
      titulo: "Fortalecimiento Organizacional",
      descripcion: "Acompañamos procesos de consolidación institucional y mejoramiento de capacidades organizativas.",
      puntos: [
        "Diagnósticos organizacionales",
        "Planes de fortalecimiento institucional", 
        "Capacitación en gestión administrativa",
        "Sistemas de seguimiento y evaluación"
      ]
    },
    {
      numero: "02",
      titulo: "Economía Solidaria",
      descripcion: "Promovemos modelos económicos basados en la cooperación, equidad y sustentabilidad ambiental.",
      puntos: [
        "Formación en principios cooperativos",
        "Desarrollo de emprendimientos solidarios",
        "Redes de intercambio y comercialización",
        "Finanzas populares y solidarias"
      ]
    },
    {
      numero: "03",
      titulo: "Liderazgo Territorial",
      descripcion: "Formamos líderes capaces de promover transformaciones sociales en sus territorios.",
      puntos: [
        "Escuelas de liderazgo comunitario",
        "Formación política y ciudadana",
        "Metodologías participativas",
        "Comunicación para el cambio social"
      ]
    },
    {
      numero: "04",
      titulo: "Desarrollo Sustentable",
      descripcion: "Implementamos estrategias que armonicen el crecimiento económico con la protección ambiental.",
      puntos: [
        "Proyectos productivos sostenibles",
        "Conservación de recursos naturales",
        "Tecnologías apropiadas",
        "Educación ambiental comunitaria"
      ]
    }
  ]

  return (
    <section id="propuesta" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <MapPin className="w-16 h-16 text-blue-600" />
          </div>
          <h2 className="text-4xl font-bold text-blue-800 mb-6">
            Nuestra Propuesta Territorial
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Construimos territorios solidarios a través de un enfoque integral que combina 
            el fortalecimiento organizacional, la economía solidaria y el desarrollo sustentable, 
            poniendo siempre en el centro a las personas y sus comunidades.
          </p>
        </div>

        {/* Principios */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-blue-800 mb-12">
            Principios Orientadores
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {principios.map((principio, index) => (
              <div key={index} className="group">
                <div className="card text-center h-full hover:shadow-custom-hover transition-all duration-300">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${principio.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <principio.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-blue-800 mb-3">{principio.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{principio.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ejes Estratégicos */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-blue-800 mb-12">
            Ejes Estratégicos de Acción
          </h3>
          
          <div className="space-y-8">
            {ejes.map((eje, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-8 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}>
                {/* Contenido */}
                <div className="flex-1">
                  <div className="card hover:shadow-custom-hover transition-all duration-300">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-800 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-xl">{eje.numero}</span>
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold text-blue-800 mb-2">{eje.titulo}</h4>
                        <p className="text-gray-600 leading-relaxed">{eje.descripcion}</p>
                      </div>
                    </div>
                    
                    <div className="grid sm:grid-cols-2 gap-3 mt-6">
                      {eje.puntos.map((punto, pIndex) => (
                        <div key={pIndex} className="flex items-center gap-2">
                          <ArrowRight className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                          <span className="text-gray-700">{punto}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Imagen/Gráfico placeholder */}
                <div className="flex-1 lg:max-w-md">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 h-64 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-blue-800 font-bold text-2xl">{eje.numero}</span>
                      </div>
                      <p className="text-blue-800 font-semibold">{eje.titulo}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-800 to-blue-700 rounded-2xl p-8 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">¿Quieres Conocer Más?</h3>
          <p className="text-xl text-blue-200 mb-6 max-w-2xl mx-auto">
            Descarga nuestro documento completo sobre la propuesta territorial solidaria 
            y conoce en detalle nuestra metodología de trabajo.
          </p>
          <button className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-300 transform hover:scale-105 transition-all duration-300">
            Descargar Propuesta Completa
          </button>
        </div>
      </div>
    </section>
  )
}

export default PropuestaTerritorial