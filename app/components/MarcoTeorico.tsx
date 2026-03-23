'use client'
import { theorySections } from '../data'

export default function MarcoTeorico() {
  return (
    <div className="space-y-8 fade-in">
      {/* Header */}
      <div>
        <span className="text-xs font-semibold uppercase tracking-widest text-[#0071e3]">Parte I</span>
        <h1 className="section-title mt-1">Marco Teórico</h1>
        <p className="section-subtitle">
          Evolución histórica de los programas educativos europeos, marco normativo de competencias clave y revisión sistemática de la literatura.
        </p>
      </div>

      {/* Chapter I: Timeline */}
      <div className="bg-white rounded-2xl border border-gray-100 p-8">
        <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">{theorySections[0].chapter}</span>
        <h2 className="text-xl font-semibold mt-1 mb-1">{theorySections[0].title}</h2>
        <p className="text-sm text-gray-500 mb-8">{theorySections[0].subtitle}</p>

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-100" />
          <div className="space-y-6">
            {(theorySections[0].periods ?? []).map((p, i) => (
              <div key={i} className="relative flex gap-6 pl-12">
                <div className="absolute left-2.5 top-1 w-3 h-3 rounded-full bg-[#0071e3] border-2 border-white shadow-sm" />
                <div>
                  <span className="inline-block bg-[#0071e3]/10 text-[#0071e3] text-xs font-semibold rounded-lg px-2.5 py-1 mb-1.5">{p.year}</span>
                  <p className="text-sm text-gray-700 leading-relaxed">{p.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Chapter II: Key Competences */}
      <div className="bg-white rounded-2xl border border-gray-100 p-8">
        <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">{theorySections[1].chapter}</span>
        <h2 className="text-xl font-semibold mt-1 mb-1">{theorySections[1].title}</h2>
        <p className="text-sm text-gray-500 mb-6">{theorySections[1].subtitle}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {(theorySections[1].competencias ?? []).map((comp, i) => (
            <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 hover:bg-blue-50/50 transition-colors">
              <span className="w-7 h-7 flex items-center justify-center rounded-full bg-[#0071e3] text-white text-xs font-bold flex-shrink-0">
                {i + 1}
              </span>
              <span className="text-sm text-gray-700 leading-snug">{comp}</span>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 rounded-xl bg-blue-50 border border-blue-100">
          <p className="text-sm text-[#0071e3] font-medium">Recomendación del Consejo de la UE (2018)</p>
          <p className="text-xs text-blue-600 mt-1 leading-relaxed">
            Las 8 competencias clave estructuran implícitamente los objetivos de desarrollo del programa Erasmus+ y constituyen el marco normativo de referencia para evaluar el impacto de las acciones KA122.
          </p>
        </div>
      </div>

      {/* Chapter III: Biases */}
      <div className="bg-white rounded-2xl border border-gray-100 p-8">
        <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">{theorySections[2].chapter}</span>
        <h2 className="text-xl font-semibold mt-1 mb-1">{theorySections[2].title}</h2>
        <p className="text-sm text-gray-500 mb-6">{theorySections[2].subtitle}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {(theorySections[2].biases ?? []).map((bias, i) => (
            <div key={i} className="rounded-xl border border-gray-100 p-5 hover:border-[#0071e3]/30 hover:shadow-sm transition-all">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#0071e3]/10 text-[#0071e3] text-sm font-bold mb-3">
                {i + 1}
              </div>
              <h3 className="text-sm font-semibold text-[#1d1d1f] mb-2">{bias.name}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{bias.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 rounded-xl bg-[#0a4fa6]/5 border border-[#0a4fa6]/15">
          <p className="text-sm text-[#0a4fa6] font-medium">Dimensión territorial específica</p>
          <p className="text-xs text-[#2d86c9] mt-1 leading-relaxed">
            Los centros del sur de la Comunidad de Madrid presentan mayor diversidad cultural del alumnado, entornos socioeconómicos más heterogéneos y trayectoria más limitada de participación en programas europeos. Esta especificidad no ha sido objeto de análisis en ningún estudio previo sobre KA122.
          </p>
        </div>
      </div>

      {/* Context box */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { title: 'Presupuesto Erasmus+ 2021-2027', value: '26.200 M€', sub: 'El mayor programa educativo de la historia de la UE' },
          { title: 'Sesgo educativo dominante', value: 'Ed. Superior', sub: '84% estudios robustos circunscritos a universidades' },
          { title: 'Investigación KA122 existente', value: 'Incipiente', sub: 'Primera aproximación empírica sistemática al contexto' },
        ].map((stat) => (
          <div key={stat.title} className="bg-white rounded-2xl border border-gray-100 p-6">
            <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">{stat.title}</p>
            <p className="text-2xl font-semibold text-[#1d1d1f] mt-2">{stat.value}</p>
            <p className="text-xs text-gray-500 mt-1">{stat.sub}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
