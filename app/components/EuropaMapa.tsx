'use client'
import { useRef, useState } from 'react'
import { ComposableMap, Geographies, Geography } from 'react-simple-maps'
import { projectContext } from '../data'

const GEO_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json'

const valueByCountry = new Map(projectContext.paises.map((p) => [p.nameEn, p]))
const maxValue = Math.max(...projectContext.paises.map((p) => p.value))

function colorFor(value: number) {
  const t = value / maxValue
  if (t >= 0.85) return '#b30033'
  if (t >= 0.6) return '#990029'
  if (t >= 0.35) return '#d6335c'
  if (t >= 0.15) return '#e87a93'
  return '#eaa6b5'
}

export default function EuropaMapa() {
  const [tooltip, setTooltip] = useState<{ name: string; value: number; flag: string; x: number; y: number } | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const relativePos = (clientX: number, clientY: number) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return { x: clientX, y: clientY }
    return { x: clientX - rect.left, y: clientY - rect.top }
  }

  return (
    <div ref={containerRef} className="relative w-full" style={{ aspectRatio: '16/11' }}>
      <ComposableMap
        projection="geoAzimuthalEqualArea"
        projectionConfig={{ rotate: [-20, -52, 0], scale: 900 }}
        style={{ width: '100%', height: '100%' }}
      >
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const name = geo.properties.name as string
              const isSpain = name === 'Spain'
              const data = valueByCountry.get(name)
              const fill = isSpain ? '#4b5563' : data ? colorFor(data.value) : '#f3f4f6'
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={fill}
                  stroke="#ffffff"
                  strokeWidth={0.6}
                  style={{
                    default: { outline: 'none' },
                    hover: { outline: 'none', cursor: data || isSpain ? 'pointer' : 'default', opacity: 0.85 },
                    pressed: { outline: 'none' },
                  }}
                  onMouseEnter={(e) => {
                    const { x, y } = relativePos(e.clientX, e.clientY)
                    if (isSpain) {
                      setTooltip({ name: 'España', value: 0, flag: '🇪🇸', x, y })
                    } else if (data) {
                      setTooltip({ name: data.name, value: data.value, flag: data.flag, x, y })
                    }
                  }}
                  onMouseMove={(e) => {
                    if (data || isSpain) {
                      const { x, y } = relativePos(e.clientX, e.clientY)
                      setTooltip((t) => (t ? { ...t, x, y } : t))
                    }
                  }}
                  onMouseLeave={() => setTooltip(null)}
                />
              )
            })
          }
        </Geographies>
      </ComposableMap>

      {tooltip && (
        <div
          className="absolute z-50 bg-white border border-gray-100 rounded-xl shadow-md px-3 py-2 pointer-events-none"
          style={{ left: tooltip.x + 12, top: tooltip.y + 12 }}
        >
          <p className="text-xs font-semibold text-[#1d1d1f]">{tooltip.flag} {tooltip.name}</p>
          {tooltip.value > 0 && (
            <p className="text-xs text-gray-500 mt-0.5">{tooltip.value} {tooltip.value === 1 ? 'proyecto' : 'proyectos'}</p>
          )}
          {tooltip.name === 'España' && (
            <p className="text-xs text-gray-500 mt-0.5">Centros de origen (sur de Madrid)</p>
          )}
        </div>
      )}
    </div>
  )
}
