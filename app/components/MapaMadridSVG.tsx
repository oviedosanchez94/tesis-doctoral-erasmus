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
        style={{ width: '100%', height: '100%', display: 'block', background: '#eef4fc', borderRadius: 12 }}
        onMouseLeave={() => setTooltip(null)}
      >
        {features.map((f) => (
          <path
            key={f.name}
            d={f.d}
            fill={f.participante ? '#0071e3' : '#9ec5e0'}
            stroke="#eef4fc"
            strokeWidth={0.7}
            style={{ cursor: f.participante ? 'pointer' : 'default', transition: 'fill 0.15s' }}
            onMouseEnter={(e) => {
              const rect = (e.currentTarget as SVGPathElement).ownerSVGElement!.getBoundingClientRect()
              const svgW = rect.width
              const svgH = rect.height
              const mx = ((e.clientX - rect.left) / svgW) * width
              const my = ((e.clientY - rect.top) / svgH) * height
              setTooltip({ name: f.name, mx, my })
            }}
            onMouseMove={(e) => {
              const rect = (e.currentTarget as SVGPathElement).ownerSVGElement!.getBoundingClientRect()
              const svgW = rect.width
              const svgH = rect.height
              const mx = ((e.clientX - rect.left) / svgW) * width
              const my = ((e.clientY - rect.top) / svgH) * height
              setTooltip({ name: f.name, mx, my })
            }}
            onMouseLeave={() => setTooltip(null)}
          >
            <title>{f.name}</title>
          </path>
        ))}

        {/* Tooltip rendered inside SVG */}
        {tooltip && (() => {
          const label = PARTICIPANTES.has(tooltip.name)
            ? `${tooltip.name}  ●`
            : tooltip.name
          const rectW = label.length * 7.2 + 20
          const rectH = 26
          const tx = Math.min(tooltip.mx + 10, width - rectW - 4)
          const ty = Math.max(tooltip.my - rectH - 8, 4)
          return (
            <g pointerEvents="none">
              <rect x={tx} y={ty} width={rectW} height={rectH} rx={6} fill="#1d1d1f" opacity={0.9} />
              <text x={tx + rectW / 2} y={ty + 17} textAnchor="middle" fill="white" fontSize={11} fontFamily="-apple-system,sans-serif">
                {tooltip.name}
                {PARTICIPANTES.has(tooltip.name) && (
                  <tspan fill="#5ac8fa"> ●</tspan>
                )}
              </text>
            </g>
          )
        })()}

        {/* Legend */}
        <g transform={`translate(10, ${height - 52})`}>
          <rect width={170} height={48} rx={8} fill="white" fillOpacity={0.92} />
          <rect x={10} y={10} width={12} height={12} rx={2} fill="#0071e3" />
          <text x={28} y={21} fontSize={11} fill="#1d1d1f" fontFamily="-apple-system,sans-serif">Municipio participante (5)</text>
          <rect x={10} y={28} width={12} height={12} rx={2} fill="#9ec5e0" stroke="#7aa8c8" strokeWidth={0.5} />
          <text x={28} y={39} fontSize={11} fill="#6e6e73" fontFamily="-apple-system,sans-serif">Resto de municipios</text>
        </g>
      </svg>
    </div>
  )
}
