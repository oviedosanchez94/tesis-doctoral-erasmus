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

// Compute bounding-box centroid from a path's d attribute
function centroid(d: string): [number, number] {
  const nums = d.match(/[-\d.]+,[-\d.]+/g) || []
  let mnX = 9999, mxX = -9999, mnY = 9999, mxY = -9999
  nums.forEach(n => {
    const [x, y] = n.split(',').map(Number)
    if (x < mnX) mnX = x; if (x > mxX) mxX = x
    if (y < mnY) mnY = y; if (y > mxY) mxY = y
  })
  return [(mnX + mxX) / 2, (mnY + mxY) / 2]
}

export default function MapaMadridSVG() {
  const [tooltip, setTooltip] = useState<{ name: string; mx: number; my: number } | null>(null)
  const { width, height, features } = mapData as { width: number; height: number; features: Feature[] }

  // Render non-participants first, participants last (so they appear on top)
  const sorted = [...features].sort((a, b) => (a.participante ? 1 : 0) - (b.participante ? 1 : 0))

  return (
    <div className="relative w-full select-none" style={{ aspectRatio: `${width}/${height}` }}>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        style={{ width: '100%', height: '100%', display: 'block' }}
        onMouseLeave={() => setTooltip(null)}
      >
        {sorted.map((f) => {
          const [cx, cy] = centroid(f.d)
          return (
            <path
              key={f.name}
              d={f.d}
              fill={f.participante ? '#0071e3' : '#ffffff'}
              stroke="#d1d5db"
              strokeWidth={0.5}
              style={{ cursor: f.participante ? 'pointer' : 'default' }}
              onMouseEnter={() => setTooltip({ name: f.name, mx: cx, my: cy })}
              onMouseLeave={() => setTooltip(null)}
            >
              <title>{f.name}</title>
            </path>
          )
        })}

        {/* Tooltip at municipality centroid */}
        {tooltip && PARTICIPANTES.has(tooltip.name) && (() => {
          const rectW = tooltip.name.length * 7 + 20
          const rectH = 24
          const tx = Math.min(Math.max(tooltip.mx - rectW / 2, 4), width - rectW - 4)
          const ty = Math.max(tooltip.my - rectH - 10, 4)
          return (
            <g pointerEvents="none">
              <rect x={tx} y={ty} width={rectW} height={rectH} rx={5} fill="#1d1d1f" opacity={0.88} />
              <text x={tx + rectW / 2} y={ty + 16} textAnchor="middle" fill="white" fontSize={11} fontFamily="-apple-system,sans-serif">
                {tooltip.name}
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
