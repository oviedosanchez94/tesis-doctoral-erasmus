'use client'
import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import MarcoTeorico from './components/MarcoTeorico'
import Diseno from './components/Diseno'
import Hipotesis from './components/Hipotesis'
import Resultados from './components/Resultados'
import Conclusiones from './components/Conclusiones'

type Section = 'dashboard' | 'marco-teorico' | 'diseno' | 'hipotesis' | 'resultados' | 'conclusiones'

const sectionLabels: Record<Section, string> = {
  'dashboard': 'Dashboard',
  'marco-teorico': 'Marco Teórico',
  'diseno': 'Diseño',
  'hipotesis': 'Hipótesis',
  'resultados': 'Resultados',
  'conclusiones': 'Conclusiones',
}

export default function Home() {
  const [activeSection, setActiveSection] = useState<Section>('dashboard')
  const [mobileOpen, setMobileOpen] = useState(false)

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard': return <Dashboard />
      case 'marco-teorico': return <MarcoTeorico />
      case 'diseno': return <Diseno />
      case 'hipotesis': return <Hipotesis />
      case 'resultados': return <Resultados />
      case 'conclusiones': return <Conclusiones />
      default: return <Dashboard />
    }
  }

  return (
    <div className="flex h-screen overflow-hidden bg-[#fbfbfd]">
      <Sidebar
        active={activeSection}
        onNavigate={(id) => setActiveSection(id as Section)}
        mobileOpen={mobileOpen}
        onMobileClose={() => setMobileOpen(false)}
      />

      {/* Main content */}
      <main className="flex-1 overflow-y-auto md:ml-60 transition-all duration-300">
        {/* Top bar */}
        <div className="sticky top-0 z-20 bg-white/80 backdrop-blur-xl border-b border-gray-100 px-4 md:px-8 py-3 md:py-4 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            {/* Hamburger for mobile */}
            <button
              className="md:hidden flex flex-col gap-1 p-1"
              onClick={() => setMobileOpen(true)}
              aria-label="Abrir menú"
            >
              <span className="block w-5 h-0.5 bg-gray-600" />
              <span className="block w-5 h-0.5 bg-gray-600" />
              <span className="block w-5 h-0.5 bg-gray-600" />
            </button>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span className="font-medium text-[#1d1d1f]">Tesis Doctoral</span>
              <span className="hidden sm:inline">/</span>
              <span className="hidden sm:inline capitalize">{sectionLabels[activeSection]}</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-gray-400 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100 whitespace-nowrap">
              javier.oviedo1@alu.uclm.es
            </span>
          </div>
        </div>

        {/* Page content */}
        <div className="px-4 py-4 md:px-8 md:py-8 max-w-5xl">
          {renderContent()}
        </div>
      </main>
    </div>
  )
}
