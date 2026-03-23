'use client'
import { useState } from 'react'
import { ComposableMap, Geographies, Geography } from 'react-simple-maps'

const GEO_URL = '/madrid-municipios.json'

const PARTICIPANTES = new Set([
  'Leganés',
  'Alcorcón',
  'Parla',
  'Aranjuez',
  'San Martín de Valdeiglesias',
])

export default function MapaMadridSVG() {
  const [tooltip, setTooltip] = useState<{ name: string; x: number; y: number } | null>(null)

  return (
    <div
      data-map-container
      className="relative w-full"
      style={{ height: 380 }}
      onMouseLeave={() => setTooltip(null)}
    >
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{ center: [-3.816, 40.525], scale: 8500 }}
        style={{ width: '100%', height: '100%' }}
      >
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const name = geo.properties.name as string
              const isParticipante = PARTICIPANTES.has(name)
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={(e) => {
                    const rect = (e.currentTarget as SVGElement)
                      .closest('.rsm-svg')
                      ?.getBoundingClientRect()
                    const parentRect = (e.currentTarget as SVGElement)
                      .closest('[data-map-container]')
                      ?.getBoundingClientRect()
                    const x = e.clientX - (parentRect?.left ?? 0)
                    const y = e.clientY - (parentRect?.top ?? 0)
                    setTooltip({ name, x, y })
                  }}
                  onMouseMove={(e) => {
                    const parentRect = (e.currentTarget as SVGElement)
                      .closest('[data-map-container]')
                      ?.getBoundingClientRect()
                    const x = e.clientX - (parentRect?.left ?? 0)
                    const y = e.clientY - (parentRect?.top ?? 0)
                    setTooltip({ name, x, y })
                  }}
                  onMouseLeave={() => setTooltip(null)}
                  style={{
                    default: {
                      fill: isParticipante ? '#0071e3' : '#e8f0fb',
                      stroke: '#ffffff',
                      strokeWidth: 0.4,
                      outline: 'none',
                    },
                    hover: {
                      fill: isParticipante ? '#0058b0' : '#c7d9f0',
                      stroke: '#ffffff',
                      strokeWidth: 0.4,
                      outline: 'none',
                      cursor: 'pointer',
                    },
                    pressed: { outline: 'none' },
                  }}
                />
              )
            })
          }
        </Geographies>
      </ComposableMap>

      {/* Tooltip */}
      {tooltip && (
        <div
          className="absolute z-50 bg-[#1d1d1f] text-white text-xs font-medium px-2.5 py-1.5 rounded-lg pointer-events-none shadow-lg"
          style={{ left: tooltip.x + 12, top: tooltip.y - 30 }}
        >
          {tooltip.name}
          {PARTICIPANTES.has(tooltip.name) && (
            <span className="ml-1.5 text-[#a8d4f5]">● Participante</span>
          )}
        </div>
      )}

      {/* Legend */}
      <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm rounded-xl px-3 py-2 shadow-sm border border-gray-100 flex flex-col gap-1.5">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-sm flex-shrink-0" style={{ background: '#0071e3' }} />
          <span className="text-xs text-gray-700">Municipio participante (5)</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-sm flex-shrink-0 border border-gray-200" style={{ background: '#e8f0fb' }} />
          <span className="text-xs text-gray-500">Resto de municipios</span>
        </div>
      </div>
    </div>
  )
}
