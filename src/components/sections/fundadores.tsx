'use client'

const PersonasFundadoras = () => {
    const personasJuridicas = [
        {
            nombre: "SECRETARIADO DIOCESANO DE PASTORAL SOCIAL DE LA DIÓCESIS DE SOCORRO Y SAN GIL SEPAS",
            representante: "Robinson Poveda Rivera",
            titulo: "Presbítero"
        },
        {
            nombre: "FEDERACIÓN NACIONAL DE COMERCIANTES, FENALCO CAPÍTULO SAN GIL, PROVINCIAS DEL SUR DE SANTANDER",
            representante: "María Alejandra Arrieta Quintero"
        },
        {
            nombre: "ASOCIACIÓN DE ORGANIZACIONES CAMPESINAS Y POPULARES DE COLOMBIA EL COMÚN",
            representante: "Sara Marcela Alhucema Díaz"
        },
        {
            nombre: "COOPERAMOS FUNDACIÓN",
            representante: "Ángel Yesid Amado Rodríguez"
        },
        {
            nombre: "COOPERATIVA MULTIACTIVA PARA EL DESARROLLO LOCAL EN COLOMBIA CETA COOPERADOR",
            representante: "Gonzalo Báez Monroy"
        }
    ]

    const personasNaturales = [
        { nombre: "Samuel González Parra", titulo: "Pbro." },
        { nombre: "María Trinidad Gómez Martínez" },
        { nombre: "Ángel Emigdio Amado Pico" },
        { nombre: "Ángel Yesid Amado Rodríguez" },
        { nombre: "Miguel Arturo Fajardo Rojas" },
        { nombre: "Mónica Johanna Rueda Rincón" },
        { nombre: "Yohana Patricia Medina Vargas" },
        { nombre: "Ricaurte Becerra Parra" },
        { nombre: "Jimmy Archila Silva" },
        { nombre: "Edgar Orlando Lesmes Rodríguez" },
        { nombre: "María Alejandra Arrieta Quintero" },
        { nombre: "Beatriz Toloza Suárez" },
        { nombre: "Fernando Tibaduiza Araque" },
        { nombre: "Ivonne Janeth Pico Flórez" },
        { nombre: "Gonzalo Báez Monroy" }
    ]

    return (
        <section id="personas-fundadoras" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header principal */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-[#1A519E] mb-6">
                        Personas Fundadoras
                    </h2>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        Las organizaciones y personas que dieron vida a <strong>Territorios Solidarios</strong>, 
                        uniendo fuerzas para el desarrollo territorial solidario del sur de Santander
                    </p>
                </div>

                {/* Personas Jurídicas */}
                <div className="mb-16">
                    <div className="bg-[#00A650] text-white py-4 px-6 rounded-t-lg">
                        <h3 className="text-2xl font-bold text-center">PERSONAS JURÍDICAS</h3>
                    </div>
                    
                    <div className="bg-white rounded-b-lg shadow-lg border border-gray-200">
                        <div className="divide-y divide-gray-100">
                            {personasJuridicas.map((persona, index) => (
                                <div 
                                    key={index}
                                    className="p-8 hover:bg-gray-50 transition-colors duration-200"
                                >
                                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                                        <div className="flex-1">
                                            <div className="flex items-start gap-4">
                                                <div className="w-10 h-10 bg-[#1A519E] text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                                                    {index + 1}
                                                </div>
                                                <h4 className="text-lg font-semibold text-[#1A519E] leading-tight">
                                                    {persona.nombre}
                                                </h4>
                                            </div>
                                        </div>
                                        <div className="lg:text-right bg-gray-50 p-6 rounded-xl lg:min-w-[300px]">
                                            <p className="text-sm text-gray-500 mb-2 font-medium">Representada por:</p>
                                            <p className="font-bold text-[#C62877] text-xl">
                                                {persona.titulo && `${persona.titulo} `}{persona.representante}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Personas Naturales */}
                <div className="mb-16">
                    <div className="bg-[#4472C4] text-white py-4 px-6 rounded-t-lg">
                        <h3 className="text-2xl font-bold text-center">PERSONAS NATURALES</h3>
                    </div>
                    
                    <div className="bg-white rounded-b-lg shadow-lg border border-gray-200">
                        <div className="p-8">
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {personasNaturales.map((persona, index) => (
                                    <div 
                                        key={index}
                                        className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                                    >
                                        <div className="w-10 h-10 bg-[#4472C4] text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                                            {index + 1}
                                        </div>
                                        <div>
                                            <p className="font-semibold text-[#1A519E] leading-tight">
                                                {persona.titulo && <span className="text-[#C62877]">{persona.titulo} </span>}
                                                {persona.nombre}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center">
                    <div className="bg-gradient-to-r from-blue-800 to-blue-700 rounded-2xl p-8 text-center text-white">
                        <h3 className="text-3xl font-bold mb-4">Reconocimiento y Gratitud</h3>
                        <p className="text-xl text-blue-200 mb-6 max-w-2xl mx-auto">
                            Agradecemos profundamente a todas las personas fundadoras que creyeron en esta visión 
                            de desarrollo territorial solidario. Su compromiso y liderazgo son la base sobre la cual 
                            construimos un futuro más próspero y equitativo para el sur de Santander.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-[#F9B233] mb-2">5</div>
                                <p className="text-blue-200">Organizaciones Fundadoras</p>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-[#F9B233] mb-2">15</div>
                                <p className="text-blue-200">Personas Naturales</p>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-[#F9B233] mb-2">Una</div>
                                <p className="text-blue-200">Visión Compartida</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default PersonasFundadoras