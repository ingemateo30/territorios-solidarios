import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Territorios Solidarios - Asociación Promotora de Desarrollo Territorial Solidario',
  description: 'Asociación Promotora de Desarrollo Territorial Solidario IAC. Fortalecemos el desarrollo solidario en las provincias del sur de Santander.',
  keywords: ['desarrollo territorial', 'economía solidaria', 'Santander', 'organizaciones sociales', 'liderazgo'],
  authors: [{ name: 'Territorios Solidarios' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'Territorios Solidarios',
    description: 'Asociación Promotora de Desarrollo Territorial Solidario',
    type: 'website',
    locale: 'es_CO',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen bg-white">
          {children}
        </div>
      </body>
    </html>
  )
}