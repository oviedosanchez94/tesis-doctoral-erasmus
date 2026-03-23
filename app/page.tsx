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

export default function Home() {
  const [activeSection, setActiveSection] = useState<Section>('dashboard')

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
      <Sidebar active={activeSection} onNavigate={(id) => setActiveSection(id as Section)} />

      {/* Main content */}
      <main className="flex-1 overflow-y-auto ml-60 transition-all duration-300">
        {/* Top bar */}
        <div className="sticky top-0 z-20 bg-white/80 backdrop-blur-xl border-b border-gray-100 px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span className="font-medium text-[#1d1d1f]">Tesis Doctoral</span>
            <span>/</span>
            <span className="capitalize">{activeSection.replace('-', ' ')}</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-gray-400 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100">
              Erasmus+ KA122 · Sur Madrid · N=18
            </span>
          </div>
        </div>

        {/* Page content */}
        <div className="px-8 py-8 max-w-5xl">
          {renderContent()}
        </div>
      </main>
    </div>
  )
}
