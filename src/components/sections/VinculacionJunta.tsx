'use client'

import { 
  UserPlus, 
  Building2, 
  User, 
  CheckCircle, 
  DollarSign, 
  GraduationCap,
  Mail,
  Users,
  Crown,
  Building
} from 'lucide-react'

const VinculacionJunta = () => {
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
      icono: Crown,
      color: '#1A519E'
    },
    {
      nombre: 'María Alejandra Arrieta Quintero',
      cargo: 'Representante FENALCO',
      organizacion: 'FENALCO',
      icono: Building,
      color: '#F9B233'
    },
    {
      nombre: 'Ángel Yesid Amado Rodríguez',
      cargo: 'Representante COOPERAMOS',
      organizacion: 'COOPERAMOS',
      icono: Users,
      color: '#C62877'
    },
    {
      nombre: 'Sara Marcela Alhucema Díaz',
      cargo: 'Representante EL COMÚN',
      organizacion: 'EL COMÚN',
      icono: Building,
      color: '#1A519E'
    },
    {
      nombre: 'Samuel González Parra',
      cargo: 'Miembro de Junta',
      titulo: 'Pbro.',
      organizacion: 'Pastoral Social',
      icono: Crown,
      color: '#F9B233'
    }
  ]

  const director = {
    nombre: 'Miguel Arturo Fajardo Rojas',
    cargo: 'Director Ejecutivo',
    organizacion: 'Territorios Solidarios',
    descripcion: 'Responsable de la coordinación ejecutiva y operativa de todos los programas y proyectos de la asociación'
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

        {/* Junta Directiva */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-[#1A519E] mb-4">Junta Directiva</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Nuestro órgano de gobierno está conformado por representantes de organizaciones 
              aliadas comprometidas con el desarrollo territorial solidario
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {juntaDirectiva.map((miembro, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                       style={{backgroundColor: `${miembro.color}20`}}>
                    <miembro.icono className="w-6 h-6" style={{color: miembro.color}} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-[#1A519E] text-sm">{miembro.cargo}</h4>
                    <p className="text-xs text-gray-500">{miembro.organizacion}</p>
                  </div>
                </div>
                <div className="text-center">
                  <h5 className="text-lg font-bold text-gray-800 mb-1">
                    {miembro.titulo && <span className="text-[#C62877]">{miembro.titulo} </span>}
                    {miembro.nombre}
                  </h5>
                </div>
              </div>
            ))}
          </div>

          {/* Director */}
          <div className="bg-gradient-to-r from-[#1A519E] to-[#0f2557] rounded-2xl p-8 text-white">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#F9B233] rounded-full flex items-center justify-center mx-auto mb-6">
                <User className="w-10 h-10 text-[#1A519E]" />
              </div>
              <h4 className="text-2xl font-bold mb-2">Dirección Ejecutiva</h4>
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