'use client'

import { MapPin, Mail, Phone } from 'lucide-react'

const Footer = () => {
    // Bandera de Colombia SVG (igual que en el header)
    const ColombiaFlag = () => (
        <svg width="24" height="18" viewBox="0 0 32 24" className="border border-gray-300 rounded shadow-sm">
            <rect x="0" y="0" width="32" height="12" fill="#FDE047" />
            <rect x="0" y="12" width="32" height="6" fill="#3B82F6" />
            <rect x="0" y="18" width="32" height="6" fill="#EF4444" />
        </svg>
    )

    // Bandera de Santander SVG (igual que en el header)
    const SantanderFlag = () => (
        <svg width="24" height="18" viewBox="0 0 32 24" className="border border-gray-300 rounded shadow-sm">
            <rect x="0" y="0" width="10" height="24" fill="#DC2626" />
            
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
            
            <rect x="10" y="0" width="22" height="7" fill="#16A34A" />
            <rect x="10" y="7" width="22" height="3" fill="#FDE047" />
            <rect x="10" y="10" width="22" height="3" fill="#000000" />
            <rect x="10" y="13" width="22" height="3" fill="#FDE047" />
            <rect x="10" y="16" width="22" height="8" fill="#16A34A" />
        </svg>
    )

    return (
        <footer className="bg-gradient-to-br from-[#1A519E] via-[#1A519E] to-[#0f2557] text-white">
            {/* Sección principal del footer */}
            <div className="container mx-auto max-w-7xl px-4 py-16">
                <div className="grid lg:grid-cols-4 gap-8">
                    {/* Logo y descripción */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-4 mb-6">
                            <div>
                                <h3 className="text-2xl font-bold text-white">Territorios Solidarios</h3>
                                <p className="text-blue-200 text-sm">Asociación Promotora de Desarrollo Territorial Solidario</p>
                            </div>
                        </div>
                        
                        {/* Eslogan del header */}
                        <div className="mb-6">
                            <span className="text-[#F9B233] font-bold text-lg">
                                Aprendiendo <span className="text-blue-200">a trabajar juntos</span>
                            </span>
                        </div>
                        
                        <p className="text-blue-100 leading-relaxed max-w-md">
                            Trabajamos por el fortalecimiento del desarrollo territorial solidario en las provincias 
                            del sur de Santander, construyendo redes de colaboración para la transformación social.
                        </p>

                        {/* Banderas como en el header */}
                        <div className="flex items-center gap-3 mt-6">
                            <span className="text-blue-200 text-sm font-medium">Orgullosamente de:</span>
                            <div className="flex items-center gap-2">
                                <div className="flex flex-col items-center">
                                    <ColombiaFlag />
                                    <span className="text-xs text-blue-300 mt-1">Colombia</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <SantanderFlag />
                                    <span className="text-xs text-blue-300 mt-1">Santander</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Contacto */}
                    <div>
                        <h4 className="text-xl font-bold mb-6 text-white">Contacto</h4>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-[#F9B233] mt-0.5 flex-shrink-0" />
                                <div>
                                    <span className="text-blue-100 block">Sur de Santander</span>
                                    <span className="text-blue-100 block">Colombia</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-[#F9B233] flex-shrink-0" />
                                <a 
                                    href="mailto:info@territoriossolidarios.org" 
                                    className="text-blue-100 hover:text-white transition-colors"
                                >
                                    info@territoriossolidarios.org
                                </a>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-[#F9B233] flex-shrink-0" />
                                <a 
                                    href="tel:+573001234567" 
                                    className="text-blue-100 hover:text-white transition-colors"
                                >
                                    +57 300 123 4567
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    {/* Redes sociales y enlaces */}
                    <div>
                        <h4 className="text-xl font-bold mb-6 text-white">Síguenos</h4>
                        
                        {/* Redes sociales como en el header */}
                        <div className="flex gap-3 mb-6">
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer hover:shadow-lg overflow-hidden bg-white/10 hover:bg-white/20"
                                aria-label="Facebook"
                                title="Síguenos en Facebook"
                            >
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                                    alt="Facebook"
                                    className="w-6 h-6 object-contain"
                                />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer hover:shadow-lg overflow-hidden bg-white/10 hover:bg-white/20"
                                aria-label="YouTube"
                                title="Suscríbete a nuestro canal"
                            >
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png"
                                    alt="YouTube"
                                    className="w-6 h-6 object-contain"
                                />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer hover:shadow-lg overflow-hidden bg-black/60 hover:bg-black/80"
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

                        <p className="text-blue-200 text-sm mb-6">
                            Mantente conectado con nuestras actividades y conoce las últimas noticias del desarrollo territorial solidario.
                        </p>

                        {/* Enlaces rápidos */}
                        <div className="space-y-2">
                            <h5 className="text-[#F9B233] font-semibold text-sm mb-3">Enlaces rápidos</h5>
                            {[
                                { label: 'Nosotros', href: '#nosotros' },
                                { label: 'Servicios', href: '#portafolio' },
                                { label: 'Contacto', href: '#contacto' }
                            ].map((link, index) => (
                                <a
                                    key={index}
                                    href={link.href}
                                    className="block text-blue-200 hover:text-white transition-colors text-sm"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Bottom footer */}
            <div className="border-t border-blue-700/50">
                <div className="container mx-auto max-w-7xl px-4 py-6">
                    <div className="flex flex-col sm:flex-row justify-between items-center">
                        <p className="text-blue-300 text-sm mb-4 sm:mb-0">
                            © 2025 Territorios Solidarios. Todos los derechos reservados.
                        </p>
                        <div className="flex space-x-6 text-sm">
                            <a href="#" className="text-blue-300 hover:text-white transition-colors">
                                Política de Privacidad
                            </a>
                            <a href="#" className="text-blue-300 hover:text-white transition-colors">
                                Términos de Uso
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer