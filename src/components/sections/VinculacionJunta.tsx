'use client'

import { useState, useEffect } from 'react'
import { 
  UserPlus, 
  Building2, 
  User, 
  CheckCircle, 
  DollarSign, 
  GraduationCap,
  Mail,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'

const VinculacionJunta = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const requisitosPersonasJuridicas = [
    {
      icono: CheckCircle,
      titulo: 'Autorización Directiva',
      descripcion: 'Adjuntar autorización escrita del consejo o la junta directiva de la entidad respectiva'
    },
    {
      icono: DollarSign,
      titulo: 'Aporte Económico',
      descripcion: 'Aportar el valor de un (1) salario mínimo legal mensual vigente al momento de suscribir el Acta de fundación o de ser aceptado por la Junta Directiva'
    }
  ]

  const requisitosPersonasNaturales = [
    {
      icono: User,
      titulo: 'Mayor de Edad',
      descripcion: 'Ser mayor de dieciocho (18) años y no estar afectado de incapacidad legal'
    },
    {
      icono: CheckCircle,
      titulo: 'Suscripción del Acta',
      descripcion: 'Suscribir el acta de constitución o ser admitido con posterioridad por la Junta Directiva'
    },
    {
      icono: Building2,
      titulo: 'Domicilio en el Territorio',
      descripcion: 'Estar domiciliado dentro del ámbito de operaciones de la institución'
    },
    {
      icono: DollarSign,
      titulo: 'Aporte del 10%',
      descripcion: 'Aportar un 10% de un (1) salario mínimo mensual del año vigente, suma no devolutiva destinada a gastos de organización y funcionamiento'
    },
    {
      icono: GraduationCap,
      titulo: 'Educación Cooperativa',
      descripcion: 'Acreditar haber recibido educación cooperativa o de economía solidaria, con una intensidad mínima de 20 horas'
    }
  ]

  const juntaDirectiva = [
    {
      nombre: 'Robinson Poveda Rivera',
      cargo: 'Representante SEPAS',
      titulo: 'Pbro.',
      organizacion: 'SEPAS',
      organizacionCompleta: 'Secretariado Diocesano de Pastoral Social de la Diócesis de Socorro y San Gil',
      color: '#1A519E',
      gradientFrom: '#1A519E',
      gradientTo: '#0f2557',
      logoUrl: '/sepas.png',
      descripcion: 'Organización católica comprometida con el desarrollo social y la pastoral territorial en el sur de Santander.',
      mision: 'Promover el desarrollo humano integral desde la perspectiva de la Doctrina Social de la Iglesia.'
    },
    {
      nombre: 'María Alejandra Arrieta Quintero',
      cargo: 'Representante FENALCO',
      organizacion: 'FENALCO',
      organizacionCompleta: 'Federación Nacional de Comerciantes Capítulo San Gil',
      color: '#F9B233',
      gradientFrom: '#F9B233',
      gradientTo: '#e1a000',
      logoUrl: '/fenalco.png',
      descripcion: 'Representante del sector comercial y empresarial de las provincias del sur de Santander.',
      mision: 'Fortalecer el sector comercial y empresarial promoviendo el desarrollo económico territorial.'
    },
    {
      nombre: 'Ángel Yesid Amado Rodríguez',
      cargo: 'Representante COOPERAMOS',
      organizacion: 'COOPERAMOS',
      organizacionCompleta: 'Cooperamos Fundación',
      color: '#C62877',
      gradientFrom: '#C62877',
      gradientTo: '#a31e5a',
      logoUrl: '/cooperamos.png',
      descripcion: 'Fundación especializada en fortalecimiento del sector cooperativo y la economía solidaria.',
      mision: 'Impulsar el cooperativismo como modelo de desarrollo económico y social sostenible.'
    },
    {
      nombre: 'Sara Marcela Alhucema Díaz',
      cargo: 'Representante EL COMÚN',
      organizacion: 'EL COMÚN',
      organizacionCompleta: 'Asociación de Organizaciones Campesinas y Populares de Colombia',
      color: '#00A650',
      gradientFrom: '#00A650',
      gradientTo: '#008f44',
      logoUrl: '/comun.png',
      descripcion: 'Asociación que agrupa organizaciones campesinas y populares comprometidas con la transformación social.',
      mision: 'Defender los derechos campesinos y promover la organización popular para el cambio social.'
    },
    {
      nombre: 'Samuel González Parra',
      cargo: 'Miembro de Junta',
      titulo: 'Pbro.',
      organizacion: 'Pastoral Social',
      organizacionCompleta: 'Pastoral Social Diocesana',
      color: '#4472C4',
      gradientFrom: '#4472C4',
      gradientTo: '#2c5aa0',
      logoUrl: '/sepas.png',
      descripcion: 'Pastoral Social comprometida con el desarrollo territorial desde la perspectiva cristiana.',
      mision: 'Acompañar procesos de desarrollo humano integral en los territorios.'
    }
  ]

  const director = {
    nombre: 'Miguel Arturo Fajardo Rojas',
    cargo: 'Director Ejecutivo',
    organizacion: 'Territorios Solidarios',
    descripcion: 'Responsable de la coordinación ejecutiva y operativa de todos los programas y proyectos de la asociación'
  }

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % juntaDirectiva.length)
    }, 6000) // Cambia cada 6 segundos

    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % juntaDirectiva.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + juntaDirectiva.length) % juntaDirectiva.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section id="vinculacion" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header principal */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1A519E] mb-6">
            Únete a Territorios Solidarios
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Forma parte de nuestra red de organizaciones y personas comprometidas 
            con el desarrollo territorial solidario del sur de Santander
          </p>
        </div>

        {/* Requisitos para vincularse */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-[#1A519E] mb-4">Requisitos para Asociarse</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Conoce los requisitos necesarios para formar parte de nuestra asociación, 
              ya seas una persona natural o jurídica comprometida con el desarrollo territorial
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Personas Jurídicas */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#1A519E] to-[#0f2557] rounded-xl flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-[#1A519E]">Personas Jurídicas</h4>
                  <p className="text-gray-500">Organizaciones e Instituciones</p>
                </div>
              </div>
              
              <div className="space-y-6">
                {requisitosPersonasJuridicas.map((requisito, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#1A519E]/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <requisito.icono className="w-5 h-5 text-[#1A519E]" />
                    </div>
                    <div>
                      <h5 className="font-bold text-[#1A519E] mb-1">{requisito.titulo}</h5>
                      <p className="text-gray-600 text-sm leading-relaxed">{requisito.descripcion}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-[#1A519E]/5 rounded-lg">
                <p className="text-sm text-[#1A519E] font-medium">
                  <strong>Dirigido a:</strong> Cooperativas, fundaciones, corporaciones, 
                  entidades públicas y organizaciones del sector solidario
                </p>
              </div>
            </div>

            {/* Personas Naturales */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#C62877] to-[#a31e5a] rounded-xl flex items-center justify-center">
                  <User className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-[#1A519E]">Personas Naturales</h4>
                  <p className="text-gray-500">Líderes y Ciudadanos</p>
                </div>
              </div>
              
              <div className="space-y-6">
                {requisitosPersonasNaturales.map((requisito, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#C62877]/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <requisito.icono className="w-5 h-5 text-[#C62877]" />
                    </div>
                    <div>
                      <h5 className="font-bold text-[#1A519E] mb-1">{requisito.titulo}</h5>
                      <p className="text-gray-600 text-sm leading-relaxed">{requisito.descripcion}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-[#C62877]/5 rounded-lg">
                <p className="text-sm text-[#C62877] font-medium">
                  <strong>Dirigido a:</strong> Líderes sociales, profesionales, estudiantes 
                  y ciudadanos comprometidos con el desarrollo territorial
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Junta Directiva - Redesigned */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-[#1A519E] mb-4">Junta Directiva</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Nuestro órgano de gobierno está conformado por representantes de organizaciones 
              aliadas comprometidas con el desarrollo territorial solidario
            </p>
          </div>

          {/* Main Featured Card */}
          <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden mb-8">
            <div 
              className="absolute inset-0 opacity-5"
              style={{
                background: `linear-gradient(135deg, ${juntaDirectiva[currentSlide].gradientFrom}, ${juntaDirectiva[currentSlide].gradientTo})`
              }}
            ></div>
            
            <div className="relative p-12">
              <div className="grid lg:grid-cols-3 gap-8 items-center">
                
                {/* Logo Prominente */}
                <div className="text-center">
                  <div className="bg-white rounded-2xl p-8 shadow-xl border-4 border-gray-100 hover:border-gray-200 transition-all duration-300">
                    <img 
                      src={juntaDirectiva[currentSlide].logoUrl}
                      alt={`Logo ${juntaDirectiva[currentSlide].organizacion}`}
                      className="w-full h-24 object-contain mb-4"
                    />
                    <h4 className="text-lg font-bold text-[#1A519E] mb-2">
                      {juntaDirectiva[currentSlide].organizacion}
                    </h4>
                    <p className="text-xs text-gray-500 leading-tight">
                      {juntaDirectiva[currentSlide].organizacionCompleta}
                    </p>
                  </div>
                </div>

                {/* Información de la Organización */}
                <div className="lg:col-span-2">
                  <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 border border-gray-100">
                    <div className="mb-6">
                      <h5 className="text-2xl font-bold text-[#1A519E] mb-4">
                        Sobre la Organización
                      </h5>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {juntaDirectiva[currentSlide].descripcion}
                      </p>
                      <div className="bg-gradient-to-r from-gray-50 to-white p-4 rounded-lg border-l-4" 
                           style={{borderColor: juntaDirectiva[currentSlide].color}}>
                        <p className="text-sm text-gray-700 italic">
                          <strong>Misión:</strong> {juntaDirectiva[currentSlide].mision}
                        </p>
                      </div>
                    </div>

                    {/* Representante */}
                    <div className="border-t border-gray-200 pt-6">
                      <h6 className="text-lg font-bold text-[#1A519E] mb-3">Representante en Junta</h6>
                      <div className="flex items-center gap-4">
                       
                        <div>
                          <p className="text-xl font-bold text-gray-800">
                            {juntaDirectiva[currentSlide].titulo && 
                              <span className="text-[#C62877]">{juntaDirectiva[currentSlide].titulo} </span>
                            }
                            {juntaDirectiva[currentSlide].nombre}
                          </p>
                          <p className="text-sm font-medium" style={{color: juntaDirectiva[currentSlide].color}}>
                            {juntaDirectiva[currentSlide].cargo}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-6 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-white hover:bg-gray-50 rounded-full shadow-xl flex items-center justify-center text-[#1A519E] hover:scale-110 transition-all duration-300 border border-gray-200"
              >
                <ChevronLeft className="w-7 h-7" />
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-6 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-white hover:bg-gray-50 rounded-full shadow-xl flex items-center justify-center text-[#1A519E] hover:scale-110 transition-all duration-300 border border-gray-200"
              >
                <ChevronRight className="w-7 h-7" />
              </button>
            </div>
          </div>

          {/* Organization Cards Navigation */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {juntaDirectiva.map((miembro, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`group p-4 rounded-2xl border-2 transition-all duration-300 hover:scale-105 ${
                  index === currentSlide
                    ? 'border-[#1A519E] bg-[#1A519E]/5 shadow-lg'
                    : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-md'
                }`}
              >
                <div className="text-center">
                  <img 
                    src={miembro.logoUrl}
                    alt={`Logo ${miembro.organizacion}`}
                    className="w-full h-12 object-contain mb-3"
                  />
                  <p className={`text-sm font-bold transition-colors ${
                    index === currentSlide ? 'text-[#1A519E]' : 'text-gray-600 group-hover:text-[#1A519E]'
                  }`}>
                    {miembro.organizacion}
                  </p>
                  <p className="text-xs text-gray-500 mt-1 truncate">
                    {miembro.nombre}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Progress Indicator */}
          <div className="mt-6 flex justify-center space-x-2">
            {juntaDirectiva.map((_, index) => (
              <div
                key={index}
                className={`h-1 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'w-12 bg-[#1A519E]' 
                    : 'w-4 bg-gray-300'
                }`}
              />
            ))}
          </div>

          {/* Director */}
          <div className="mt-12 bg-gradient-to-r from-[#1A519E] to-[#0f2557] rounded-2xl p-8 text-white">
            <div className="text-center">
              
              
              <h5 className="text-3xl font-bold text-[#F9B233] mb-3">{director.nombre}</h5>
              <p className="text-xl text-blue-100 mb-4">{director.cargo}</p>
              <p className="text-blue-200 max-w-2xl mx-auto leading-relaxed">
                {director.descripcion}
              </p>
            </div>
          </div>
        </div>

        {/* Contacto y Call to Action */}
        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Información de contacto */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[#F9B233] to-[#e1a000] rounded-xl flex items-center justify-center">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-[#1A519E]">Más Información</h4>
                <p className="text-gray-500">Contáctanos para conocer más</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#F9B233]" />
                <a 
                  href="mailto:territorios.solidarios25@gmail.com" 
                  className="text-[#1A519E] hover:text-[#C62877] transition-colors font-medium"
                >
                  territorios.solidarios25@gmail.com
                </a>
              </div>
              
              <div className="mt-6 p-4 bg-[#F9B233]/10 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong className="text-[#1A519E]">Proceso de vinculación:</strong><br/>
                  Envíanos tu información al correo electrónico y te contactaremos 
                  para iniciar el proceso de asociación.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-br from-[#C62877] to-[#a31e5a] rounded-2xl p-8 text-white">
            <div className="text-center">
              <UserPlus className="w-16 h-16 mx-auto mb-6 text-white" />
              <h4 className="text-2xl font-bold mb-4">¡Sé Parte del Cambio!</h4>
              <p className="text-pink-100 mb-6 leading-relaxed">
                Únete a nuestra red de organizaciones y personas comprometidas 
                con la transformación territorial del sur de Santander
              </p>
              
              <div className="space-y-3">
                <button className="w-full bg-white text-[#C62877] px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg">
                  Iniciar Proceso de Vinculación
                </button>
                <button className="w-full border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-[#C62877] transition-all duration-300">
                  Descargar Información
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default VinculacionJunta