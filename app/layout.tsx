import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Tesis Doctoral — Impacto KA122 Erasmus+',
  description: 'Impacto de las acciones KA122 del programa Erasmus+ en centros de educación secundaria y FP del sur de la Comunidad de Madrid',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-[#fbfbfd] text-[#1d1d1f]">{children}</body>
    </html>
  )
}
