'use client'
import { impactResults, demographics, projectContext } from '../data'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  Cell, Legend, PieChart, Pie,
} from 'recharts'

const SCALE_COLORS: Record<string, string> = {
  nada: '#c7e0f9',
  poco: '#5ac8fa',
  bastante: '#2d86c9',
  mucho: '#0071e3',
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

const radarData = [
  { area: 'Cultura Org.', media: 3.25 },
  { area: 'Competencias Ling.', media: 3.82 },
  { area: 'Resultados Acad.', media: 3.33 },
  { area: 'Motivación', media: 3.22 },
  { area: 'Trabajo Equipo', media: 2.72 },
  { area: 'Métodos Docentes', media: 2.24 },
  { area: 'Satisfacción', media: 3.74 },
]

export default function Resultados() {
  return (
    <div className="space-y-8 fade-in">
      <div>
        <span className="text-xs font-semibold uppercase tracking-widest text-[#0071e3]">Capítulo V</span>
        <h1 className="section-title mt-1">Resultados</h1>
        <p className="section-subtitle">
          Análisis descriptivo de los datos recogidos mediante el cuestionario IRKA122. Escala Likert 1–4 (Nada / Poco / Bastante / Mucho).
        </p>
      </div>

      {/* Radar overview */}
      <div className="bg-white rounded-2xl border border-gray-100 p-8">
        <h2 className="text-lg font-semibold mb-1">Perfil de Impacto Global</h2>
        <p className="text-xs text-gray-400 mb-6">Media por dimensión evaluada — escala 0 a 4</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <ResponsiveContainer width="100%" height={280}>
            <RadarChart data={radarData}>
              <PolarGrid stroke="#e5e7eb" />
              <PolarAngleAxis dataKey="area" tick={{ fontSize: 11, fill: '#6e6e73' }} />
              <PolarRadiusAxis angle={90} domain={[0, 4]} tick={{ fontSize: 9, fill: '#aeaeb2' }} />
              <Radar name="Media" dataKey="media" stroke="#0071e3" fill="#0071e3" fillOpacity={0.15} strokeWidth={2} />
              <Tooltip formatter={(v: number) => [`${v}/4`, 'Media']} />
            </RadarChart>
          </ResponsiveContainer>
          <div className="space-y-3">
            {radarData.sort((a, b) => b.media - a.media).map((d) => (
              <div key={d.area}>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs font-medium text-gray-700">{d.area}</span>
                  <span className="text-xs font-semibold text-[#0071e3]">{d.media}</span>
                </div>
                <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${(d.media / 4) * 100}%`, background: d.media >= 3.5 ? '#0071e3' : d.media >= 3 ? '#2d86c9' : '#5ac8fa' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Cultura organizativa */}
      <div className="bg-white rounded-2xl border border-gray-100 p-8">
        <h2 className="text-lg font-semibold mb-1">Bloque B — Cultura Organizativa del Centro</h2>
        <p className="text-xs text-gray-400 mb-6">Distribución de respuestas Likert · relativo a H1</p>
        <LikertBar data={impactResults.culturaOrganizativa} />
        <div className="mt-4 p-4 rounded-xl bg-[#0071e3]/5 border border-[#0071e3]/10">
          <p className="text-xs text-[#0071e3] font-medium">
            El cambio en la actitud del profesorado hacia la internacionalización obtiene la media más alta (3.44/4), mientras que los cambios en cultura institucional (3.11) confirman el impacto diferencial de H1.
          </p>
        </div>
      </div>

      {/* Alumnado */}
      <div className="bg-white rounded-2xl border border-gray-100 p-8">
        <h2 className="text-lg font-semibold mb-1">Bloque C — Impacto en el Alumnado</h2>
        <p className="text-xs text-gray-400 mb-6">Distribución de respuestas Likert · relativo a H3</p>
        <LikertBar data={impactResults.impactoAlumnado} />
        <div className="mt-4 p-4 rounded-xl bg-[#0071e3]/5 border border-[#0071e3]/10">
          <p className="text-xs text-[#0058b0] font-medium">
            Las competencias lingüísticas (media 3.82) destacan sobre los resultados académicos convencionales (3.33), confirmando la disociación competencia–rendimiento prevista en H3.
          </p>
        </div>
      </div>

      {/* Docente */}
      <div className="bg-white rounded-2xl border border-gray-100 p-8">
        <h2 className="text-lg font-semibold mb-1">Bloque D — Práctica Docente</h2>
        <p className="text-xs text-gray-400 mb-6">Cambio en métodos de enseñanza · relativo a H1</p>
        <LikertBar data={impactResults.impactoDocente} />
        <div className="mt-4 p-4 rounded-xl bg-[#2d86c9]/5 border border-[#2d86c9]/20">
          <p className="text-xs text-[#0a4fa6] font-medium">
            El cambio en métodos de enseñanza individuales (media 2.24/4) es el indicador más bajo de todos, lo que refuerza la hipótesis H1 de que el impacto organizativo supera al metodológico individual en el corto plazo.
          </p>
        </div>
      </div>

      {/* Gestión */}
      <div className="bg-white rounded-2xl border border-gray-100 p-8">
        <h2 className="text-lg font-semibold mb-1">Bloque E — Gestión y Satisfacción</h2>
        <p className="text-xs text-gray-400 mb-6">Trámites, ayuda institucional y continuidad · relativo a H4</p>
        <LikertBar data={impactResults.gestionYBarreras} />

        {/* Satisfaction summary */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Muy Satisfactoria', value: 14, total: 18, color: '#0071e3' },
            { label: 'Satisfactoria', value: 3, total: 18, color: '#2d86c9' },
            { label: 'Recomendarían', value: 17, total: 18, color: '#0a4fa6' },
            { label: 'Repetirían', value: 18, total: 18, color: '#5ac8fa' },
          ].map((s) => (
            <div key={s.label} className="text-center p-4 rounded-xl bg-gray-50">
              <div className="text-3xl font-semibold" style={{ color: s.color }}>{s.value}</div>
              <div className="text-xs text-gray-500 mt-1">de {s.total}</div>
              <div className="text-xs font-medium text-gray-600 mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Países */}
      <div className="bg-white rounded-2xl border border-gray-100 p-8">
        <h2 className="text-lg font-semibold mb-1">Países Socios — Análisis H2</h2>
        <p className="text-xs text-gray-400 mb-6">Distribución de colaboraciones por país</p>
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={projectContext.paises} margin={{ bottom: 30 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
            <XAxis dataKey="name" tick={{ fontSize: 11, fill: '#6e6e73' }} tickLine={false} axisLine={false} angle={-30} textAnchor="end" height={50} />
            <YAxis tick={{ fontSize: 11, fill: '#6e6e73' }} tickLine={false} axisLine={false} />
            <Tooltip
              contentStyle={{ borderRadius: 12, border: '1px solid #e5e7eb', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}
              formatter={(v: number) => [v, 'Proyectos']}
            />
            <Bar dataKey="value" radius={[6, 6, 0, 0]}>
              {projectContext.paises.map((_, i) => (
                <Cell key={i} fill={i === 0 ? '#0071e3' : '#c7e0f9'} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
