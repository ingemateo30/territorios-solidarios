'use client'

import { useState } from 'react'
import { Target, Lightbulb, Play } from 'lucide-react'
import Image from 'next/image'

const Nosotros = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  const handleVideoPlay = () => {
    setIsVideoPlaying(true)
  }

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

        {/* Video institucional */}
        <div className="flex justify-center mb-20">
          <div className="relative max-w-2xl w-full">
            <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl relative aspect-video">
              {!isVideoPlaying ? (
                // Thumbnail del video con botón de play
                <div className="relative w-full h-full bg-gradient-to-br from-[#1A519E] to-[#0f2557] flex items-center justify-center">
                  {/* Fondo con imagen */}
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
                    className="relative z-10 w-20 h-20 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-all duration-300 hover:scale-110 shadow-xl group"
                    aria-label="Reproducir video institucional"
                  >
                    <Play className="w-8 h-8 text-[#1A519E] ml-1 group-hover:scale-110 transition-transform" />
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
              Duración: 2:30 min | Producido en 2025
            </p>
          </div>
        </div>

        {/* Misión y Visión */}
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#1A519E] to-[#0f2557] rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#1A519E]">Misión</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              TERRITORIOS SOLIDARIOS tiene la misión de coordinar liderazgos y promover procesos asociativos para el desarrollo sustentable y solidario de los territorios.

            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#C62877] to-[#a31e5a] rounded-lg flex items-center justify-center">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#1A519E]">Visión</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Ser la organización referente en desarrollo territorial solidario del sur de Santander,
              reconocida por su capacidad de articulación, innovación social y compromiso con
              la construcción de territorios más justos, prósperos y sostenibles.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Nosotros