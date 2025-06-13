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
      // Para imágenes reales, agregar:
      // backgroundImage: "/assets/images/hero/territorio-solidario-1.jpg"
      backgroundImage: null
    },
    {
      title: "Liderazgo Social Transformador",
      subtitle: "Formamos líderes para el cambio social y territorial",
      description: "Acompañamos procesos de formación en economía solidaria y desarrollo sustentable, fortaleciendo las capacidades de líderes y organizaciones sociales comprometidas con el cambio.",
      icon: Users,
      // backgroundImage: "/assets/images/hero/liderazgo-social-2.jpg"
      backgroundImage: null
    },
    {
      title: "Desarrollo Humano Integral",
      subtitle: "Promovemos el desarrollo integral de las comunidades",
      description: "Trabajamos por un modelo de desarrollo que ponga en el centro a las personas y sus territorios, respetando la diversidad cultural y promoviendo la participación ciudadana activa.",
      icon: Heart,
      // backgroundImage: "/assets/images/hero/desarrollo-humano-3.jpg"
      backgroundImage: null
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000) // Cambia cada 6 segundos para dar más tiempo de lectura
    return () => clearInterval(timer)
  }, [])

  const scrollToNext = () => {
    const element = document.getElementById('nosotros')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Logo circular tipo árbol (para el hero)
  const LogoArbol = ({ className = "w-24 h-24" }: { className?: string }) => (
    <div className={`${className} relative`}>
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <circle cx="50" cy="50" r="45" fill="none" stroke="#fff" strokeWidth="3"/>
        <g transform="translate(50,50)">
          <path d="M0,20 L0,-15" stroke="#fff" strokeWidth="3"/>
          <path d="M-20,-10 Q-15,-20 -5,-15 Q0,-25 5,-15 Q15,-20 20,-10 Q15,0 5,-5 Q0,5 -5,-5 Q-15,0 -20,-10" 
                fill="#be185d"/>
          <path d="M-15,-5 Q-10,-15 0,-10 Q10,-15 15,-5 Q10,5 0,0 Q-10,5 -15,-5" 
                fill="#f59e0b"/>
        </g>
      </svg>
    </div>
  )

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Fondo base con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700"></div>
      
      {/* Imagen de fondo opcional (para usar con imágenes reales) */}
      {slides[currentSlide].backgroundImage && (
        <div className="absolute inset-0">
          <Image
            src={slides[currentSlide].backgroundImage}
            alt={slides[currentSlide].title}
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-blue-900/60"></div>
        </div>
      )}
      
      {/* Elementos decorativos sutiles y profesionales */}
      <div className="absolute inset-0 opacity-20">
        {/* Círculos sutiles */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-yellow-400/20 rounded-full animate-bounce" style={{ animationDelay: '2s', animationDuration: '4s' }}></div>
        <div className="absolute bottom-32 left-20 w-20 h-20 bg-pink-600/20 rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-20 right-32 w-28 h-28 bg-white/10 rounded-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '5s' }}></div>
        
        {/* Formas geométricas sutiles */}
        <div className="absolute top-60 left-1/4 w-12 h-12 bg-yellow-400/20 transform rotate-45 animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute bottom-40 right-1/4 w-8 h-8 bg-pink-600/20 transform rotate-45 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 container-custom px-4 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Logo principal */}
          <div className="flex justify-center mb-8 animate-fade-in">
            {/* 
              Para usar el logo PNG real en lugar del SVG:
              
              <Image
                src="/assets/logos/logo-principal-blanco.png"
                alt="Territorios Solidarios"
                width={96}
                height={96}
                className="drop-shadow-lg"
                priority
              />
            */}
          </div>

          {/* Contenido del slide actual */}
          <div className="mb-8 transition-all duration-1000 ease-in-out"> 
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight drop-shadow-lg">
              {slides[currentSlide].title}
            </h1>
            
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-blue-200 mb-6 font-light">
              {slides[currentSlide].subtitle}
            </h2>
            
            <p className="text-lg sm:text-xl text-blue-100 max-w-4xl mx-auto mb-8 leading-relaxed">
              {slides[currentSlide].description}
            </p>
          </div>

          {/* Botones de acción */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button 
              onClick={() => scrollToNext()}
              className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-300 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center gap-2"
            >
              Conoce Nuestra Propuesta
              <ArrowRight size={20} />
            </button>
            
            <button 
              onClick={() => document.getElementById('formar-parte')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transform hover:scale-105 transition-all duration-300 backdrop-blur-sm bg-white/10"
            >
              Únete a Nosotros
            </button>
          </div>

          {/* Indicadores de slides mejorados */}
          <div className="flex justify-center space-x-3 mb-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`transition-all duration-500 rounded-full ${
                  index === currentSlide 
                    ? 'bg-yellow-400 w-10 h-3 shadow-lg' 
                    : 'bg-white/50 w-3 h-3 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Flecha para scroll mejorada */}
        <button 
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-white hover:text-yellow-400 transition-colors duration-300 group"
        >
          <div className="flex flex-col items-center">
            <span className="text-sm text-blue-200 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Conoce más
            </span>
            <ChevronDown size={32} />
          </div>
        </button>
      </div>

      {/* Wave decoration mejorada */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 fill-white opacity-90">
          <path d="M0,60 C400,20 800,100 1200,60 L1200,120 L0,120 Z"></path>
        </svg>
      </div>
    </section>
  )
}

export default Hero