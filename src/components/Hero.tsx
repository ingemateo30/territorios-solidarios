'use client'

import { useState, useEffect } from 'react'
import { ChevronDown, Heart, Users, MapPin, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "Fortaleciendo Territorios",
      subtitle: "Construyendo desarrollo solidario en las provincias del sur de Santander",
      description: "Somos una asociación comprometida con el fortalecimiento organizacional y el liderazgo territorial solidario, trabajando junto a las comunidades para construir un futuro más justo y equitativo.",
      icon: MapPin,
      backgroundImage: "/T1.jpeg" // Imagen real del territorio
    },
    {
      title: "Liderazgo Social Transformador",
      subtitle: "Formamos líderes para el cambio social y territorial",
      description: "Acompañamos procesos de formación en economía solidaria y desarrollo sustentable, fortaleciendo las capacidades de líderes y organizaciones sociales comprometidas con el cambio.",
      icon: Users,
      backgroundImage: "/T2.jpeg" // Imagen de formación/talleres
    },
    {
      title: "Desarrollo Humano Integral",
      subtitle: "Promovemos el desarrollo integral de las comunidades",
      description: "Trabajamos por un modelo de desarrollo que ponga en el centro a las personas y sus territorios, respetando la diversidad cultural y promoviendo la participación ciudadana activa.",
      icon: Heart,
      backgroundImage: "/T4.jpeg" // Imagen de comunidad trabajando
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const scrollToNext = () => {
    const element = document.getElementById('nosotros')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-56 lg:pt-52">
      {/* Fondo base para cuando no hay imagen o como fallback */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1A519E] via-[#1A519E] to-[#0f2557]"></div>
      
      {/* Imagen de fondo */}
      {slides[currentSlide].backgroundImage && (
        <div className="absolute inset-0">
          <Image
            src={slides[currentSlide].backgroundImage}
            alt={slides[currentSlide].title}
            fill
            className="object-cover object-center"
            priority
          />
          {/* Overlay más sutil y natural */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/20"></div>
          <div className="absolute inset-0 bg-[#1A519E]/25"></div>
        </div>
      )}
      
      {/* Elementos decorativos más sutiles y profesionales */}
      <div className="absolute inset-0 opacity-15">
        {/* Círculos con colores del brand */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-[#F9B233]/20 rounded-full animate-bounce" style={{ animationDelay: '2s', animationDuration: '4s' }}></div>
        <div className="absolute bottom-32 left-20 w-20 h-20 bg-[#C62877]/20 rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-20 right-32 w-28 h-28 bg-white/10 rounded-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '5s' }}></div>
        
        {/* Formas geométricas sutiles */}
        <div className="absolute top-60 left-1/4 w-12 h-12 bg-[#F9B233]/20 transform rotate-45 animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute bottom-40 right-1/4 w-8 h-8 bg-[#C62877]/20 transform rotate-45 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 container mx-auto max-w-7xl px-4 text-center">
        <div className="max-w-5xl mx-auto">
        
          {/* Contenido del slide actual con mejor espaciado */}
          <div className="mb-8 transition-all duration-1000 ease-in-out"> 
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
              {slides[currentSlide].title}
            </h1>
            
            <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-blue-200 mb-8 font-light leading-relaxed">
              {slides[currentSlide].subtitle}
            </h2>
            
            <p className="text-base sm:text-lg lg:text-xl text-blue-100 max-w-4xl mx-auto mb-10 leading-relaxed">
              {slides[currentSlide].description}
            </p>
          </div>

          {/* Botones de acción mejorados */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button 
              onClick={() => scrollToNext()}
              className="bg-[#F9B233] text-[#1A519E] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#F9B233]/90 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center gap-2 min-w-[260px] justify-center"
            >
              Conoce Nuestra Propuesta
              <ArrowRight size={20} />
            </button>
            
            <button 
              onClick={() => document.getElementById('formar-parte')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[#1A519E] transform hover:scale-105 transition-all duration-300 backdrop-blur-sm bg-white/10 min-w-[200px]"
            >
              Únete a Nosotros
            </button>
          </div>

          {/* Indicadores de slides mejorados */}
          <div className="flex justify-center space-x-3 mb-24">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`transition-all duration-500 rounded-full ${
                  index === currentSlide 
                    ? 'bg-[#F9B233] w-10 h-3 shadow-lg' 
                    : 'bg-white/50 w-3 h-3 hover:bg-white/70'
                }`}
                aria-label={`Ir al slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Flecha para scroll más pequeña y bien separada */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <button 
            onClick={scrollToNext}
            className="flex flex-col items-center text-white hover:text-[#F9B233] transition-all duration-300 group animate-bounce"
            aria-label="Desplazarse a la siguiente sección"
          >
            <span className="text-xs text-blue-100 mb-2 opacity-80 group-hover:opacity-100 transition-opacity duration-300 font-medium">
              Conoce más
            </span>
            <div className="w-8 h-8 border-2 border-white/50 rounded-full flex items-center justify-center group-hover:border-[#F9B233] group-hover:bg-white/10 transition-all duration-300">
              <ChevronDown size={16} />
            </div>
          </button>
        </div>
      </div>

      {/* Wave decoration con mejor integración */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 fill-white">
          <path d="M0,60 C400,20 800,100 1200,60 L1200,120 L0,120 Z"></path>
        </svg>
      </div>
    </section>
  )
}

export default Hero