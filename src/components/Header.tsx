'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('inicio')

    const navigationItems = [
        { id: 'inicio', label: 'INICIO' },
        { id: 'nosotros', label: 'NOSOTROS' },
        { id: 'antecedentes', label: 'ANTECEDENTES' },
        { id: 'areas-misionales', label: 'ÁREAS MISIONALES' },
        { id: 'propuesta', label: 'PROPUESTA TERRITORIAL' },
        { id: 'vinculacion', label: 'FORMAR PARTE' },
        { id: 'servicios-futuros', label: 'SERVICIOS' },
        { id: 'contacto', label: 'CONTACTO' },
    ]


    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
            const sections = navigationItems.map(item => item.id)
            for (const section of sections) {
                const element = document.getElementById(section)
                if (element) {
                    const rect = element.getBoundingClientRect()
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveSection(section)
                        break
                    }
                }
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId)
        if (element) {
            const offsetTop = element.offsetTop - 100
            window.scrollTo({ top: offsetTop, behavior: 'smooth' })
            setActiveSection(sectionId)
            setIsMobileMenuOpen(false)
        }
    }


    const ColombiaFlag = () => (
        <svg width="32" height="24" viewBox="0 0 32 24" className="border border-gray-300 rounded shadow-sm">
            {/* Amarillo */}
            <rect x="0" y="0" width="32" height="12" fill="#FDE047" />
            {/* Azul */}
            <rect x="0" y="12" width="32" height="6" fill="#3B82F6" />
            {/* Rojo */}
            <rect x="0" y="18" width="32" height="6" fill="#EF4444" />
        </svg>
    )

    // Bandera de Santander SVG
    const SantanderFlag = () => (
        <svg width="32" height="24" viewBox="0 0 32 24" className="border border-gray-300 rounded shadow-sm">
            {/* Franja roja izquierda con estrellas */}
            <rect x="0" y="0" width="10" height="24" fill="#DC2626" />

            {/* Estrellas blancas en la franja roja */}
            {[0, 1, 2, 3, 4, 5].map((index) => {
                const y = 2 + (index * 3.5);
                return (
                    <polygon
                        key={index}
                        points={`5,${y} 5.5,${y + 1} 6.5,${y + 1} 5.7,${y + 1.7} 6,${y + 2.7} 5,${y + 2.1} 4,${y + 2.7} 4.3,${y + 1.7} 3.5,${y + 1} 4.5,${y + 1}`}
                        fill="white"
                    />
                );
            })}

            {/* Franjas horizontales del lado derecho */}
            {/* Verde superior */}
            <rect x="10" y="0" width="22" height="14" fill="#16A34A" />
            {/* Amarillo */}
            <rect x="10" y="6" width="22" height="4" fill="#FDE047" />
            {/* Negro */}
            <rect x="10" y="10" width="22" height="4" fill="#000000" />
            {/* Amarillo */}
            <rect x="10" y="14" width="22" height="4" fill="#FDE047" />
            {/* Verde inferior */}
            <rect x="10" y="18" width="22" height="8" fill="#16A34A" />
        </svg>
    )

    return (
        <header className="fixed top-0 w-full z-50 font-sans">
            {/* Barra superior */}
            <div className="bg-[#f1f9e9] py-2 px-4 shadow-sm">
                <div className="container mx-auto max-w-7xl flex justify-between items-center">
                    {/* Logo y nombre */}
                    <div className="flex items-center gap-2 relative h-16 w-16 overflow-visible">
                        <img
                            src="/a.png"
                            alt="Territorios Solidarios Logo"
                            className="object-contain transform scale-[3] translate-x-[100%]"
                        />
                    </div>

                    {/* Eslogan (centrado) */}
                    <div className="hidden lg:block justify-center text-center flex-1 ml-48">
                        <span className="text-[#C62877] font-bold">
                            Aprendiendo <span className="text-[#1A519E]">a trabajar juntos</span>
                        </span>
                    </div>


                    {/* Banderas y redes sociales */}
                    <div className="hidden lg:flex items-center gap-4">
                        {/* Banderas */}
                        <div className="flex items-center gap-2">
                            <div className="flex flex-col items-center">
                                <ColombiaFlag />
                                <span className="text-xs text-gray-600 mt-1 font-medium">Colombia</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <SantanderFlag />
                                <span className="text-xs text-gray-600 mt-1 font-medium">Santander</span>
                            </div>
                        </div>

                        {/* Separador */}
                        <div className="w-px h-8 bg-gray-300"></div>

                        {/* Redes sociales con íconos reales como imágenes */}
                        <div className="flex gap-2">
                            <a
                                href="#"
                                className="w-8 h-8 rounded-full flex items-center justify-center transition-transform hover:scale-110 cursor-pointer hover:shadow-lg overflow-hidden"
                                aria-label="Facebook"
                                title="Síguenos en Facebook"
                            >
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                                    alt="Facebook"
                                    className="w-8 h-8 object-contain"
                                />
                            </a>
                            <a
                                href="#"
                                className="w-8 h-8 rounded-full flex items-center justify-center transition-transform hover:scale-110 cursor-pointer hover:shadow-lg overflow-hidden"
                                aria-label="YouTube"
                                title="Suscríbete a nuestro canal"
                            >
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png"
                                    alt="YouTube"
                                    className="w-8 h-8 object-contain"
                                />
                            </a>
                            <a
                                href="#"
                                className="w-8 h-8 rounded-full flex items-center justify-center transition-transform hover:scale-110 cursor-pointer hover:shadow-lg overflow-hidden bg-black"
                                aria-label="X (Twitter)"
                                title="Síguenos en X"
                            >
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/c/ce/X_logo_2023.svg"
                                    alt="X"
                                    className="w-5 h-5 object-contain invert"
                                />
                            </a>
                        </div>
                    </div>

                    {/* Versión móvil - Solo banderas pequeñas */}
                    <div className="lg:hidden flex items-center gap-2">
                        <div className="scale-75">
                            <ColombiaFlag />
                        </div>
                        <div className="scale-75">
                            <SantanderFlag />
                        </div>
                    </div>
                </div>
            </div>

            {/* Navegación */}
            <div
                className={`transition-all duration-500 ${isScrolled ? 'bg-[#1A519E] shadow-md' : 'bg-[#1A519E]'
                    }`}
            >
                <div className="container mx-auto max-w-7xl px-4">
                    <div className="flex justify-between items-center">
                        {/* Menú desktop */}
                        <nav className="hidden lg:flex items-center justify-center w-full py-2 gap-1">
                            {navigationItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`px-4 py-2 rounded font-semibold text-sm transition-all ${activeSection === item.id
                                        ? 'bg-white text-[#1A519E] shadow'
                                        : 'text-white hover:bg-white/10'
                                        }`}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </nav>

                        {/* Menú móvil */}
                        <div className="lg:hidden flex items-center py-3 w-full justify-between">
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="p-2 rounded-lg text-white hover:bg-white/10"
                            >
                                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>

                    {/* Menú móvil desplegable */}
                    {isMobileMenuOpen && (
                        <div className="lg:hidden pb-4 animate-fade-in">
                            <div className="bg-white shadow-xl rounded-lg mt-2 overflow-hidden">
                                {navigationItems.map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => scrollToSection(item.id)}
                                        className={`block w-full text-left px-4 py-3 text-sm font-semibold transition-all border-b border-gray-200 ${activeSection === item.id
                                            ? 'bg-[#F9B233] text-white'
                                            : 'text-gray-800 hover:bg-[#f1f9e9]'
                                            }`}
                                    >
                                        {item.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    )
}

export default Header