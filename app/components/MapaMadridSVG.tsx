'use client'
import { useRef, useState } from 'react'
import mapData from '../data-map.json'

type Feature = { name: string; participante: boolean; d: string }

export default function MapaMadridSVG() {
  const [tooltip, setTooltip] = useState<{ name: string; participante: boolean; x: number; y: number } | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const { width, height, features } = mapData as { width: number; height: number; features: Feature[] }

  // Render non-participants first, participants last (so they appear on top)
  const sorted = [...features].sort((a, b) => (a.participante ? 1 : 0) - (b.participante ? 1 : 0))

  const relativePos = (clientX: number, clientY: number) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return { x: clientX, y: clientY }
    return { x: clientX - rect.left, y: clientY - rect.top }
  }

  return (
    <div ref={containerRef} className="relative w-full select-none" style={{ aspectRatio: `${width}/${height}` }}>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        style={{ width: '100%', height: '100%', display: 'block' }}
        onMouseLeave={() => setTooltip(null)}
      >
        {sorted.map((f) => (
          <path
            key={f.name}
            d={f.d}
            fill={f.participante ? '#b30033' : '#f3f4f6'}
            fillRule="evenodd"
            stroke="#ffffff"
            strokeWidth={0.6}
            style={{ cursor: 'pointer' }}
            onMouseEnter={(e) => {
              const { x, y } = relativePos(e.clientX, e.clientY)
              setTooltip({ name: f.name, participante: f.participante, x, y })
            }}
            onMouseMove={(e) => {
              const { x, y } = relativePos(e.clientX, e.clientY)
              setTooltip((t) => (t ? { ...t, x, y } : t))
            }}
            onMouseLeave={() => setTooltip(null)}
          />
        ))}
      </svg>

      {/* Legend */}
      <div className="absolute left-2.5 bottom-2.5 bg-white/95 border border-gray-100 rounded-xl shadow-sm px-3 py-2.5 space-y-1.5">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-sm bg-[#b30033]" />
          <span className="text-[10.5px] text-[#1d1d1f]">Municipio participante (5)</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-sm bg-gray-100 border border-gray-300" />
          <span className="text-[10.5px] text-gray-500">Resto de municipios</span>
        </div>
      </div>

      {/* Tooltip */}
      {tooltip && (
        <div
          className="absolute z-50 bg-white border border-gray-100 rounded-xl shadow-md px-3 py-2 pointer-events-none"
          style={{ left: tooltip.x + 12, top: tooltip.y + 12 }}
        >
          <p className="text-xs font-semibold text-[#1d1d1f]">{tooltip.participante ? '📍' : '◦'} {tooltip.name}</p>
          <p className="text-xs text-gray-500 mt-0.5">{tooltip.participante ? 'Municipio participante' : 'No participa en la muestra'}</p>
        </div>
      )}
    </div>
  )
}
