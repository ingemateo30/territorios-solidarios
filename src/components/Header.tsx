'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('nosotros')

  const navigationItems = [
    { id: 'nosotros', label: 'Nosotros' },
    { id: 'propuesta', label: 'Nuestra Propuesta' },
    { id: 'formar-parte', label: 'Ven a Formar Parte' },
    { id: 'portafolio', label: 'Portafolio' },
    { id: 'herramientas', label: 'Caja de Herramientas' },
    { id: 'mapeo', label: 'Mapeo' },
    { id: 'boletin', label: 'Boletín' },
    { id: 'enlaces', label: 'Enlaces' },
    { id: 'actualidad', label: 'Actualidad' },
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

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-lg' 
          : 'bg-gradient-to-r from-blue-800 to-blue-700'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo y nombre */}
          <div className="flex items-center space-x-4">
            {/* Logo con diamantes */}
            <div className="relative w-12 h-12">
              <div className="absolute inset-0 transform rotate-45">
                <div className="w-6 h-6 absolute top-0 left-3 bg-yellow-400 transform -rotate-45 border-2 border-white"></div>
                <div className="w-6 h-6 absolute top-2 right-0 bg-pink-600 transform -rotate-45 border-2 border-white"></div>
                <div className="w-6 h-6 absolute bottom-2 left-0 bg-pink-600 transform -rotate-45 border-2 border-white"></div>
                <div className="w-6 h-6 absolute bottom-0 right-3 bg-red-600 transform -rotate-45 border-2 border-white"></div>
                <div className="w-6 h-6 absolute top-3 left-6 bg-blue-700 transform -rotate-45 border-2 border-white"></div>
                <div className="w-6 h-6 absolute bottom-3 right-6 bg-blue-700 transform -rotate-45 border-2 border-white"></div>
                <div className="w-4 h-4 absolute top-4 left-1 bg-yellow-400 transform -rotate-45 border border-white"></div>
                <div className="w-4 h-4 absolute bottom-4 right-1 bg-pink-600 transform -rotate-45 border border-white"></div>
              </div>
            </div>
            
            <div className="hidden sm:block">
              <h1 className={`font-bold text-xl ${
                isScrolled ? 'text-blue-800' : 'text-white'
              }`}>
                TERRITORIOS SOLIDARIOS
              </h1>
              <p className={`text-sm ${
                isScrolled ? 'text-blue-600' : 'text-blue-200'
              }`}>
                Asociación Promotora de Desarrollo Territorial Solidario
              </p>
            </div>
          </div>

          {/* Navegación desktop */}
          <nav className="hidden lg:flex space-x-1">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  activeSection === item.id
                    ? isScrolled
                      ? 'bg-blue-800 text-white'
                      : 'bg-white/20 text-white'
                    : isScrolled
                      ? 'text-blue-800 hover:bg-blue-50'
                      : 'text-white hover:bg-white/10'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Botón menú móvil */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-md transition-colors duration-200 ${
              isScrolled 
                ? 'text-blue-800 hover:bg-blue-50' 
                : 'text-white hover:bg-white/10'
            }`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menú móvil */}
        {isMobileMenuOpen && (
          <div className="lg:hidden pb-4">
            <div className="bg-white rounded-lg shadow-lg p-4 mt-2">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-4 py-3 rounded-md text-sm font-medium transition-colors duration-200 ${
                    activeSection === item.id
                      ? 'bg-blue-800 text-white'
                      : 'text-blue-800 hover:bg-blue-50'
                  }`}
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