'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('inicio')

  const navigationItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'nosotros', label: 'Nosotros' },
    { id: 'propuesta', label: 'Nuestra Propuesta' },
    { id: 'formar-parte', label: 'Ven a Formar Parte' },
    { id: 'portafolio', label: 'Portafolio de Servicios' },
    { id: 'herramientas', label: 'Caja de Herramientas' },
    { id: 'mapeo', label: 'Mapeo Organizacional' },
    { id: 'boletin', label: 'Boletín' },
    { id: 'actualidad', label: 'Actualidad' },
    { id: 'contacto', label: 'Contacto' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
      setIsMobileMenuOpen(false)
    }
  }

  // Componente del logo geométrico (fallback si no hay imagen PNG)
  const LogoGeometrico = ({ className = "w-12 h-12" }: { className?: string }) => (
    <div className={`${className} relative`}>
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <g transform="rotate(45 50 50)">
          <rect x="25" y="25" width="20" height="20" 
                fill="#f59e0b" 
                stroke="#0d4989" strokeWidth="2"/>
          <rect x="55" y="25" width="20" height="20" 
                fill="#be185d" 
                stroke="#0d4989" strokeWidth="2"/>
          <rect x="25" y="55" width="20" height="20" 
                fill="#be185d" 
                stroke="#0d4989" strokeWidth="2"/>
          <rect x="55" y="55" width="20" height="20" 
                fill="#f59e0b" 
                stroke="#0d4989" strokeWidth="2"/>
        </g>
      </svg>
    </div>
  )

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-lg py-2' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container-custom px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            {isScrolled ? (
              <Image 
                src="/3(1).png" 
                alt="Territorios Solidarios" 
                width={500} 
                height={500}
                className="transition-all duration-500"
                priority
              />
            ) : (
              <Image 
                src="/p.png" 
                alt="Territorios Solidarios" 
                width={500} 
                height={500}
                className="transition-all duration-500"
                priority
              />
            )}
          </div>

          {/* Navegación desktop */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  activeSection === item.id
                    ? isScrolled
                      ? 'text-white shadow-lg'
                      : 'bg-white/20 text-white backdrop-blur-sm'
                    : isScrolled
                      ? 'text-gray-700 hover:bg-blue-50'
                      : 'text-white hover:bg-white/10 hover:text-yellow-400'
                }`}
                style={{ 
                  backgroundColor: activeSection === item.id && isScrolled ? '#0d4989' : undefined,
                  color: activeSection === item.id && isScrolled ? '#ffffff' : undefined
                }}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Botón menú móvil */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-md transition-all duration-300 hover:scale-110 ${
              isScrolled 
                ? 'text-gray-700 hover:bg-blue-50' 
                : 'text-white hover:bg-white/10'
            }`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menú móvil */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 animate-fade-in">
            <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-xl p-4 border border-gray-200">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-[1.02] ${
                    activeSection === item.id
                      ? 'text-white shadow-md'
                      : 'text-gray-700 hover:bg-blue-50'
                  }`}
                  style={{ 
                    backgroundColor: activeSection === item.id ? '#0d4989' : undefined,
                    color: activeSection === item.id ? '#ffffff' : undefined
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header