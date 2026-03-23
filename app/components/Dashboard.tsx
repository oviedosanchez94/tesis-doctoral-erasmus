'use client'
import { demographics, impactResults, projectContext } from '../data'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend,
} from 'recharts'

const COLORS = ['#0071e3', '#30d158', '#ff9f0a', '#ff453a', '#bf5af2', '#5ac8fa']

function MetricCard({ value, label, sub }: { value: string; label: string; sub?: string }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6 flex flex-col">
      <span className="text-4xl font-semibold tracking-tight text-[#1d1d1f]">{value}</span>
      <span className="text-sm font-medium text-[#1d1d1f] mt-2">{label}</span>
      {sub && <span className="text-xs text-gray-400 mt-1">{sub}</span>}
    </div>
  )
}

const avgCultura = (impactResults.culturaOrganizativa.reduce((s, x) => s + x.mean, 0) / impactResults.culturaOrganizativa.length).toFixed(2)
const avgAlumnado = (impactResults.impactoAlumnado.reduce((s, x) => s + x.mean, 0) / impactResults.impactoAlumnado.length).toFixed(2)

const especialidades = demographics.especialidad

export default function Dashboard() {
  return (
    <div className="space-y-8 fade-in">
      {/* Hero */}
      <div className="bg-gradient-to-br from-[#0071e3] to-[#0058b0] rounded-3xl p-8 text-white">
        <div className="flex items-start justify-between flex-wrap gap-4">
          <div className="max-w-2xl">
            <span className="text-[#99c8ff] text-sm font-medium uppercase tracking-widest">Tesis Doctoral</span>
            <h1 className="text-2xl font-semibold mt-2 leading-snug">
              Impacto de las Acciones KA122 del Programa Erasmus+
            </h1>
            <p className="text-blue-100 mt-2 text-sm leading-relaxed">
              Centros de Educación Secundaria y Formación Profesional del sur de la Comunidad de Madrid · Erasmus+ 2021-2027
            </p>
          </div>
          <div className="flex gap-2 flex-wrap">
            <span className="bg-white/15 backdrop-blur-sm rounded-xl px-4 py-2 text-sm font-medium">N = 18</span>
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

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Demographics */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6">
          <h3 className="text-base font-semibold text-[#1d1d1f] mb-1">Perfil de la Muestra</h3>
          <p className="text-xs text-gray-400 mb-5">Distribución demográfica de los participantes</p>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="text-xs font-medium text-gray-500 mb-3 uppercase tracking-wide">Sexo</p>
              <ResponsiveContainer width="100%" height={130}>
                <PieChart>
                  <Pie data={demographics.sexo} cx="50%" cy="50%" innerRadius={35} outerRadius={55} dataKey="value" paddingAngle={2}>
                    {demographics.sexo.map((_, i) => <Cell key={i} fill={COLORS[i]} />)}
                  </Pie>
                  <Tooltip formatter={(v: number) => [`${v} (${((v/18)*100).toFixed(0)}%)`, '']} />
                </PieChart>
              </ResponsiveContainer>
              <div className="space-y-1 mt-1">
                {demographics.sexo.map((d, i) => (
                  <div key={d.name} className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: COLORS[i] }}></span>
                    <span className="text-xs text-gray-600">{d.name}: <b>{d.value}</b></span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-medium text-gray-500 mb-3 uppercase tracking-wide">Tipo de Centro</p>
              <ResponsiveContainer width="100%" height={130}>
                <PieChart>
                  <Pie data={demographics.tipoCentro} cx="50%" cy="50%" innerRadius={35} outerRadius={55} dataKey="value" paddingAngle={2}>
                    {demographics.tipoCentro.map((_, i) => <Cell key={i} fill={COLORS[i + 2]} />)}
                  </Pie>
                  <Tooltip formatter={(v: number) => [`${v} (${((v/18)*100).toFixed(0)}%)`, '']} />
                </PieChart>
              </ResponsiveContainer>
              <div className="space-y-1 mt-1">
                {demographics.tipoCentro.map((d, i) => (
                  <div key={d.name} className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: COLORS[i + 2] }}></span>
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
          <p className="text-xs text-gray-400 mb-5">Distribución de participantes según área de docencia</p>
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={especialidades} layout="vertical" margin={{ left: 10, right: 30 }}>
              <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f0f0f0" />
              <XAxis type="number" tick={{ fontSize: 11, fill: '#6e6e73' }} tickLine={false} axisLine={false} allowDecimals={false} />
              <YAxis type="category" dataKey="name" tick={{ fontSize: 11, fill: '#1d1d1f' }} tickLine={false} axisLine={false} width={140} />
              <Tooltip
                contentStyle={{ borderRadius: 12, border: '1px solid #e5e7eb', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}
                formatter={(v: number) => [v, 'Docentes']}
              />
              <Bar dataKey="value" radius={[0, 6, 6, 0]}>
                {especialidades.map((_, i) => (
                  <Cell key={i} fill={i === 0 ? '#0071e3' : '#c7e0f9'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Impact Overview */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6">
        <h3 className="text-base font-semibold text-[#1d1d1f] mb-1">Resumen de Impacto por Dimensión</h3>
        <p className="text-xs text-gray-400 mb-6">Media en escala Likert 1–4 por área temática evaluada</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: 'Cultura Organizativa', mean: parseFloat(avgCultura), color: '#0071e3', max: 4 },
            { label: 'Impacto en Alumnado', mean: parseFloat(avgAlumnado), color: '#30d158', max: 4 },
            { label: 'Metodología Docente', mean: 2.48, color: '#ff9f0a', max: 4 },
            { label: 'Gestión y Satisfacción', mean: 3.74, color: '#bf5af2', max: 4 },
          ].map((item) => (
            <div key={item.label} className="flex flex-col">
              <div className="flex justify-between items-baseline mb-2">
                <span className="text-xs font-medium text-gray-700">{item.label}</span>
                <span className="text-lg font-semibold" style={{ color: item.color }}>{item.mean}</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{ width: `${(item.mean / item.max) * 100}%`, background: item.color }}
                />
              </div>
              <span className="text-[10px] text-gray-400 mt-1">sobre 4.0</span>
            </div>
          ))}
        </div>
      </div>

      {/* Themes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl border border-gray-100 p-6">
          <h3 className="text-base font-semibold text-[#1d1d1f] mb-1">Temática de los Proyectos</h3>
          <p className="text-xs text-gray-400 mb-4">Distribución por prioridades Erasmus+ 2021-2027</p>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={projectContext.tematica}
                cx="50%" cy="50%"
                outerRadius={80}
                dataKey="value"
                label={({ name, value }) => `${value}`}
                labelLine={false}
              >
                {projectContext.tematica.map((entry, i) => (
                  <Cell key={i} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(v: number) => [v, 'Proyectos']} />
              <Legend formatter={(value) => <span style={{ fontSize: 11, color: '#1d1d1f' }}>{value}</span>} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 p-6">
          <h3 className="text-base font-semibold text-[#1d1d1f] mb-1">Factores Contextuales</h3>
          <p className="text-xs text-gray-400 mb-5">Brexit y COVID-19 en el desarrollo de proyectos</p>
          <div className="space-y-4">
            <div>
              <p className="text-xs font-medium text-gray-500 mb-2 uppercase tracking-wide">Influencia del Brexit</p>
              <div className="flex gap-2">
                {projectContext.brexit.map((b, i) => (
                  <div key={b.name} className="flex-1 text-center">
                    <div className="text-2xl font-semibold" style={{ color: COLORS[i] }}>{b.value}</div>
                    <div className="text-[10px] text-gray-500 mt-0.5">{b.name}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="border-t border-gray-50 pt-4">
              <p className="text-xs font-medium text-gray-500 mb-2 uppercase tracking-wide">Incidencia del COVID-19</p>
              <div className="flex gap-2">
                {projectContext.covid.map((c, i) => (
                  <div key={c.name} className="flex-1 text-center">
                    <div className="text-2xl font-semibold" style={{ color: COLORS[i + 1] }}>{c.value}</div>
                    <div className="text-[10px] text-gray-500 mt-0.5">{c.name}</div>
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
