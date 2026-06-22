'use client'
import { useState } from 'react'
import { hypotheses } from '../data'

const resultadoConfig: Record<string, { bg: string; text: string }> = {
  CONFIRMADA: { bg: '#b3003315', text: '#8f0028' },
  'CONFIRMADA PARCIALMENTE': { bg: '#d6335c15', text: '#990029' },
  'NO CONFIRMADA': { bg: '#7a002215', text: '#7a0022' },
  'REFUTADA PARCIALMENTE': { bg: '#7a002215', text: '#7a0022' },
  REFUTADA: { bg: '#7a002215', text: '#7a0022' },
}

export default function Hipotesis() {
  const [openId, setOpenId] = useState<string | null>(null)

  return (
    <div className="space-y-8 fade-in">
      <div>
        <span className="text-xs font-semibold uppercase tracking-widest text-[#b30033]">Hipótesis de Trabajo</span>
        <h1 className="section-title mt-1">Hipótesis H1–H4</h1>
        <p className="section-subtitle">
          Cuatro hipótesis derivadas del marco teórico y contrastadas empíricamente mediante el cuestionario IRKA122. Forman un sistema interpretativo coherente sobre el impacto de las acciones KA122.
        </p>
      </div>

      {/* System note */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6">
        <h3 className="text-base font-semibold mb-3">Sistema interpretativo de las hipótesis</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-xl p-4 bg-[#b30033]/5 border border-[#b30033]/10">
            <p className="text-xs font-semibold text-[#b30033] mb-1">H1 + H4 → Condiciones institucionales</p>
            <p className="text-xs text-gray-600 leading-relaxed">
              Determinan la intensidad y durabilidad del impacto: H1 desde la velocidad diferencial del cambio individual vs. organizativo; H4 desde los obstáculos que lo frenan.
            </p>
          </div>
          <div className="rounded-xl p-4 bg-[#30d158]/5 border border-[#30d158]/10">
            <p className="text-xs font-semibold text-[#1a7a35] mb-1">H2 + H3 → Contenido del impacto</p>
            <p className="text-xs text-gray-600 leading-relaxed">
              H2 aborda la dimensión contextual y relacional de los proyectos; H3 se centra en la dimensión competencial del alumnado y su relación con los indicadores de rendimiento convencional.
            </p>
          </div>
        </div>
      </div>

      {/* Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {hypotheses.map((h) => {
          const cfg = resultadoConfig[h.result] || resultadoConfig.CONFIRMADA
          return (
            <div key={h.id} className="bg-white rounded-2xl border border-gray-100 p-5 text-center">
              <div className="text-3xl font-semibold" style={{ color: h.color }}>{h.id}</div>
              <div
                className="text-xs font-semibold px-2 py-1 rounded-full mt-2 inline-block"
                style={{ background: cfg.bg, color: cfg.text }}
              >
                {h.result}
              </div>
              <p className="text-xs text-gray-500 mt-2 leading-snug">{h.keyMetric}</p>
              <p className="text-[10px] text-gray-400 mt-0.5">{h.keyMetricLabel}</p>
            </div>
          )
        })}
      </div>

      {/* Each hypothesis detail */}
      {hypotheses.map((h) => {
        const cfg = resultadoConfig[h.result] || resultadoConfig.CONFIRMADA
        const isOpen = openId === h.id
        return (
          <div key={h.id} className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            {/* Header bar */}
            <div className="h-1.5" style={{ background: h.color }} />
            <div className="p-8">
              <div
                className="flex items-start gap-4 flex-wrap cursor-pointer"
                onClick={() => setOpenId(isOpen ? null : h.id)}
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-white text-xl font-bold flex-shrink-0"
                  style={{ background: h.color }}
                >
                  {h.id}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 flex-wrap mb-1">
                    <h2 className="text-lg font-semibold text-[#1d1d1f]">{h.title}</h2>
                    <span
                      className="text-xs font-semibold px-3 py-1 rounded-full"
                      style={{ background: cfg.bg, color: cfg.text }}
                    >
                      {h.result}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{h.summary}</p>
                </div>
                <span className="text-gray-300 text-sm mt-2">{isOpen ? '▲' : '▼'}</span>
              </div>

              {isOpen && (
                <>
                  {/* Evidence */}
                  <div className="mt-6 p-5 rounded-xl bg-gray-50">
                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Evidencia empírica</p>
                    <p className="text-sm text-gray-700 leading-relaxed">{h.evidence}</p>
                  </div>

                  {/* Key metric */}
                  <div className="mt-4 flex items-center gap-4">
                    <div className="rounded-xl px-5 py-3 flex-shrink-0" style={{ background: h.color + '12' }}>
                      <p className="text-2xl font-semibold" style={{ color: h.color }}>{h.keyMetric}</p>
                      <p className="text-xs mt-0.5" style={{ color: h.color + 'cc' }}>{h.keyMetricLabel}</p>
                    </div>
                    <div className="flex-1">
                      <ul className="space-y-1.5">
                        {h.details.map((d, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: h.color }} />
                            <span className="text-xs text-gray-600 leading-relaxed">{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}
