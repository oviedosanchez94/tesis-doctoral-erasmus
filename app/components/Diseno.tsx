'use client'

const preguntasInvestigacion = [
  {
    n: 'PG',
    q: '¿Qué impacto directo y verificable genera la participación en una acción KA122 del programa Erasmus+ en los centros de educación secundaria y FP del sur de la Comunidad de Madrid?',
    type: 'general',
  },
  {
    n: 'PE1',
    q: '¿Cuál es el perfil de conocimiento previo del profesorado sobre el programa Erasmus+ y qué factores contextuales han condicionado el desarrollo de las acciones KA122?',
    type: 'specific',
  },
  {
    n: 'PE2',
    q: '¿Qué cambios produce la participación en una acción KA122 en la cultura organizativa del centro?',
    type: 'specific',
  },
  {
    n: 'PE3',
    q: '¿Cómo ha incidido la acción KA122 en las competencias transversales del alumnado y en su rendimiento académico?',
    type: 'specific',
  },
  {
    n: 'PE4',
    q: '¿Qué cambios ha generado la movilidad en las prácticas docentes y en los métodos de enseñanza?',
    type: 'specific',
  },
  {
    n: 'PE5',
    q: '¿Cuáles son las principales dificultades percibidas y el nivel de satisfacción con la experiencia KA122?',
    type: 'specific',
  },
]

const metodologia = [
  { step: '1', title: 'Paradigma post-positivista', desc: 'Asume la existencia de una realidad objetiva aproximable de forma sistemática, reconociendo que toda observación está cargada de teoría.' },
  { step: '2', title: 'Enfoque mixto', desc: 'Cuantitativo (escala Likert) como eje principal + cualitativo (entrevistas semiestructuradas) en función complementaria y de profundización.' },
  { step: '3', title: 'Instrumento IRKA122', desc: 'Cuestionario diseñado ad hoc para capturar el impacto institucional de las KA122. Validado por panel de expertos.' },
  { step: '4', title: 'Muestra intencional', desc: 'N=18 docentes y directivos de centros de secundaria y FP del sur de la Comunidad de Madrid con participación en KA122.' },
  { step: '5', title: 'Análisis de datos', desc: 'Estadística descriptiva (medias, distribución Likert) + análisis de contenido temático de las respuestas abiertas.' },
]

export default function Diseno() {
  return (
    <div className="space-y-8 fade-in">
      <div>
        <span className="text-xs font-semibold uppercase tracking-widest text-[#b30033]">Capítulo IV</span>
        <h1 className="section-title mt-1">Diseño de la Investigación</h1>
        <p className="section-subtitle">
          Planteamiento del problema, preguntas de investigación, hipótesis de trabajo y metodología mixta empleada.
        </p>
      </div>

      {/* Problem statement */}
      <div className="bg-white rounded-2xl border border-gray-100 p-8">
        <h2 className="text-lg font-semibold mb-4">Planteamiento del Problema</h2>
        <div className="prose-sm text-gray-600 space-y-3 leading-relaxed">
          <p>
            Se desconoce en qué medida la participación en una acción KA122 genera transformaciones sostenidas en la <strong className="text-[#1d1d1f]">cultura organizativa</strong>, las <strong className="text-[#1d1d1f]">prácticas pedagógicas</strong> y el <strong className="text-[#1d1d1f]">desarrollo competencial</strong> de los centros de educación secundaria y FP del sur de la Comunidad de Madrid.
          </p>
          <p>
            La convergencia de tres sesgos estructurales identificados en la literatura —nivel educativo, escala individual y ciclo programático— con la especificidad del contexto territorial define con precisión el espacio que esta investigación ocupa.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-3">
          {[
            { color: '#b30033', label: 'Sesgo nivel educativo', sub: 'Literatura dominante centrada en Ed. Superior' },
            { color: '#d6335c', label: 'Sesgo escala individual', sub: 'El participante como unidad, no el centro' },
            { color: '#7a0022', label: 'Sesgo ciclo programático', sub: 'KA122 no existía antes de 2021; sin bibliografía consolidada (2021-2025)' },
          ].map((b) => (
            <div key={b.label} className="rounded-xl p-4 border" style={{ borderColor: b.color + '40', background: b.color + '08' }}>
              <div className="w-3 h-3 rounded-full mb-2" style={{ background: b.color }} />
              <p className="text-sm font-semibold text-[#1d1d1f]">{b.label}</p>
              <p className="text-xs text-gray-500 mt-1">{b.sub}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Research questions */}
      <div className="bg-white rounded-2xl border border-gray-100 p-8">
        <h2 className="text-lg font-semibold mb-6">Preguntas de Investigación</h2>
        <div className="space-y-3">
          {preguntasInvestigacion.map((pq) => (
            <div
              key={pq.n}
              className={`rounded-xl p-4 flex gap-4 ${
                pq.type === 'general'
                  ? 'bg-[#b30033]/5 border border-[#b30033]/20'
                  : 'bg-gray-50 border border-gray-100'
              }`}
            >
              <span
                className={`text-xs font-bold px-2 py-1 rounded-lg flex-shrink-0 h-fit ${
                  pq.type === 'general'
                    ? 'bg-[#b30033] text-white'
                    : 'bg-gray-200 text-gray-600'
                }`}
              >
                {pq.n}
              </span>
              <p className="text-sm text-gray-700 leading-relaxed">{pq.q}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Methodology */}
      <div className="bg-white rounded-2xl border border-gray-100 p-8">
        <h2 className="text-lg font-semibold mb-6">Metodología</h2>
        <div className="space-y-4">
          {metodologia.map((m) => (
            <div key={m.step} className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-[#b30033] text-white text-sm font-bold flex items-center justify-center flex-shrink-0">
                {m.step}
              </div>
              <div className="pt-1">
                <p className="text-sm font-semibold text-[#1d1d1f]">{m.title}</p>
                <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Instrument */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white rounded-2xl border border-gray-100 p-6">
          <h3 className="text-base font-semibold mb-4">Instrumento IRKA122</h3>
          <div className="space-y-3">
            {[
              { bloque: 'Bloque A', title: 'Conocimiento y contexto', items: 'Perfil docente, Erasmus+, eTwinning' },
              { bloque: 'Bloque B', title: 'Cultura organizativa del centro', items: 'Cambios institucionales post-movilidad' },
              { bloque: 'Bloque C', title: 'Impacto en el alumnado', items: 'Competencias, resultados académicos' },
              { bloque: 'Bloque D', title: 'Práctica docente', items: 'Métodos de enseñanza, TIC' },
              { bloque: 'Bloque E', title: 'Satisfacción y continuidad', items: 'Trámites, recomendación, repetición' },
            ].map((b) => (
              <div key={b.bloque} className="flex gap-3 items-start">
                <span className="text-[10px] font-semibold bg-gray-100 text-gray-600 px-2 py-1 rounded-md flex-shrink-0">{b.bloque}</span>
                <div>
                  <p className="text-sm font-medium text-[#1d1d1f]">{b.title}</p>
                  <p className="text-xs text-gray-400">{b.items}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 p-6">
          <h3 className="text-base font-semibold mb-4">Muestra y Contexto</h3>
          <div className="space-y-3">
            {[
              { label: 'Tamaño muestral', value: 'N = 18' },
              { label: 'Tipo de muestreo', value: 'Intencional' },
              { label: 'Territorio', value: 'Sur Com. Madrid' },
              { label: 'Nivel educativo', value: 'Secundaria / FP' },
              { label: 'Acción', value: 'KA122 (2021-2027)' },
              { label: 'Instrumento', value: 'Escala Likert + entrevistas' },
              { label: 'Período recogida', value: '29 nov. 2024 – 27 ene. 2025' },
            ].map((row) => (
              <div key={row.label} className="flex justify-between items-center py-1.5 border-b border-gray-50 last:border-0">
                <span className="text-xs text-gray-500">{row.label}</span>
                <span className="text-xs font-semibold text-[#1d1d1f]">{row.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
