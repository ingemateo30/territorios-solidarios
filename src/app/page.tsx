'use client'


import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Nosotros from '@/components/sections/Nosotros'
import PropuestaTerritorial from '@/components/sections/PropuestaTerritorial'
import AntecedentesHistoricos from '@/components/sections/AntecedentesHistoricos'
import AreasMisionales from '@/components/sections/AreasMisionales'
import VinculacionJunta from '@/components/sections/VinculacionJunta'
import { FloatingWhatsApp } from "react-floating-whatsapp"
import Footer from '@/components/Footer'
import Boton from '@/components/sections/botonsubir'

import {
  Briefcase,
  Wrench,
  Map,
  Newspaper,
  Globe,
  ArrowRight,
  Heart,
  Target,
  Sparkles
} from 'lucide-react'

// Componente para animaciones de entrada
const FadeInSection = ({ children, delay = 0 }: { children: React.ReactNode, delay: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {children}
    </motion.div>
  )
}

interface Seccion {
  color: string;
  icon: React.ReactElement; // Add this type annotation
  title: string;
  description: string;
}

const ServiceCard = ({ seccion, index }: { seccion: Seccion, index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.05,
        rotateY: 5,
        transition: { duration: 0.3 }
      }}
      className="card group hover:shadow-2xl hover:shadow-blue-100 relative overflow-hidden"
    >
      {/* Efecto de brillo que se mueve */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

      <div className={`w-16 h-16 bg-gradient-to-r ${seccion.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
        {seccion.icon}
      </div>

      <h3 className="text-xl font-bold text-blue-900 mb-4 group-hover:text-blue-700 transition-colors">
        {seccion.title}
      </h3>

      <p className="text-gray-600 mb-6 group-hover:text-gray-700 transition-colors">
        {seccion.description}
      </p>

      <div className="flex items-center text-orange-500 font-medium group-hover:text-orange-600 transition-colors">
        <span>Próximamente</span>
        <div className="ml-2 w-2 h-2 bg-orange-500 rounded-full animate-pulse group-hover:animate-bounce" />
      </div>
    </motion.div>
  )
}

// Componente para estadísticas animadas

export default function Home() {
  //const { scrollYProgress } = useScroll()
  //const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8])
  //const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95])

  return (
    <main className="min-h-screen overflow-x-hidden">
     
        <Header />
      

      {/* Hero Section mejorado */}
      <FadeInSection delay={0}>
        <Hero />
      </FadeInSection>

     

      {/* Secciones principales con transiciones */}
      <FadeInSection delay={0.1}>
        <Nosotros />
      </FadeInSection>

      <FadeInSection delay={0.2}>
        <AntecedentesHistoricos />
      </FadeInSection>

      <FadeInSection delay={0.3}>
        <AreasMisionales />
      </FadeInSection>

      <FadeInSection delay={0.4}>
        <PropuestaTerritorial />
      </FadeInSection>

      <FadeInSection delay={0.5}>
        <VinculacionJunta />
      </FadeInSection>

      {/* Sección de servicios futuros mejorada */}
      <FadeInSection delay={0.6}>
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
          {/* Elementos decorativos */}
          <div className="absolute top-10 right-10 w-20 h-20 bg-orange-200 rounded-full opacity-50 animate-bounce" style={{ animationDelay: '0.5s' }} />
          <div className="absolute bottom-10 left-10 w-16 h-16 bg-blue-200 rounded-full opacity-50 animate-bounce" style={{ animationDelay: '1.5s' }} />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 bg-orange-100 px-4 py-2 rounded-full mb-6">
                <Sparkles className="w-5 h-5 text-orange-600" />
                <span className="text-orange-600 font-medium">Próximamente</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-6">
                Nuevas Herramientas Digitales
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Estamos desarrollando una plataforma integral que revolucionará la forma en que las organizaciones solidarias se conectan y crecen juntas
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {[
                {
                  title: "Portafolio de Servicios",
                  description: "Acompañamiento organizacional, liderazgo y cursos de economía solidaria con metodologías innovadoras",
                  icon: <Briefcase />,
                  color: "from-blue-500 to-blue-700"
                },
                {
                  title: "Caja de Herramientas Digital",
                  description: "Recursos interactivos, documentos colaborativos, experiencias inspiradoras y contenido multimedia",
                  icon: <Wrench />,
                  color: "from-orange-500 to-red-500"
                },
                {
                  title: "Mapeo Territorial Inteligente",
                  description: "Plataforma de georreferenciación avanzada con análisis de datos y visualizaciones dinámicas",
                  icon: <Map />,
                  color: "from-green-500 to-emerald-600"
                },
                {
                  title: "Boletín Interactivo",
                  description: "Comunicación multimedia con noticias, podcasts y contenido personalizado para cada territorio",
                  icon: <Newspaper />,
                  color: "from-purple-500 to-violet-600"
                },
                {
                  title: "Red de Colaboración",
                  description: "Portal de conexión entre organizaciones con herramientas de trabajo colaborativo",
                  icon: <Globe />,
                  color: "from-pink-500 to-rose-600"
                },
                {
                  title: "Actualidad Solidaria",
                  description: "Hub de noticias y tendencias globales en economía solidaria con análisis experto",
                  icon: <Heart />,
                  color: "from-indigo-500 to-blue-600"
                }
              ].map((seccion, index) => (
                <ServiceCard key={index} seccion={seccion} index={index} />
              ))}
            </div>

            {/* Call to Action inspirador */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 rounded-3xl p-12 text-center text-white relative overflow-hidden"
            >
              {/* Efectos de fondo */}
             <div style={{ backgroundImage: `url("data:image/svg+xml,<svg width="60" height="60" viewBox="0 0 60 60" xmlns="[http://www.w3.org/2000/svg"><g](http://www.w3.org/2000/svg"><g) fill="none" fill-rule="evenodd"><g fill="#ffffff" fill-opacity="0.1"><path d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6zM36 54v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM6 54v-4H4v4H0v2h4v4h2v-4h4v-2H6z"/></g></g></g></svg>")` }}
                className="absolute inset-0 opacity-20 blur-xl" />

              <div className="relative z-10">
                <Target className="w-16 h-16 mx-auto mb-6 text-orange-400" />
                <h3 className="text-4xl font-bold mb-6">¿Listo para el Cambio?</h3>
                <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                  Únete a nuestra comunidad y sé parte de la transformación que nuestros territorios necesitan. Juntos construimos un futuro más solidario y sustentable.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-orange-400 to-orange-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-3"
                >
                  Conocer Más
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </FadeInSection>

      {/* Footer */}
      <FadeInSection delay={0.7}>
        <Footer />
      </FadeInSection>

      {/* Elementos flotantes */}
      <div className="fixed bottom-5 right-5 flex flex-col space-y-3 z-50">
        <FloatingWhatsApp
          phoneNumber="+573246723624"
          accountName="Territorios Solidarios"
          avatar="/3.png"
          darkMode={true}
          statusMessage="Normalmente responde en 1 hora"
          chatMessage="¡Hola! ¿En qué podemos ayudarte hoy?"
          placeholder="Escribe tu mensaje..."
          notification={true}
          chatboxHeight={340}
        />
      </div>

      <Boton />
    </main>
  )
}