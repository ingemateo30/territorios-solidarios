'use client'

import { Users, Target, Lightbulb, Crown } from 'lucide-react'

const Nosotros = () => {
  const misionAreas = [
    {
      icon: Target,
      title: "Misión",
      description: "Promover el desarrollo territorial solidario a través del fortalecimiento organizacional, la formación de líderes y el acompañamiento a procesos comunitarios en las provincias del sur de Santander."
    },
    {
      icon: Lightbulb,
      title: "Áreas Estratégicas",
      description: "Desarrollo organizacional, formación en economía solidaria, liderazgo territorial, investigación aplicada y articulación de redes sociales para el desarrollo sustentable."
    }
  ]

  const juntaDirectiva = [
    {
      nombre: "María Elena Rodríguez",
      cargo: "Presidenta",
      descripcion: "Líder social con 15 años de experiencia en desarrollo comunitario",
      imagen: "👩‍💼"
    },
    {
      nombre: "Carlos Andrés Mejía",
      cargo: "Vicepresidente", 
      descripcion: "Especialista en economía solidaria y cooperativismo",
      imagen: "👨‍💼"
    },
    {
      nombre: "Ana Lucía Torres",
      cargo: "Secretaria",
      descripcion: "Trabajadora social especializada en procesos territoriales",
      imagen: "👩‍🎓"
    },
    {
      nombre: "Roberto Gómez",
      cargo: "Tesorero",
      descripcion: "Contador público con experiencia en organizaciones sociales",
      imagen: "👨‍💻"
    }
  ]

  const instituciones = [
    "Universidad Minuto de Dios - UNIMINUTO",
    "Fundación Desarrollo y Paz del Magdalena Medio",
    "Red de Mujeres del Sur de Santander",
    "Cooperativa de Caficultores Solidarios",
    "Asociación de Juntas de Acción Comunal",
    "Centro de Formación Campesina"
  ]

  return (
    <section id="nosotros" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header de la sección */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-800 mb-4">
            Quiénes Somos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Somos una asociación comprometida con el desarrollo territorial solidario, 
            trabajando junto a comunidades y organizaciones para construir territorios más justos y sustentables.
          </p>
        </div>

        {/* Misión y Áreas Estratégicas */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {misionAreas.map((area, index) => (
            <div key={index} className="card hover:shadow-custom-hover transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-800 to-blue-600 rounded-lg flex items-center justify-center">
                  <area.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-800 mb-3">{area.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{area.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Junta Directiva */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <Crown className="w-12 h-12 text-yellow-500" />
            </div>
            <h3 className="text-3xl font-bold text-blue-800 mb-4">Junta Directiva</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nuestro equipo directivo está conformado por líderes comprometidos con el desarrollo territorial y la economía solidaria.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {juntaDirectiva.map((miembro, index) => (
              <div key={index} className="card text-center group hover:shadow-custom-hover transition-all duration-300">
                <div className="text-6xl mb-4">{miembro.imagen}</div>
                <h4 className="text-xl font-bold text-blue-800 mb-2">{miembro.nombre}</h4>
                <p className="text-yellow-600 font-semibold mb-3">{miembro.cargo}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{miembro.descripcion}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Personas e Instituciones Asociadas */}
        <div className="bg-white rounded-2xl p-8 shadow-custom">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <Users className="w-12 h-12 text-blue-600" />
            </div>
            <h3 className="text-3xl font-bold text-blue-800 mb-4">Instituciones Asociadas</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Trabajamos en alianza con diversas organizaciones que comparten nuestra visión 
              de desarrollo territorial solidario y sustentable.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {instituciones.map((institucion, index) => (
              <div 
                key={index} 
                className="bg-gray-50 p-4 rounded-lg text-center hover:bg-blue-50 hover:border-blue-200 border-2 border-transparent transition-all duration-300 group"
              >
                <p className="text-gray-700 group-hover:text-blue-800 transition-colors duration-300 font-medium">
                  {institucion}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button className="btn-secondary hover:btn-primary transition-all duration-300">
              Ver Más Aliados
            </button>
          </div>
        </div>

        {/* Estadísticas */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { numero: "50+", texto: "Organizaciones Acompañadas" },
            { numero: "200+", texto: "Líderes Formados" },
            { numero: "8", texto: "Municipios de Influencia" },
            { numero: "5", texto: "Años de Experiencia" }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-3xl font-bold text-blue-800 mb-2">{stat.numero}</div>
              <div className="text-gray-600">{stat.texto}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Nosotros