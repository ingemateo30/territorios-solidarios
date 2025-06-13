import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Nosotros from '@/components/sections/Nosotros'
import PropuestaTerritorial from '@/components/sections/PropuestaTerritorial'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Nosotros />
      <PropuestaTerritorial />
      
      {/* Placeholder para las demás secciones */}
      <div className="py-20 bg-gray-50 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">Secciones en Desarrollo</h2>
          <p className="text-gray-600 mb-8">
            Las siguientes secciones están siendo desarrolladas y se agregarán próximamente:
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Ven a Formar Parte",
              "Portafolio de Servicios", 
              "Caja de Herramientas",
              "Mapeo Organizacional",
              "Boletín Informativo",
              "Páginas de Interés",
              "Actualidad Solidaria"
            ].map((seccion, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-blue-800">{seccion}</h3>
                <p className="text-gray-500 text-sm mt-2">Próximamente</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Footer básico */}
      <footer className="bg-blue-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-2">Territorios Solidarios</h3>
            <p className="text-blue-200">Asociación Promotora de Desarrollo Territorial Solidario</p>
          </div>
          
          <div className="mb-6">
            <p className="text-blue-200">
              📍 Sur de Santander, Colombia<br/>
              📧 info@territoriossolidarios.org<br/>
              📱 +57 300 123 4567
            </p>
          </div>
          
          <div className="border-t border-blue-700 pt-6">
            <p className="text-blue-300">
              © 2025 Territorios Solidarios. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}