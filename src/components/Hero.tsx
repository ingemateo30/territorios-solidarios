'use client'

import { useState, useEffect } from 'react'
import { ChevronDown, Heart, Users, MapPin } from 'lucide-react'
import React from 'react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "Fortaleciendo Territorios",
      subtitle: "Construyendo desarrollo solidario en las provincias del sur de Santander",
      description: "Somos una asociación comprometida con el fortalecimiento organizacional y el liderazgo territorial solidario.",
      icon: MapPin
    },
    {
      title: "Liderazgo Social",
      subtitle: "Formamos líderes para el cambio social y territorial",
      description: "Acompañamos procesos de formación en economía solidaria y desarrollo sustentable.",
      icon: Users
    },
    {
      title: "Desarrollo Humano",
      subtitle: "Promovemos el desarrollo integral de las comunidades",
      description: "Trabajamos por un modelo de desarrollo que ponga en el centro a las personas y sus territorios.",
      icon: Heart
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const scrollToNext = () => {
    const element = document.getElementById('nosotros')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Fondo con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-800 via-blue-700 to-blue-900"></div>
      
      {/* Elementos decorativos animados */}
      <div className="absolute inset-0">
        {/* Círculos flotantes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-400/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-pink-600/20 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-20 w-20 h-20 bg-red-600/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-32 w-28 h-28 bg-yellow-400/20 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
        
        {/* Formas geométricas */}
        <div className="absolute top-60 left-1/4 w-16 h-16 bg-pink-600/30 transform rotate-45 animate-spin" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-40 right-1/4 w-12 h-12 bg-yellow-400/30 transform rotate-45 animate-spin" style={{ animationDuration: '6s', animationDirection: 'reverse' }}></div>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="fade-in">
          {/* Logo principal */}
          <div className="flex justify-center mb-8">
            <div className="relative w-24 h-24">
              <div className="absolute inset-0 transform rotate-45">
                <div className="w-12 h-12 absolute top-0 left-6 bg-yellow-400 transform -rotate-45 border-3 border-white shadow-lg"></div>
                <div className="w-12 h-12 absolute top-4 right-0 bg-pink-600 transform -rotate-45 border-3 border-white shadow-lg"></div>
                <div className="w-12 h-12 absolute bottom-4 left-0 bg-pink-600 transform -rotate-45 border-3 border-white shadow-lg"></div>
                <div className="w-12 h-12 absolute bottom-0 right-6 bg-red-600 transform -rotate-45 border-3 border-white shadow-lg"></div>
                <div className="w-12 h-12 absolute top-6 left-12 bg-blue-600 transform -rotate-45 border-3 border-white shadow-lg"></div>
                <div className="w-12 h-12 absolute bottom-6 right-12 bg-blue-600 transform -rotate-45 border-3 border-white shadow-lg"></div>
                <div className="w-8 h-8 absolute top-8 left-2 bg-yellow-400 transform -rotate-45 border-2 border-white shadow-md"></div>
                <div className="w-8 h-8 absolute bottom-8 right-2 bg-pink-600 transform -rotate-45 border-2 border-white shadow-md"></div>
              </div>
            </div>
          </div>

          {/* Contenido del slide actual */}
          <div className="mb-8">
            <div className="flex justify-center mb-4">
              {React.createElement(slides[currentSlide].icon, { 
                size: 48, 
                className: "text-yellow-400 animate-pulse" 
              })}
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 slide-in-left">
              {slides[currentSlide].title}
            </h1>
            
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-blue-200 mb-6 slide-in-right">
              {slides[currentSlide].subtitle}
            </h2>
            
            <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto mb-8 fade-in">
              {slides[currentSlide].description}
            </p>
          </div>

          {/* Botones de acción */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button 
              onClick={() => scrollToNext()}
              className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-300 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Conoce Nuestra Propuesta
            </button>
            
            <button 
              onClick={() => document.getElementById('formar-parte')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transform hover:scale-105 transition-all duration-300"
            >
              Únete a Nosotros
            </button>
          </div>

          {/* Indicadores de slides */}
          <div className="flex justify-center space-x-2 mb-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-yellow-400 w-8' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Flecha para scroll */}
        <button 
          onClick={scrollToNext}
          className="animate-bounce text-white hover:text-yellow-400 transition-colors duration-300"
        >
          <ChevronDown size={32} />
        </button>
      </div>

      {/* Wave decoration */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 fill-white">
          <path d="M0,60 C400,20 800,100 1200,60 L1200,120 L0,120 Z"></path>
        </svg>
      </div>
    </section>
  )
}

export default Hero