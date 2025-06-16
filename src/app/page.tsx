'use client'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Nosotros from '@/components/sections/Nosotros'
import PropuestaTerritorial from '@/components/sections/PropuestaTerritorial'
import { FloatingWhatsApp } from "react-floating-whatsapp";
import Footer from '@/components/Footer'

import {
  Briefcase,
  Wrench,
  Map,
  Newspaper,
  Globe
} from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Nosotros />
      <PropuestaTerritorial />


      {/* Secciones pendientes con diseño mejorado */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">Próximas Secciones</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Estamos trabajando en estas secciones adicionales para completar nuestra plataforma digital
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Portafolio de Servicios",
                description: "Acompañamiento organizacional, liderazgo y cursos de economía solidaria",
                icon: Briefcase,
                color: "from-blue-500 to-blue-700"
              },
              {
                title: "Caja de Herramientas",
                description: "Documentos, experiencias inspiradoras, videos y podcasts",
                icon: Wrench,
                color: "from-orange-500 to-red-500"
              },
              {
                title: "Mapeo Organizacional",
                description: "Georreferenciación de organizaciones solidarias del sur de Santander",
                icon: Map,
                color: "from-green-500 to-emerald-600"
              },
              {
                title: "Boletín Informativo",
                description: "Noticias y actualizaciones de nuestros procesos territoriales",
                icon: Newspaper,
                color: "from-purple-500 to-violet-600"
              },
              {
                title: "Páginas de Interés",
                description: "Enlaces a portales web relevantes para el desarrollo territorial",
                icon: Globe,
                color: "from-pink-500 to-rose-600"
              },
              {
                title: "Actualidad Solidaria",
                description: "Noticias regionales, nacionales y globales de economía solidaria",
                icon: Newspaper,
                color: "from-indigo-500 to-blue-600"
              }
            ].map((seccion, index) => (
              <div key={index} className="card group hover:shadow-custom-hover">
                <div className={`w-16 h-16 bg-gradient-to-r ${seccion.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <seccion.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">{seccion.title}</h3>
                <p className="text-gray-600 mb-6">{seccion.description}</p>
                <div className="flex items-center text-orange-500 font-medium">
                  <span>Próximamente</span>
                  <div className="ml-2 w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <div className="fixed bottom-5 right-5 flex flex-col space-y-3 z-50">
        {/* Botón de WhatsApp */}
        <FloatingWhatsApp
          phoneNumber="+573246723624"
          accountName="Territorios Solidarios"
          avatar="/3.png"
          darkMode={true}
          statusMessage="Normalmente responde en 1 hora"
          chatMessage="¡Hola!, ¿en qué te podemos ayudar?"
          placeholder="Escribe un mensaje"
          notification={true}
          chatboxHeight={340}
        />
      </div>
    </main>
  )
}