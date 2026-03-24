'use client'
import { useState } from 'react'
import mapData from '../data-map.json'

const PARTICIPANTES = new Set([
  'Leganés',
  'Alcorcón',
  'Parla',
  'Aranjuez',
  'San Martín de Valdeiglesias',
])

type Feature = { name: string; participante: boolean; d: string }

export default function MapaMadridSVG() {
  const [tooltip, setTooltip] = useState<{ name: string; mx: number; my: number } | null>(null)
  const { width, height, features } = mapData as { width: number; height: number; features: Feature[] }

  return (
    <div className="relative w-full select-none" style={{ aspectRatio: `${width}/${height}` }}>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        style={{ width: '100%', height: '100%', display: 'block' }}
        onMouseLeave={() => setTooltip(null)}
      >
        {features.map((f) => (
          <path
            key={f.name}
            d={f.d}
            fill={f.participante ? '#0071e3' : '#ffffff'}
            stroke="#d1d5db"
            strokeWidth={0.5}
            style={{ cursor: f.participante ? 'pointer' : 'default' }}
            onMouseEnter={(e) => {
              const rect = (e.currentTarget as SVGPathElement).ownerSVGElement!.getBoundingClientRect()
              const mx = ((e.clientX - rect.left) / rect.width) * width
              const my = ((e.clientY - rect.top) / rect.height) * height
              setTooltip({ name: f.name, mx, my })
            }}
            onMouseMove={(e) => {
              const rect = (e.currentTarget as SVGPathElement).ownerSVGElement!.getBoundingClientRect()
              const mx = ((e.clientX - rect.left) / rect.width) * width
              const my = ((e.clientY - rect.top) / rect.height) * height
              setTooltip({ name: f.name, mx, my })
            }}
            onMouseLeave={() => setTooltip(null)}
          >
            <title>{f.name}</title>
          </path>
        ))}

        {/* Tooltip */}
        {tooltip && (() => {
          const isP = PARTICIPANTES.has(tooltip.name)
          const rectW = tooltip.name.length * 7 + 20
          const rectH = 24
          const tx = Math.min(tooltip.mx + 10, width - rectW - 4)
          const ty = Math.max(tooltip.my - rectH - 8, 4)
          return (
            <g pointerEvents="none">
              <rect x={tx} y={ty} width={rectW} height={rectH} rx={5} fill="#1d1d1f" opacity={0.88} />
              <text x={tx + rectW / 2} y={ty + 16} textAnchor="middle" fill="white" fontSize={11} fontFamily="-apple-system,sans-serif">
                {tooltip.name}{isP ? ' ●' : ''}
              </text>
            </g>
          )
        })()}

        {/* Legend */}
        <g transform={`translate(10, ${height - 46})`}>
          <rect width={162} height={42} rx={7} fill="white" fillOpacity={0.95} stroke="#e5e7eb" strokeWidth={0.5} />
          <rect x={10} y={9} width={11} height={11} rx={2} fill="#0071e3" />
          <text x={27} y={20} fontSize={10.5} fill="#1d1d1f" fontFamily="-apple-system,sans-serif">Municipio participante (5)</text>
          <rect x={10} y={26} width={11} height={11} rx={2} fill="white" stroke="#d1d5db" strokeWidth={0.8} />
          <text x={27} y={37} fontSize={10.5} fill="#6e6e73" fontFamily="-apple-system,sans-serif">Resto de municipios</text>
        </g>
      </svg>
    </div>
  )
}
