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
import PersonasFundadoras from '@/components/sections/fundadores'


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
        <PersonasFundadoras />
      </FadeInSection>

      <FadeInSection delay={0.3}>
        <AntecedentesHistoricos />
      </FadeInSection>

      <FadeInSection delay={0.4}>
        <AreasMisionales />
      </FadeInSection>

      <FadeInSection delay={0.5}>
        <PropuestaTerritorial />
      </FadeInSection>

      <FadeInSection delay={0.6}>
        <VinculacionJunta />
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