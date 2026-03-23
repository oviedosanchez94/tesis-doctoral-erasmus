'use client'
import { useState } from 'react'

const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: '⬡' },
  { id: 'marco-teorico', label: 'Marco Teórico', icon: '◉' },
  { id: 'diseno', label: 'Diseño de Investigación', icon: '◎' },
  { id: 'hipotesis', label: 'Hipótesis', icon: '◈' },
  { id: 'resultados', label: 'Resultados', icon: '◆' },
  { id: 'conclusiones', label: 'Conclusiones', icon: '◇' },
]

interface SidebarProps {
  active: string
  onNavigate: (id: string) => void
}

export default function Sidebar({ active, onNavigate }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <aside
      className={`fixed top-0 left-0 h-full bg-white border-r border-gray-100 flex flex-col transition-all duration-300 z-30 ${
        collapsed ? 'w-16' : 'w-60'
      }`}
    >
      {/* Logo / Header */}
      <div className="flex items-center justify-between px-4 py-5 border-b border-gray-100">
        {!collapsed && (
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#0071e3]">Tesis Doctoral</span>
            <p className="text-[11px] text-gray-400 mt-0.5 leading-tight">Erasmus+ KA122</p>
          </div>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="w-7 h-7 flex items-center justify-center rounded-lg text-gray-400 hover:bg-gray-50 hover:text-gray-600 transition-colors ml-auto"
        >
          {collapsed ? '→' : '←'}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-2 py-4 space-y-1 overflow-y-auto">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all duration-150 group ${
              active === item.id
                ? 'bg-[#0071e3] text-white shadow-sm'
                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
            }`}
          >
            <span className={`text-base flex-shrink-0 ${active === item.id ? 'text-white' : 'text-gray-400'}`}>
              {item.icon}
            </span>
            {!collapsed && (
              <span className="text-sm font-medium truncate">{item.label}</span>
            )}
          </button>
        ))}
      </nav>

      {/* Footer */}
      {!collapsed && (
        <div className="px-4 py-4 border-t border-gray-100">
          <p className="text-[11px] text-gray-400 leading-relaxed">
            Sur de la Comunidad<br />de Madrid · N=18
          </p>
        </div>
      )}
    </aside>
  )
}
