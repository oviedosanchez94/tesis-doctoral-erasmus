'use client'
import { useState } from 'react'
import { demographics, impactResults, projectContext } from '../data'
import dynamic from 'next/dynamic'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell,
} from 'recharts'

const MapaMadridSVG = dynamic(() => import('./MapaMadridSVG'), { ssr: false })

const COLORS = ['#0071e3', '#0a4fa6', '#2d86c9', '#5ac8fa', '#a8d4f5', '#c7e0f9']

function MetricCard({ value, label, sub }: { value: string; label: string; sub?: string }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6 flex flex-col">
      <span className="text-4xl font-semibold tracking-tight text-[#1d1d1f]">{value}</span>
      <span className="text-sm font-medium text-[#1d1d1f] mt-2">{label}</span>
      {sub && <span className="text-xs text-gray-400 mt-1">{sub}</span>}
    </div>
  )
}

const especialidades = demographics.especialidad

// Stacked bar for competence levels with tooltip on hover
function CompetenceBar({ data, label }: { data: { name: string; value: number }[]; label: string }) {
  const total = data.reduce((s, d) => s + d.value, 0)
  const [hovered, setHovered] = useState<{ name: string; value: number; color: string } | null>(null)
  return (
    <div>
      <p className="text-xs font-medium text-gray-500 mb-3 uppercase tracking-wide">{label}</p>
      <div className="relative flex h-6 rounded-full overflow-hidden gap-px">
        {data.map((d, i) => (
          <div
            key={d.name}
            style={{ width: `${(d.value / total) * 100}%`, background: COLORS[i] }}
            className="transition-opacity hover:opacity-80 cursor-default"
            onMouseEnter={() => setHovered({ name: d.name, value: d.value, color: COLORS[i] })}
            onMouseLeave={() => setHovered(null)}
          />
        ))}
      </div>
      {hovered && (
        <div className="mt-2 flex items-center gap-2">
          <span className="w-2 h-2 rounded-sm flex-shrink-0" style={{ background: hovered.color }} />
          <span className="text-xs font-semibold text-[#1d1d1f]">{hovered.name}:</span>
          <span className="text-xs text-gray-600">{hovered.value} {hovered.value === 1 ? 'persona' : 'personas'}</span>
        </div>
      )}
      {!hovered && (
        <div className="flex flex-wrap gap-x-3 gap-y-1 mt-2">
          {data.map((d, i) => (
            <div key={d.name} className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-sm flex-shrink-0" style={{ background: COLORS[i] }} />
              <span className="text-[11px] text-gray-600">{d.name} <b>{d.value}</b></span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default function Dashboard() {
  return (
    <div className="space-y-8 fade-in">
      {/* Hero */}
      <div className="bg-gradient-to-br from-[#0071e3] to-[#0058b0] rounded-3xl p-8 text-white">
        <div className="flex items-start justify-between flex-wrap gap-4">
          <div className="max-w-2xl">
            <span className="text-[#99c8ff] text-sm font-medium uppercase tracking-widest">Tesis Doctoral</span>
            <h1 className="text-2xl font-semibold mt-2 leading-snug">
              Impacto de las Acciones Erasmus+ KA122 en los Centros de Educación Secundaria del Sur de la Comunidad de Madrid
            </h1>
            <p className="text-blue-100 mt-2 text-sm leading-relaxed">
              Centros de Educación Secundaria del sur de la Comunidad de Madrid · Erasmus+ 2021-2027
            </p>
          </div>
          <div className="flex gap-2 flex-wrap">
            <span className="bg-white/15 backdrop-blur-sm rounded-xl px-4 py-2 text-sm font-medium">KA122</span>
            <span className="bg-white/15 backdrop-blur-sm rounded-xl px-4 py-2 text-sm font-medium">Acción Clave 1</span>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div>
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">Indicadores Clave</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <MetricCard value="18" label="Participantes en la muestra" sub="Docentes y equipo directivo" />
          <MetricCard value="100%" label="Repetirían la experiencia" sub="18 de 18 participantes" />
          <MetricCard value="3.82" label="Media competencias lingüísticas" sub="Escala 1–4 Likert" />
          <MetricCard value="11" label="Países socios distintos" sub="Alemania el más frecuente (72%)" />
        </div>
      </div>

      {/* Mapa */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6">
        <div className="flex items-start justify-between mb-5 flex-wrap gap-2">
          <div>
            <h3 className="text-base font-semibold text-[#1d1d1f] mb-1">Municipios Participantes</h3>
            <p className="text-xs text-gray-400">Centros de la muestra — Sur de la Comunidad de Madrid</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {['Leganés', 'Alcorcón', 'Parla', 'Aranjuez', 'San Martín de Valdeiglesias'].map((m) => (
              <span key={m} className="inline-flex items-center gap-1.5 text-xs font-medium bg-[#0071e3]/10 text-[#0071e3] px-2.5 py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0071e3]" />
                {m}
              </span>
            ))}
          </div>
        </div>
        <MapaMadridSVG />
      </div>

      {/* Row: demographics + especialidades */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Demographics */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6">
          <h3 className="text-base font-semibold text-[#1d1d1f] mb-1">Perfil de la Muestra</h3>
          <p className="text-xs text-gray-400 mb-5">Distribución demográfica de los participantes</p>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="text-xs font-medium text-gray-500 mb-3 uppercase tracking-wide">Sexo</p>
              <ResponsiveContainer width="100%" height={110}>
                <PieChart>
                  <Pie data={demographics.sexo} cx="50%" cy="50%" innerRadius={30} outerRadius={48} dataKey="value" paddingAngle={2}>
                    {demographics.sexo.map((_, i) => <Cell key={i} fill={COLORS[i]} />)}
                  </Pie>
                  <Tooltip formatter={(v: number) => [`${v} (${((v/18)*100).toFixed(0)}%)`, '']} />
                </PieChart>
              </ResponsiveContainer>
              <div className="space-y-1 mt-1">
                {demographics.sexo.map((d, i) => (
                  <div key={d.name} className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: COLORS[i] }} />
                    <span className="text-xs text-gray-600">{d.name}: <b>{d.value}</b></span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-medium text-gray-500 mb-3 uppercase tracking-wide">Tipo de Centro</p>
              <ResponsiveContainer width="100%" height={110}>
                <PieChart>
                  <Pie data={demographics.tipoCentro} cx="50%" cy="50%" innerRadius={30} outerRadius={48} dataKey="value" paddingAngle={2}>
                    {demographics.tipoCentro.map((_, i) => <Cell key={i} fill={COLORS[i + 2]} />)}
                  </Pie>
                  <Tooltip formatter={(v: number) => [`${v} (${((v/18)*100).toFixed(0)}%)`, '']} />
                </PieChart>
              </ResponsiveContainer>
              <div className="space-y-1 mt-1">
                {demographics.tipoCentro.map((d, i) => (
                  <div key={d.name} className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: COLORS[i + 2] }} />
                    <span className="text-xs text-gray-600">{d.name}: <b>{d.value}</b></span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Especialidades */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6">
          <h3 className="text-base font-semibold text-[#1d1d1f] mb-1">Profesorado por Especialidad</h3>
          <p className="text-xs text-gray-400 mb-4">Distribución de participantes según área de docencia</p>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={especialidades} layout="vertical" margin={{ left: 10, right: 30 }}>
              <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f0f0f0" />
              <XAxis type="number" tick={{ fontSize: 11, fill: '#6e6e73' }} tickLine={false} axisLine={false} allowDecimals={false} />
              <YAxis type="category" dataKey="name" tick={{ fontSize: 11, fill: '#1d1d1f' }} tickLine={false} axisLine={false} width={140} />
              <Tooltip contentStyle={{ borderRadius: 12, border: '1px solid #e5e7eb', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }} formatter={(v: number) => [v, 'Docentes']} />
              <Bar dataKey="value" radius={[0, 6, 6, 0]}>
                {especialidades.map((_, i) => <Cell key={i} fill={i === 0 ? '#0071e3' : '#c7e0f9'} />)}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Row: Temática + Competencias */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Temática */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6">
          <h3 className="text-base font-semibold text-[#1d1d1f] mb-1">Temática de los Proyectos</h3>
          <p className="text-xs text-gray-400 mb-4">Distribución por prioridades Erasmus+ 2021-2027</p>
          <div className="flex items-center gap-4">
            <ResponsiveContainer width={160} height={160}>
              <PieChart>
                <Pie
                  data={projectContext.tematica}
                  cx="50%" cy="50%"
                  innerRadius={40}
                  outerRadius={72}
                  dataKey="value"
                  paddingAngle={1}
                >
                  {projectContext.tematica.map((entry, i) => (
                    <Cell key={i} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(v: number) => [v, 'Proyectos']} />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex-1 space-y-2">
              {projectContext.tematica.map((t) => (
                <div key={t.name} className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-sm flex-shrink-0" style={{ background: t.color }} />
                  <span className="text-xs text-gray-700 leading-snug flex-1">{t.name}</span>
                  <span className="text-xs font-semibold text-[#1d1d1f]">{t.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Competencias del profesorado */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6">
          <h3 className="text-base font-semibold text-[#1d1d1f] mb-1">Competencias del Profesorado</h3>
          <p className="text-xs text-gray-400 mb-5">Nivel de inglés, competencia digital y experiencia</p>
          <div className="space-y-5">
            <CompetenceBar data={demographics.nivelIngles} label="Nivel de inglés" />
            <CompetenceBar data={demographics.competenciaDigital} label="Competencia digital docente" />
            <div>
              <p className="text-xs font-medium text-gray-500 mb-3 uppercase tracking-wide">Años de experiencia</p>
              <div className="flex gap-3">
                {demographics.experiencia.map((e, i) => (
                  <div key={e.name} className="flex-1 rounded-xl p-3 text-center" style={{ background: COLORS[i] + '18' }}>
                    <p className="text-2xl font-semibold" style={{ color: COLORS[i] }}>{e.value}</p>
                    <p className="text-[11px] text-gray-500 mt-0.5">{e.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
