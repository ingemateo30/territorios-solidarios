'use client'

import { useState } from 'react'
import { Users, Target, Lightbulb, Play, Heart } from 'lucide-react'
import Image from 'next/image'

const Nosotros = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  const handleVideoPlay = () => {
    setIsVideoPlaying(true)
  }

  const principiosValues = [
    {
      icon: Heart,
      title: "Solidaridad",
      description: "Trabajamos unidos por el bienestar común de nuestras comunidades territoriales."
    },
    {
      icon: Target,
      title: "Participación",
      description: "Promovemos la participación activa y democrática en todos nuestros procesos."
    },
    {
      icon: Lightbulb,
      title: "Sostenibilidad",
      description: "Desarrollamos iniciativas que respetan el medio ambiente y son económicamente viables."
    },
    {
      icon: Users,
      title: "Inclusión",
      description: "Garantizamos espacios de participación para todos los actores territoriales."
    }
  ]

  return (
    <section id="nosotros" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header principal */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1A519E] mb-6">
            Quiénes Somos
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Somos una <strong>Asociación Promotora de Desarrollo Territorial Solidario</strong> que trabaja
            en las provincias del sur de Santander, Colombia, fortaleciendo organizaciones sociales
            y promoviendo el liderazgo comunitario para la transformación territorial.
          </p>
        </div>

        {/* Video institucional y descripción */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20 items-center">

          {/* Video institucional */}
          <div className="relative">
            <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl relative aspect-video">
              {!isVideoPlaying ? (
                // Thumbnail del video con botón de play
                <div className="relative w-full h-full bg-gradient-to-br from-[#1A519E] to-[#0f2557] flex items-center justify-center">
                  {/* Fondo oscuro semitransparente */}
                  <div className="absolute inset-0">
                    <Image
                      src="/4.png"
                      alt="Video institucional Territorios Solidarios"
                      className="w-full h-full object-cover opacity-70"
                      width={640}
                      height={360}
                    />
                    <div className="absolute inset-0 bg-black/20" />
                  </div>

                  {/* Botón centrado */}
                  <button
                    onClick={handleVideoPlay}
                    className="relative z-10 w-20 h-20 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-all duration-300 hover:scale-110 shadow-xl"
                    aria-label="Reproducir video institucional"
                  >
                    <Play className="w-8 h-8 text-[#1A519E] ml-1" />
                  </button>

                  {/* Texto inferior */}
                  <div className="absolute bottom-4 left-4 right-4 text-white z-10">
                    <h3 className="text-lg font-bold mb-1">Video Institucional</h3>
                    <p className="text-sm opacity-90">Conoce nuestra historia y compromiso territorial</p>
                  </div>
                </div>

              ) : (
                // Video embed (reemplazar con tu video real)
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1"
                  title="Video Institucional Territorios Solidarios"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
            </div>
            <p className="text-sm text-gray-500 mt-3 text-center">
              Duración: 2:00 min | Producido en 2025
            </p>
          </div>

          {/* Descripción institucional */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-[#1A519E] mb-4 flex items-center gap-3">
                Nuestra Historia
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Fundados en <strong>2019</strong>, nacimos de la necesidad de articular y fortalecer
                las organizaciones sociales del sur de Santander. Desde entonces, hemos acompañado
                procesos de desarrollo territorial que priorizan la economía solidaria y la
                participación comunitaria.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Trabajamos en municipios como <strong>Socorro, San Gil, Barichara, Villanueva,
                  Curití y Pinchote</strong>, promoviendo modelos de desarrollo que respetan la
                identidad cultural y los recursos naturales de nuestros territorios.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#1A519E] mb-4 flex items-center gap-3">
                Nuestro Alcance
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-[#F9B233]">
                  <div className="text-2xl font-bold text-[#1A519E]">8</div>
                  <div className="text-sm text-gray-600">Municipios</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-[#C62877]">
                  <div className="text-2xl font-bold text-[#1A519E]">45+</div>
                  <div className="text-sm text-gray-600">Organizaciones</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-[#F9B233]">
                  <div className="text-2xl font-bold text-[#1A519E]">180+</div>
                  <div className="text-sm text-gray-600">Líderes Formados</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-[#C62877]">
                  <div className="text-2xl font-bold text-[#1A519E]">5</div>
                  <div className="text-sm text-gray-600">Años Experiencia</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Misión y Visión */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <div className="flex items-center gap-4 mb-6">

              <h3 className="text-2xl font-bold text-[#1A519E]">Misión</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Promover el desarrollo territorial solidario a través del fortalecimiento organizacional,
              la formación de líderes y el acompañamiento a procesos comunitarios que contribuyan
              a la transformación social y económica del sur de Santander.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <div className="flex items-center gap-4 mb-6">

              <h3 className="text-2xl font-bold text-[#1A519E]">Visión</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Ser reconocidos como la organización líder en desarrollo territorial solidario
              del sur de Santander, siendo referente en procesos de fortalecimiento organizacional
              y promoción de la economía solidaria a nivel regional.
            </p>
          </div>
        </div>

        {/* Principios y Valores */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-[#1A519E] mb-4">Nuestros Principios</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Los valores que guían nuestro trabajo y definen nuestra forma de relacionarnos
              con las comunidades y organizaciones territoriales.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {principiosValues.map((principio, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 group">
                <div className="w-12 h-12 bg-gradient-to-br from-[#C62877] to-[#a31e5a] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <principio.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-bold text-[#1A519E] mb-3">{principio.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{principio.description}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#1A519E] to-[#0f2557] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">¿Quieres ser parte del cambio?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Únete a nuestra red de organizaciones y líderes comprometidos con el desarrollo
              territorial solidario del sur de Santander.
            </p>
            <button className="bg-[#F9B233] text-[#1A519E] px-8 py-3 rounded-lg font-bold hover:bg-[#e1a000] transition-all duration-300 hover:scale-105 shadow-lg">
              Formar Parte
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Nosotros