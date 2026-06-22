'use client'
import { useState } from 'react'
import { impactResults, demographics, projectContext } from '../data'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  Cell, Legend, PieChart, Pie,
} from 'recharts'

function Accordion({ title, subtitle, defaultOpen = false, children }: { title: string; subtitle: string; defaultOpen?: boolean; children: React.ReactNode }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-8">
      <div className="flex items-start justify-between cursor-pointer" onClick={() => setOpen(!open)}>
        <div>
          <h2 className="text-lg font-semibold mb-1">{title}</h2>
          <p className="text-xs text-gray-400">{subtitle}</p>
        </div>
        <span className="text-gray-300 text-sm mt-1 flex-shrink-0">{open ? '▲' : '▼'}</span>
      </div>
      {open && <div className="mt-6">{children}</div>}
    </div>
  )
}

const SCALE_COLORS: Record<string, string> = {
  nada: '#f4cdd7',
  poco: '#e87a93',
  bastante: '#d6335c',
  mucho: '#b30033',
}

function LikertBar({ data }: { data: typeof impactResults.culturaOrganizativa }) {
  const chartData = data.map((d) => ({
    name: d.label.length > 35 ? d.label.slice(0, 35) + '…' : d.label,
    fullLabel: d.label,
    Nada: d.nada,
    Poco: d.poco,
    Bastante: d.bastante,
    Mucho: d.mucho,
    mean: d.mean,
  }))

  return (
    <ResponsiveContainer width="100%" height={chartData.length * 55 + 40}>
      <BarChart data={chartData} layout="vertical" margin={{ left: 10, right: 60 }}>
        <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f0f0f0" />
        <XAxis type="number" tick={{ fontSize: 10, fill: '#6e6e73' }} tickLine={false} axisLine={false} />
        <YAxis type="category" dataKey="name" tick={{ fontSize: 11, fill: '#1d1d1f' }} tickLine={false} axisLine={false} width={200} />
        <Tooltip
          contentStyle={{ borderRadius: 12, border: '1px solid #e5e7eb', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', fontSize: 12 }}
          formatter={(v: number, name: string) => [`${v} resp.`, name]}
        />
        <Legend wrapperStyle={{ fontSize: 11 }} />
        <Bar dataKey="Nada" stackId="a" fill={SCALE_COLORS.nada} radius={[0, 0, 0, 0]} />
        <Bar dataKey="Poco" stackId="a" fill={SCALE_COLORS.poco} />
        <Bar dataKey="Bastante" stackId="a" fill={SCALE_COLORS.bastante} />
        <Bar dataKey="Mucho" stackId="a" fill={SCALE_COLORS.mucho} radius={[0, 4, 4, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}

const shortLabel = (s: string) => (s.length > 22 ? s.slice(0, 22) + '…' : s)

const radarAlumnado = impactResults.impactoAlumnado.map((d) => ({
  area: shortLabel(d.label),
  media: d.mean,
}))

const radarDocenteCentro = [
  ...impactResults.culturaOrganizativa.map((d) => ({ area: shortLabel(d.label), media: d.mean })),
  ...impactResults.impactoDocente.map((d) => ({ area: shortLabel(d.label), media: d.mean })),
]

export default function Resultados() {
  return (
    <div className="space-y-8 fade-in">
      <div>
        <span className="text-xs font-semibold uppercase tracking-widest text-[#b30033]">Capítulo V</span>
        <h1 className="section-title mt-1">Resultados</h1>
        <p className="section-subtitle">
          Análisis descriptivo de los datos recogidos mediante el cuestionario IRKA122. Escala Likert 1–4 (Nada / Poco / Bastante / Mucho).
        </p>
      </div>

      {/* Radar overview — alumnado */}
      <div className="bg-white rounded-2xl border border-gray-100 p-8">
        <h2 className="text-lg font-semibold mb-1">Perfil de Impacto en el Alumnado</h2>
        <p className="text-xs text-gray-400 mb-6">Percepción docente sobre el alumnado movilizado · Bloque C · relativo a H3 — escala 0 a 4</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <ResponsiveContainer width="100%" height={280}>
            <RadarChart data={radarAlumnado}>
              <PolarGrid stroke="#e5e7eb" />
              <PolarAngleAxis dataKey="area" tick={{ fontSize: 10, fill: '#6e6e73' }} />
              <PolarRadiusAxis angle={90} domain={[0, 4]} tick={{ fontSize: 9, fill: '#aeaeb2' }} />
              <Radar name="Media" dataKey="media" stroke="#b30033" fill="#b30033" fillOpacity={0.15} strokeWidth={2} />
              <Tooltip formatter={(v: number) => [`${v}/4`, 'Media']} />
            </RadarChart>
          </ResponsiveContainer>
          <div className="space-y-3">
            {[...radarAlumnado].sort((a, b) => b.media - a.media).map((d) => (
              <div key={d.area}>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs font-medium text-gray-700">{d.area}</span>
                  <span className="text-xs font-semibold text-[#b30033]">{d.media}</span>
                </div>
                <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${(d.media / 4) * 100}%`, background: d.media >= 3.5 ? '#b30033' : d.media >= 3 ? '#d6335c' : '#e87a93' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Radar overview — docente y centro */}
      <div className="bg-white rounded-2xl border border-gray-100 p-8">
        <h2 className="text-lg font-semibold mb-1">Perfil de Impacto en el Profesorado y el Centro</h2>
        <p className="text-xs text-gray-400 mb-6">Cultura organizativa (Bloque B) y práctica docente (Bloque D) · relativo a H1 — escala 0 a 4</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <ResponsiveContainer width="100%" height={280}>
            <RadarChart data={radarDocenteCentro}>
              <PolarGrid stroke="#e5e7eb" />
              <PolarAngleAxis dataKey="area" tick={{ fontSize: 10, fill: '#6e6e73' }} />
              <PolarRadiusAxis angle={90} domain={[0, 4]} tick={{ fontSize: 9, fill: '#aeaeb2' }} />
              <Radar name="Media" dataKey="media" stroke="#7a0022" fill="#7a0022" fillOpacity={0.15} strokeWidth={2} />
              <Tooltip formatter={(v: number) => [`${v}/4`, 'Media']} />
            </RadarChart>
          </ResponsiveContainer>
          <div className="space-y-3">
            {[...radarDocenteCentro].sort((a, b) => b.media - a.media).map((d) => (
              <div key={d.area}>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs font-medium text-gray-700">{d.area}</span>
                  <span className="text-xs font-semibold text-[#7a0022]">{d.media}</span>
                </div>
                <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${(d.media / 4) * 100}%`, background: d.media >= 3.5 ? '#7a0022' : d.media >= 3 ? '#990029' : '#e87a93' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Cultura organizativa */}
      <Accordion title="Bloque B — Cultura Organizativa del Centro" subtitle="Distribución de respuestas Likert · relativo a H1" defaultOpen>
        <LikertBar data={impactResults.culturaOrganizativa} />
        <div className="mt-4 p-4 rounded-xl bg-[#b30033]/5 border border-[#b30033]/10">
          <p className="text-xs text-[#b30033] font-medium">
            Los cambios en la cultura del centro obtienen la media más alta del bloque (3,22/4) y la actitud hacia la internacionalización (3,17) le sigue de cerca: el plano organizativo se mueve de forma homogénea (cambio de primer orden).
          </p>
        </div>
      </Accordion>

      {/* Alumnado */}
      <Accordion title="Bloque C — Impacto en el Alumnado" subtitle="Distribución de respuestas Likert · relativo a H3">
        <LikertBar data={impactResults.impactoAlumnado} />
        <div className="mt-4 p-4 rounded-xl bg-[#b30033]/5 border border-[#b30033]/10">
          <p className="text-xs text-[#8f0028] font-medium">
            Las competencias transversales —aprendizaje intercultural (3,89), motivación (3,53), competencias lingüísticas (3,29)— destacan claramente sobre los resultados académicos convencionales (2,82), confirmando la disociación competencia–rendimiento de H3 (Wilcoxon p &lt; 0,05).
          </p>
        </div>
      </Accordion>

      {/* Docente */}
      <Accordion title="Bloque D — Práctica Docente" subtitle="Cambio en métodos de enseñanza · relativo a H1">
        <LikertBar data={impactResults.impactoDocente} />
        <div className="mt-4 p-4 rounded-xl bg-[#d6335c]/5 border border-[#d6335c]/20">
          <p className="text-xs text-[#7a0022] font-medium">
            El cambio en los métodos de enseñanza (media 2,59/4; 52,9 % responde «Poco») es el ítem de impacto más bajo: la actitud cambia, pero la práctica pedagógica del aula resiste. La brecha de H1 es interna al plano individual (1.er orden vs. 2.º orden), no entre individuo y centro.
          </p>
        </div>
      </Accordion>

      {/* Gestión */}
      <Accordion title="Bloque E — Gestión y Satisfacción" subtitle="Trámites, ayuda institucional y continuidad · relativo a H4">
        <LikertBar data={impactResults.gestionYBarreras} />

        {/* Satisfaction summary */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Muy Satisfactoria', value: 15, total: 18, color: '#b30033' },
            { label: 'Satisfactoria', value: 3, total: 18, color: '#d6335c' },
            { label: 'Recomendarían', value: 18, total: 18, color: '#7a0022' },
            { label: 'Repetirían', value: 18, total: 18, color: '#e87a93' },
          ].map((s) => (
            <div key={s.label} className="text-center p-4 rounded-xl bg-gray-50">
              <div className="text-3xl font-semibold" style={{ color: s.color }}>{s.value}</div>
              <div className="text-xs text-gray-500 mt-1">de {s.total}</div>
              <div className="text-xs font-medium text-gray-600 mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </Accordion>

      {/* Países */}
      <Accordion title="Países Socios — Análisis H2" subtitle="Distribución de colaboraciones por país">
        <ResponsiveContainer width="100%" height={280}>
          <BarChart
            data={projectContext.paises.map((p) => ({ ...p, name: `${p.flag} ${p.name}` }))}
            margin={{ bottom: 30 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
            <XAxis dataKey="name" tick={{ fontSize: 11, fill: '#6e6e73' }} tickLine={false} axisLine={false} angle={-30} textAnchor="end" height={50} />
            <YAxis tick={{ fontSize: 11, fill: '#6e6e73' }} tickLine={false} axisLine={false} />
            <Tooltip
              contentStyle={{ borderRadius: 12, border: '1px solid #e5e7eb', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}
              formatter={(v: number) => [v, 'Proyectos']}
            />
            <Bar dataKey="value" radius={[6, 6, 0, 0]}>
              {projectContext.paises.map((_, i) => (
                <Cell key={i} fill={i === 0 ? '#b30033' : '#f4cdd7'} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </Accordion>
    </div>
  )
}
