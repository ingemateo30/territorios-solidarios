'use client'

import { 
  GraduationCap, 
  Users, 
  Megaphone, 
  Settings, 
  Brain,  
  BookOpen,
  Network,
  FileText,
  Vote,
  Target,
  MessageCircle,
  Hand
} from 'lucide-react'

const AreasMisionales = () => {
  const areasMisionales = [
    {
      id: 'educacion',
      titulo: 'Educación & Investigación',
      icono: GraduationCap,
      color: 'from-[#1A519E] to-[#0f2557]',
      colorAccent: '#1A519E',
      descripcion: 'Formamos líderes y generamos conocimiento para el desarrollo territorial solidario',
      programas: [
        {
          icono: Brain,
          nombre: 'Capacitación y Entrenamiento de Líderes Sociales',
          descripcion: 'Programas de formación a todo nivel, diseñados según las necesidades específicas de organizaciones solidarias y entidades públicas'
        },
        {
          icono: BookOpen,
          nombre: 'Investigación y Publicaciones',
          descripcion: 'Desarrollo de investigaciones y publicaciones especializadas en el campo de la economía social y solidaria'
        },
        {
          icono: Network,
          nombre: 'Alianzas Estratégicas',
          descripcion: 'Establecimiento de alianzas con instituciones educativas y organizaciones solidarias nacionales e internacionales'
        },
        {
          icono: Users,
          nombre: 'Eventos y Actividades Académicas',
          descripcion: 'Organización de seminarios, congresos, foros y actividades que promuevan el ejercicio del liderazgo y la integración'
        },
        {
          icono: Target,
          nombre: 'Pensamiento Cooperativo',
          descripcion: 'Impulso a la creación y consolidación del pensamiento cooperativo y solidario para proyectar el legado generacional'
        }
      ]
    },
    {
      id: 'organizaciones',
      titulo: 'Organizaciones',
      icono: Users,
      color: 'from-[#F9B233] to-[#e1a000]',
      colorAccent: '#F9B233',
      descripcion: 'Fortalecemos y articulamos organizaciones sociales en los diferentes niveles de la sociedad',
      programas: [
        {
          icono: Hand,
          nombre: 'Integración y Articulación',
          descripcion: 'Programas especializados de integración y articulación de líderes y organizaciones en diferentes niveles sociales'
        },
        {
          icono: Settings,
          nombre: 'Apoyo y Asesoría Organizacional',
          descripcion: 'Acompañamiento técnico y metodológico a organizaciones sociales para fortalecer sus capacidades institucionales'
        },
        {
          icono: Network,
          nombre: 'Nuevas Formas de Organización',
          descripcion: 'Promoción e impulso de nuevas modalidades de organización solidaria adaptadas a los contextos territoriales actuales'
        }
      ]
    },
    {
      id: 'proyeccion',
      titulo: 'Proyección Social',
      icono: Megaphone,
      color: 'from-[#C62877] to-[#a31e5a]',
      colorAccent: '#C62877',
      descripcion: 'Promovemos la participación ciudadana y representamos los intereses territoriales',
      programas: [
        {
          icono: Vote,
          nombre: 'Participación Ciudadana',
          descripcion: 'Promoción activa de la participación ciudadana en procesos de planeación participativa y toma de decisiones territoriales'
        },
        {
          icono: FileText,
          nombre: 'Gestión de Proyectos',
          descripcion: 'Gestión y contratación de proyectos estratégicos relacionados directamente con nuestro objeto social y territorial'
        },
        {
          icono: MessageCircle,
          nombre: 'Comunicación Social',
          descripcion: 'Desarrollo de productos comunicacionales y asesoría en articulación de medios para el fortalecimiento territorial'
        },
        {
          icono: Hand,
          nombre: 'Representación Institucional',
          descripcion: 'Representación ante instituciones públicas y privadas de los intereses territoriales y organizacionales cuando sea necesario'
        }
      ]
    }
  ]

  const areasGestion = [
    {
      area: 'Dirección',
      icono: Target,
      descripcion: 'Gestión participativa de la Asociación a partir de asambleas, reuniones de junta directiva y comités de trabajo',
      color: '#1A519E'
    },
    {
      area: 'Desarrollo Organizacional',
      icono: Settings,
      descripcion: 'Consolidación de TERRITORIOS SOLIDARIOS como organización promotora de la articulación territorial',
      color: '#F9B233'
    },
    {
      area: 'Liderazgo Organizacional',
      icono: Users,
      descripcion: 'Articulación de los liderazgos institucionales y naturales de la región',
      color: '#C62877'
    },
    {
      area: 'Finanzas y Contabilidad',
      icono: FileText,
      descripcion: 'Gestión y administración responsable de recursos necesarios para el cumplimiento de la misión',
      color: '#1A519E'
    },
    {
      area: 'Comunicación y Difusión',
      icono: MessageCircle,
      descripcion: 'Gestión integral de la multimedia de comunicación: página web, redes sociales y medios territoriales',
      color: '#F9B233'
    }
  ]

  return (
    <section id="areas-misionales" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header principal */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1A519E] mb-6">
            Nuestra Estructura Organizacional
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            <strong>TERRITORIOS SOLIDARIOS</strong> tiene la misión de coordinar liderazgos y 
            promover procesos asociativos para <strong>el desarrollo sustentable y solidario de los territorios</strong>
          </p>
        </div>

        {/* Áreas Misionales */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-[#1A519E] mb-4">Áreas Misionales</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Nuestras áreas estratégicas de trabajo territorial que definen nuestra acción 
              y compromiso con el desarrollo solidario
            </p>
          </div>

          <div className="space-y-16">
            {areasMisionales.map((area, index) => (
              <div key={area.id} className={`${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} flex flex-col lg:flex-row items-start gap-12`}>
                
                {/* Información del área */}
                <div className="lg:w-2/5">
                  <div className="sticky top-8">
                    <div className={`bg-gradient-to-r ${area.color} rounded-2xl p-8 text-white mb-6`}>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                          <area.icono className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h4 className="text-2xl font-bold">{area.titulo}</h4>
                          <p className="text-white/80 text-sm">Área Misional</p>
                        </div>
                      </div>
                      <p className="text-white/90 leading-relaxed">
                        {area.descripcion}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Programas del área */}
                <div className="lg:w-3/5">
                  <div className="space-y-6">
                    {area.programas.map((programa, programaIndex) => (
                      <div key={programaIndex} className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300 group">
                        <div className="flex items-start gap-4">
                          <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`} 
                               style={{backgroundColor: `${area.colorAccent}20`}}>
                            <programa.icono className="w-6 h-6" style={{color: area.colorAccent}} />
                          </div>
                          <div className="flex-1">
                            <h5 className="text-lg font-bold text-[#1A519E] mb-2">{programa.nombre}</h5>
                            <p className="text-gray-600 leading-relaxed text-sm">{programa.descripcion}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Áreas de Gestión Interna */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-[#1A519E] mb-4">Áreas de Gestión Interna</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Capacidades institucionales internas que nos permiten cumplir nuestra misión 
              con los mejores índices de calidad y eficiencia
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {areasGestion.map((area, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                       style={{backgroundColor: `${area.color}20`}}>
                    <area.icono className="w-6 h-6" style={{color: area.color}} />
                  </div>
                  <h4 className="text-lg font-bold text-[#1A519E]">{area.area}</h4>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{area.descripcion}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-[#1A519E] via-[#C62877] to-[#F9B233] rounded-2xl p-8 text-white">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Trabajemos Juntos por el Desarrollo Territorial</h3>
              <p className="text-white/90 mb-6 leading-relaxed">
                Nuestras áreas misionales y programas están diseñados para fortalecer 
                el tejido social y promover un desarrollo verdaderamente inclusivo y sostenible
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-[#1A519E] px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg">
                  Conocer Programas
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-[#1A519E] transition-all duration-300 hover:scale-105">
                  Unirse a la Red
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default AreasMisionales