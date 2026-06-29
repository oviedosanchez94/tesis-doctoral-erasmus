'use client'
import { useState } from 'react'

const timeline = [
  { year: '1957', label: 'Tratado de Roma — el "vacío inicial"', desc: 'La CEE se fundó con enfoque económico. La educación general quedó al margen del Tratado; solo la formación profesional fue incluida explícitamente (art. 128).' },
  { year: '1963–1973', label: 'Primeros pasos y el Informe Janne', desc: 'Decisión del Consejo (1963) sobre formación profesional y educación general. La Cumbre de La Haya (1969) y la de París (1972) impulsan una "comunidad con rostro humano". En 1973, Henri Janne presenta el informe "Para una política comunitaria de la educación".' },
  { year: '1976–1980', label: 'Resolución de cooperación educativa y Eurydice', desc: 'La Resolución de 1976 identifica siete áreas prioritarias, entre ellas la movilidad. En septiembre de 1980 se lanza la Red Eurydice de información educativa.' },
  { year: '1985', label: 'Sentencia Gravier — base jurídica', desc: 'El Tribunal de Justicia de las CE amplía la definición de "formación profesional" para incluir la educación superior, proporcionando la base legal de Comett, Erasmus, Petra, Lingua, Force y Youth.' },
  { year: '1986–1990', label: 'Comett, Erasmus, Petra, Lingua, Force, Tempus, Jean Monnet', desc: 'Comett (1986) y Petra (1988-1994) en formación profesional; Erasmus (1987) lanza la movilidad universitaria con 3.244 estudiantes en su primer año; Lingua y Force (1990) en lenguas y formación continua; Tempus (1990) responde a la caída del Muro; la Acción Jean Monnet (1990) impulsa la enseñanza sobre integración europea.' },
  { year: '1992', label: 'Tratado de Maastricht', desc: 'La educación se incorpora por primera vez al derecho primario de la UE (arts. 126 y 127), sin armonizar los sistemas nacionales, bajo el principio de subsidiariedad.' },
  { year: '1994–1995', label: 'Sócrates y Leonardo da Vinci', desc: 'Tras el fin de los siete programas sectoriales, se aprueban Sócrates (educación escolar y superior, incluye Comenius, Erasmus, Grundtvig, Lingua, Minerva) y Leonardo da Vinci (formación profesional).' },
  { year: '1995–2000', label: 'Libro Blanco y Estrategia de Lisboa', desc: '"Enseñanza y aprendizaje: hacia la sociedad del aprendizaje" (1995) fija cinco objetivos estratégicos. La Estrategia de Lisboa (2000) consolida la sociedad del conocimiento como prioridad (ET2010).' },
  { year: '2007–2013', label: 'Programa de Aprendizaje Permanente (PAP)', desc: 'Presupuesto de 6.970 M€, integrando Comenius, Erasmus, Leonardo da Vinci y Grundtvig. Su evaluación ex post identificó las limitaciones (fragmentación, sesgo de selección, impacto institucional poco documentado) que después orientarían el diseño de Erasmus+ y de las acciones KA122.' },
  { year: '2014–2020', label: 'Erasmus+ (Reglamento UE n.º 1288/2013)', desc: 'Unifica los programas sectoriales bajo una sola marca: 14.774 M€, estructurado en KA1 (movilidad), KA2 (cooperación) y KA3 (reforma de políticas). El Erasmus Impact Study (2014, n>75.000, 34 países) documentó efectos positivos en empleabilidad e identidad europea.' },
  { year: '2020', label: 'COVID-19', desc: 'Más del 60% de las movilidades fueron suspendidas o interrumpidas en el punto álgido de la pandemia (ESN, 2020). La respuesta institucional incorporó la movilidad mixta de forma permanente en el ciclo siguiente.' },
  { year: '2021–2027', label: 'Erasmus+ y las acciones KA122', desc: 'Presupuesto de 26.200 M€ (+77%), con cuatro prioridades horizontales: inclusión y diversidad, transformación digital, sostenibilidad ambiental y participación ciudadana activa. Se introduce la Acreditación Erasmus; KA122 es la vía para centros sin acreditación previa.' },
  { year: '2016–2025', label: 'Brexit y el Turing Scheme 🇬🇧', desc: 'El Reino Unido sale de Erasmus+ el 1 de enero de 2021. El Turing Scheme, unilateral y sin reciprocidad, financia la salida pero no genera flujos de entrada. El RU se reincorpora como país asociado a partir de 2024 (acceso pleno desde 2025-2026).' },
]

const prioridades2027 = [
  { icon: '◉', title: 'Inclusión y diversidad', color: '#b30033', desc: 'Mecanismos financieros específicos ("top-ups") para reducir barreras de acceso de colectivos con menos oportunidades.' },
  { icon: '◎', title: 'Sostenibilidad ambiental', color: '#34c759', desc: 'Vinculada al Pacto Verde Europeo. Es la prioridad con menor impacto documentado hasta la fecha (Comisión Europea, 2025a).' },
  { icon: '◈', title: 'Transformación digital', color: '#e87a93', desc: 'La de mayor impacto visible: movilidades mixtas, eTwinning y Erasmus+ Platform consolidadas tras la pandemia.' },
  { icon: '◆', title: 'Participación ciudadana activa', color: '#ff9f0a', desc: 'Implicación en la vida democrática y en los debates sobre el futuro de Europa.' },
]

const ka122vsKa121 = [
  { tipo: 'KA122', dur: '6–18 meses', desc: 'Para centros SIN acreditación previa. Hasta 30 participantes por proyecto. Carácter piloto/exploratorio: primer ciclo de movilidad antes de comprometerse con proyectos mayores.' },
  { tipo: 'KA121', dur: 'Plurianual', desc: 'Para centros CON Acreditación Erasmus, sobre la base de un Plan de Internacionalización. Acceso simplificado y recurrente, sin concurrir proyecto a proyecto.' },
]

const ka122modalidades = [
  { tipo: 'Cursos y Formación', dur: '2–30 días', desc: 'Seminarios o cursos estructurados en el extranjero para el personal docente, en metodologías pedagógicas, competencias digitales o inclusión.' },
  { tipo: 'Job Shadowing', dur: '2–60 días', desc: 'Inmersión en la práctica diaria de una organización socia. Observación directa e intercambio de buenas prácticas.' },
  { tipo: 'Estancias de Docencia', dur: 'Variable', desc: 'El personal docente imparte clases en una institución socia extranjera.' },
  { tipo: 'Movilidad de Grupos (alumnado)', dur: 'Mín. 2 días', desc: 'Participación conjunta de clases o grupos en actividades de aprendizaje en el extranjero. En los proyectos de esta tesis, la movilidad la protagonizó el alumnado.' },
  { tipo: 'Movilidad Individual (alumnado)', dur: 'Variable', desc: 'Desplazamiento individual de estudiantes a instituciones europeas de acogida.' },
  { tipo: 'Prácticas FP', dur: 'Variable', desc: 'Estancias de prácticas para estudiantes de Formación Profesional en contextos laborales reales de otros países europeos.' },
]

const cap2clusters = [
  {
    id: 'cambio',
    title: 'Cómo cambia el docente',
    subtitle: 'Secuencia temporal del cambio profesional',
    color: '#b30033',
    icon: '◉',
    nodes: [
      { autor: 'Guskey', year: '2002', idea: 'La práctica precede a la creencia', desc: 'Las creencias del docente no cambian primero: son los resultados positivos observados en el aula los que consolidan después el cambio de creencias.', rel: null },
      { autor: 'Clarke y Hollingsworth', year: '2002', idea: '4 dominios interconectados', desc: 'Personal, práctica, consecuencias y externo. Sin el "ciclo de mediación" entre dominios, el estímulo externo (la movilidad) no se traduce en cambio pedagógico.', rel: 'sitúa el mecanismo de Guskey dentro de un ciclo de 4 dominios' },
      { autor: 'Mezirow', year: '1997', idea: 'Experiencias desorientadoras', desc: 'El aprendizaje adulto significativo exige revisar los propios marcos de referencia. La movilidad puede ser una experiencia desorientadora, pero solo con reflexión sostenida.', rel: 'aporta el disparador: una experiencia que rompe el marco previo' },
      { autor: 'Hargreaves y Fullan', year: '2012', idea: 'Capital profesional: tres componentes', desc: 'Capital humano (competencias individuales), capital social (redes colaborativas entre docentes) y capital decisional (juicios profesionales sólidos). La movilidad contribuye simultáneamente a los tres: enriquece el repertorio individual, alimenta las redes transnacionales y fortalece la capacidad de juicio.', rel: 'escala el impacto individual al plano colectivo: el capital se construye en red' },
      { autor: 'Mouraz et al.', year: '2024', idea: 'Agencia curricular y transferencia organizativa', desc: 'Los participantes experimentan transformaciones competenciales de forma directa e inmediata, pero la transferencia de dichos aprendizajes al conjunto de la organización es un proceso mediado por variables relacionales, estructurales e institucionales que exceden la capacidad individual del docente.', rel: 'distingue entre impacto individual inmediato e impacto organizativo mediado' },
    ],
  },
  {
    id: 'intercultural',
    title: 'Competencia intercultural: ¿cuánto cala?',
    subtitle: 'Una definición y su contrapunto crítico',
    color: '#7a0022',
    icon: '◈',
    nodes: [
      { autor: 'Byram y Feng', year: '2004', idea: '5 componentes de la competencia', desc: 'Conocimiento propio y ajeno, habilidades de interpretación, habilidades de interacción, actitud de apertura y evaluación crítica de las propias perspectivas culturales.', rel: null },
      { autor: 'Dervin y Dirba', year: '2006', idea: 'Interculturalidad "sólida" vs. "líquida"', desc: 'La interculturalidad "sólida" (esencialista) concibe la cultura como un conjunto fijo de rasgos nacionales. Frente a ella, la interculturalidad "líquida" entiende identidad y cultura como construcciones en cambio constante. El riesgo de la movilidad corta es quedarse en una "sólida": adquirir estereotipos positivos sin alcanzar la reflexividad crítica (véase también Dervin, 2009).', rel: 'cuestiona si el 5º componente de Byram y Feng se cumple en estancias breves' },
      { autor: 'Hoskins y Deakin Crick', year: '2010', idea: 'Ciudadanía activa y dimensión europea', desc: 'La movilidad proyecta disposiciones cívicas más allá del marco nacional hacia la construcción de una comunidad política europea. El docente pasa a concebirse como educador europeo comprometido con los valores del proyecto educativo común; el alumnado refuerza su sentimiento de pertenencia europea.', rel: 'añade la dimensión cívica y la identidad europea al modelo de Byram y Feng' },
    ],
  },
  {
    id: 'institucional',
    title: 'De la persona a la institución',
    subtitle: 'De la educación superior a la escuela',
    color: '#d6335c',
    icon: '◆',
    nodes: [
      { autor: 'Hudzik', year: '2011', idea: 'Internacionalización integral', desc: 'Compromiso, confirmado por la acción, de infundir perspectivas internacionales en toda la vida institucional, no solo en actividades discretas. Formulado para educación superior.', rel: null },
      { autor: 'Cattaruzzo y Corò', year: '2023', idea: '3 dimensiones escolares', desc: 'Curricular, relacional y cultural. Un centro de secundaria puede tener una dimensión desarrollada sin las otras dos.', rel: 'traslada el concepto de Hudzik a secundaria y lo descompone en 3 dimensiones' },
    ],
  },
]

const cap3modelo = [
  { nivel: 'Individual', desc: 'La movilidad produce aprendizaje directo en el alumnado que se desplaza (competencial, lingüístico, intercultural, motivacional) y, de forma mediada, en el profesorado acompañante: transformación competencial, disposicional e identitaria.' },
  { nivel: 'Organizativo', desc: 'El cambio individual se convierte en cambio organizativo a través de 4 mecanismos de profundidad creciente y probabilidad decreciente: diseminación → experimentación → institucionalización → transformación cultural.' },
  { nivel: 'Del aula', desc: 'Confluyen docente y alumnado. El alumnado tiene dos dimensiones de rendimiento —competencial y académico— que pueden disociarse: la mejora competencial no implica necesariamente mejora académica equivalente.' },
  { nivel: 'Sistémico', desc: 'Las políticas educativas nacionales, los incentivos de Erasmus+ y las redes de colaboración entre centros condicionan, desde fuera del centro, la capacidad de aprendizaje organizativo.' },
]

const sesgos = [
  { name: 'Sesgo de nivel educativo', desc: 'Los estudios más robustos (Erasmus Impact Study, Souto-Otero et al., 2021) se circunscriben a la educación superior, no extrapolables sin más a secundaria y FP.' },
  { name: 'Sesgo de escala individual', desc: 'La literatura privilegia al participante como unidad de análisis, ignorando el impacto organizativo sobre el centro —objetivo prioritario explícito del Reglamento (UE) 2021/817.' },
  { name: 'Sesgo de ciclo programático', desc: 'La práctica totalidad de la investigación existente analiza el impacto de movilidades en el marco del ciclo 2014-2020 o de ciclos anteriores, sin considerar las especificidades del diseño renovado del programa 2021-2027 y, en particular, las características y los desafíos específicos de las acciones KA122 como modalidad de acceso para centros sin experiencia previa.' },
]

const competencias2006 = [
  'Comunicación en la lengua materna',
  'Comunicación en lenguas extranjeras',
  'Competencia matemática y competencias básicas en ciencia y tecnología',
  'Competencia digital',
  'Aprender a aprender',
  'Competencias sociales y cívicas',
  'Sentido de iniciativa y espíritu empresarial',
  'Conciencia y expresión culturales',
]

const competencias2018 = [
  'Competencia en lectura, escritura y comunicación',
  'Competencia multilingüe',
  'Competencia matemática y competencia en ciencia, tecnología e ingeniería',
  'Competencia digital',
  'Competencia personal, social y de aprender a aprender',
  'Competencia ciudadana',
  'Competencia emprendedora',
  'Competencia en conciencia y expresión culturales',
]

const cambios2018 = [
  { titulo: 'Personal, social y de aprender a aprender', desc: '"Aprender a aprender" se transforma para incluir regulación emocional y bienestar psicológico, antes en un segundo plano.' },
  { titulo: 'Competencia digital ampliada', desc: 'De manejo básico de herramientas a seguridad digital, participación ciudadana online, creación de contenidos y gestión crítica de la información.' },
  { titulo: 'Ciudadanía y sostenibilidad', desc: 'La competencia ciudadana incorpora explícitamente la sostenibilidad ambiental y los ODS, antes ausentes en 2006.' },
  { titulo: 'Continuidad de fondo', desc: 'Ambos marcos comparten el enfoque de aprendizaje permanente y reconocen el valor de los contextos no formales e informales —el fundamento que legitima la movilidad como espacio de desarrollo competencial.' },
]

export default function MarcoTeorico() {
  const [openPeriod, setOpenPeriod] = useState<number | null>(null)
  const [tab2018, setTab2018] = useState<'2006' | '2018' | 'cambios'>('2006')

  return (
    <div className="space-y-8 fade-in">
      {/* Header */}
      <div>
        <span className="text-xs font-semibold uppercase tracking-widest text-[#b30033]">Parte I</span>
        <h1 className="section-title mt-1">Marco Teórico</h1>
        <p className="section-subtitle">
          Capítulo I: la dimensión educativa del proyecto europeo. Capítulo II: movilidad internacional e impacto en la comunidad educativa. Capítulo III: del aprendizaje individual al cambio organizativo.
        </p>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { label: 'Tratado de Roma', value: '1957', sub: 'inicio del "vacío inicial"' },
          { label: 'Primer Erasmus', value: '1987', sub: '3.244 estudiantes año 1' },
          { label: 'Presupuesto 2021-27', value: '26.200 M€', sub: 'Mayor programa educativo UE' },
          { label: 'Sesgos identificados', value: '3', sub: 'Nivel educativo, escala individual, ciclo programático' },
        ].map((s) => (
          <div key={s.label} className="bg-white rounded-2xl border border-gray-100 p-4 md:p-5">
            <p className="text-[11px] text-gray-400 font-medium uppercase tracking-wide leading-tight">{s.label}</p>
            <p className="text-xl md:text-2xl font-semibold text-[#1d1d1f] mt-1">{s.value}</p>
            <p className="text-[11px] text-gray-400 mt-0.5 leading-tight">{s.sub}</p>
          </div>
        ))}
      </div>

      {/* ── CAPÍTULO I ── */}
      <div className="bg-white rounded-2xl border border-gray-100 p-5 md:p-8">
        <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">Capítulo I</span>
        <h2 className="text-lg md:text-xl font-semibold mt-1 mb-1">La Dimensión Educativa del Proyecto Europeo</h2>
        <p className="text-sm text-gray-500 mb-6">De la cooperación intergubernamental a Erasmus+ (1957–2025)</p>

        <div className="overflow-x-auto pb-2 -mx-1 px-1">
          <div className="relative flex items-start" style={{ minWidth: timeline.length * 220 }}>
            <div className="absolute left-0 right-0 top-4 h-px bg-gray-100" />
            {timeline.map((item, i) => (
              <div key={i} className="relative flex-shrink-0 px-3" style={{ width: 220 }}>
                <div className="w-3 h-3 rounded-full bg-[#b30033] border-2 border-white shadow-sm mx-auto" />
                <div
                  className="mt-3 cursor-pointer"
                  onClick={() => setOpenPeriod(openPeriod === i ? null : i)}
                >
                  <div className="flex flex-col items-center gap-1.5 text-center">
                    <span className="inline-block bg-[#b30033]/10 text-[#b30033] text-[11px] font-semibold rounded-lg px-2 py-0.5 whitespace-nowrap">{item.year}</span>
                    <span className="text-sm font-medium text-[#1d1d1f] leading-snug">{item.label}</span>
                    <span className="text-gray-300 text-xs">{openPeriod === i ? '▲' : '▼'}</span>
                  </div>
                  {openPeriod === i && (
                    <p className="text-xs text-gray-600 leading-relaxed mt-2">{item.desc}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Erasmus+ 2021-2027 prioridades */}
      <div className="bg-white rounded-2xl border border-gray-100 p-5 md:p-8">
        <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">Capítulo I · 1.6</span>
        <h2 className="text-lg md:text-xl font-semibold mt-1 mb-1">Erasmus+ 2021–2027: prioridades horizontales</h2>
        <p className="text-sm text-gray-500 mb-6">Reglamento (UE) 2021/817 · 26.200 M€ (+77% vs. 2014-2020)</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {prioridades2027.map((p) => (
            <div key={p.title} className="rounded-xl border border-gray-100 p-4 hover:shadow-sm transition-shadow">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg" style={{ color: p.color }}>{p.icon}</span>
                <p className="text-sm font-semibold text-[#1d1d1f]">{p.title}</p>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* KA122 vs KA121 + modalidades */}
      <div className="bg-white rounded-2xl border border-gray-100 p-5 md:p-8">
        <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">Capítulo I · 1.6</span>
        <h2 className="text-lg md:text-xl font-semibold mt-1 mb-1">Acciones KA122: diseño y modalidades</h2>
        <p className="text-sm text-gray-500 mb-6">Vía de acceso para centros sin acreditación previa</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          {ka122vsKa121.map((t) => (
            <div key={t.tipo} className="rounded-xl p-4 border" style={{ borderColor: '#b3003340', background: '#b3003308' }}>
              <div className="flex items-center justify-between mb-1">
                <p className="text-sm font-bold text-[#b30033]">{t.tipo}</p>
                <span className="text-[10px] font-medium bg-gray-100 text-gray-500 rounded px-1.5 py-0.5">{t.dur}</span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-6">
          {ka122modalidades.map((m) => (
            <div key={m.tipo} className="rounded-xl border border-gray-100 p-4 hover:border-[#b30033]/30 hover:shadow-sm transition-all">
              <div className="flex items-start justify-between gap-2 mb-1.5">
                <p className="text-sm font-semibold text-[#1d1d1f] leading-tight">{m.tipo}</p>
                <span className="text-[10px] font-medium bg-gray-100 text-gray-500 rounded px-1.5 py-0.5 whitespace-nowrap flex-shrink-0">{m.dur}</span>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>

        <div className="p-4 rounded-xl bg-[#b30033]/5 border border-[#b30033]/20">
          <p className="text-sm font-semibold text-[#b30033] mb-1.5">Precisión clave de esta investigación</p>
          <p className="text-sm text-gray-700 leading-relaxed">
            Frente a la imagen extendida de "movilidad docente", las acciones KA122 contemplan tanto la movilidad del personal como la del alumnado. En los proyectos analizados en esta tesis, la movilidad fue protagonizada por el alumnado; el profesorado ejerció una función de acompañamiento y de informante privilegiado del impacto.
          </p>
        </div>
      </div>

      {/* ── CAPÍTULO II ── */}
      <div className="bg-white rounded-2xl border border-gray-100 p-5 md:p-8">
        <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">Capítulo II</span>
        <h2 className="text-lg md:text-xl font-semibold mt-1 mb-1">Movilidad Internacional e Impacto en la Comunidad Educativa</h2>
        <p className="text-sm text-gray-500 mb-6">Desarrollo profesional, competencia intercultural e internacionalización de centros</p>

        <div className="overflow-x-auto pb-2">
          <div className="min-w-[760px] md:min-w-0">
            {/* Root */}
            <div className="flex justify-center">
              <div className="rounded-2xl bg-[#1d1d1f] text-white px-5 py-3 text-center shadow-sm max-w-xs">
                <p className="text-sm font-semibold leading-snug">Impacto de la movilidad en la comunidad educativa</p>
                <p className="text-[10px] text-gray-300 mt-0.5">Capítulo II</p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-px h-6 bg-gray-300" />
            </div>
            <div className="w-full h-px bg-gray-300" />

            {/* Branches */}
            <div className="grid grid-cols-3 gap-4 mt-0">
              {cap2clusters.map((cluster) => (
                <div key={cluster.id} className="flex flex-col items-center">
                  <div className="w-px h-6 bg-gray-300" />
                  <div
                    className="rounded-2xl px-3 py-2.5 text-center w-full"
                    style={{ background: cluster.color + '10', border: `1px solid ${cluster.color}40` }}
                  >
                    <span
                      className="w-6 h-6 rounded-lg flex items-center justify-center text-white text-xs mx-auto mb-1"
                      style={{ background: cluster.color }}
                    >
                      {cluster.icon}
                    </span>
                    <p className="text-xs font-semibold text-[#1d1d1f] leading-snug">{cluster.title}</p>
                    <p className="text-[10px] text-gray-400 mt-0.5">{cluster.subtitle}</p>
                  </div>

                  {/* Chained author nodes */}
                  {cluster.nodes.map((n, i) => (
                    <div key={n.autor} className="w-full flex flex-col items-center">
                      <div className="flex flex-col items-center py-0.5">
                        <div className="w-px h-3" style={{ background: cluster.color + '60' }} />
                        {n.rel && (
                          <p className="text-[9px] text-gray-400 text-center leading-tight px-1 max-w-[150px]">{n.rel}</p>
                        )}
                        <div className="w-px h-3" style={{ background: cluster.color + '60' }} />
                      </div>
                      <div
                        className="w-full rounded-xl bg-white border p-3 shadow-sm"
                        style={{ borderColor: cluster.color + '35' }}
                      >
                        <div className="flex items-baseline gap-1.5 mb-1">
                          <p className="text-xs font-semibold" style={{ color: cluster.color }}>{n.autor}</p>
                          <span className="text-[9px] text-gray-400">({n.year})</span>
                        </div>
                        <p className="text-[11px] font-medium text-[#1d1d1f] mb-1 leading-snug">{n.idea}</p>
                        <p className="text-[10px] text-gray-500 leading-relaxed">{n.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 rounded-xl bg-gray-50 border border-gray-100">
          <p className="text-xs text-gray-600 leading-relaxed">
            La evidencia disponible documenta una jerarquía de efectos: más fuertes y consistentes en lo actitudinal e individual; más débiles y heterogéneos en las prácticas pedagógicas concretas; más difíciles de documentar en la cultura y la organización de los centros (Souto-Otero et al., 2021; Heinzmann et al., 2024).
          </p>
        </div>
      </div>

      {/* ── CAPÍTULO III — Modelo conceptual ── */}
      <div className="bg-white rounded-2xl border border-gray-100 p-5 md:p-8">
        <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">Capítulo III · 3.1–3.6</span>
        <h2 className="text-lg md:text-xl font-semibold mt-1 mb-1">Del Aprendizaje Individual al Cambio Organizativo</h2>
        <p className="text-sm text-gray-500 mb-5">Modelo conceptual de la investigación: cuatro niveles de análisis</p>

        <div className="rounded-xl bg-[#b30033]/5 border border-[#b30033]/15 p-4 mb-5">
          <p className="text-sm font-semibold text-[#b30033] mb-1">Fullan (2007) y Cuban (1988): cambios de primer y segundo orden</p>
          <p className="text-xs text-gray-600 leading-relaxed">
            Cambios de <strong>primer orden</strong> (superficiales: actitudes, percepciones, disposiciones) frente a cambios de <strong>segundo orden</strong> (profundos: prácticas, roles, valores y estructuras). La movilidad de corta duración produce con mayor consistencia cambios de primer orden.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {cap3modelo.map((n, i) => (
            <div key={n.nivel} className="rounded-xl border border-gray-100 p-4">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#b30033] text-white text-[11px] font-bold flex-shrink-0">{i + 1}</span>
                <p className="text-sm font-semibold text-[#1d1d1f]">Nivel {n.nivel}</p>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">{n.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Marco de Competencias */}
      <div className="bg-white rounded-2xl border border-gray-100 p-5 md:p-8">
        <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">Capítulo III · 3.7.2–3.7.3</span>
        <h2 className="text-lg md:text-xl font-semibold mt-1 mb-1">El Marco de Competencias Clave para el Aprendizaje Permanente</h2>
        <p className="text-sm text-gray-500 mb-5">Recomendación 2006/962/CE → Recomendación 2018/C 189/01</p>

        {/* Tabs */}
        <div className="flex gap-1 mb-5 bg-gray-100 p-1 rounded-xl w-fit">
          {[
            { key: '2006', label: 'Marco 2006' },
            { key: '2018', label: 'Marco 2018' },
            { key: 'cambios', label: 'Cambios clave' },
          ].map((t) => (
            <button
              key={t.key}
              onClick={() => setTab2018(t.key as '2006' | '2018' | 'cambios')}
              className={`text-xs font-medium px-3 py-1.5 rounded-lg transition-all ${
                tab2018 === t.key ? 'bg-white text-[#b30033] shadow-sm' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {tab2018 === '2006' && (
          <div>
            <p className="text-xs text-gray-500 mb-3">Recomendación del Parlamento Europeo y del Consejo · 18 diciembre 2006 · (2006/962/CE)</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {competencias2006.map((c, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-[#b30033]/5 transition-colors">
                  <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#b30033] text-white text-[11px] font-bold flex-shrink-0">{i + 1}</span>
                  <span className="text-sm text-gray-700 leading-snug">{c}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 p-3 rounded-xl bg-amber-50 border border-amber-100">
              <p className="text-xs font-medium text-amber-700">Limitaciones identificadas</p>
              <p className="text-xs text-amber-600 mt-1 leading-relaxed">La brecha entre el marco normativo y la práctica pedagógica fue la limitación más relevante. La competencia digital era excesivamente básica y no había marco de sostenibilidad ambiental.</p>
            </div>
          </div>
        )}

        {tab2018 === '2018' && (
          <div>
            <p className="text-xs text-gray-500 mb-3">Recomendación del Consejo de la UE · 22 mayo 2018 · (2018/C 189/01) · Marco de referencia de esta investigación</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {competencias2018.map((c, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-[#b30033]/5 transition-colors">
                  <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#b30033] text-white text-[11px] font-bold flex-shrink-0">{i + 1}</span>
                  <span className="text-sm text-gray-700 leading-snug">{c}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 p-3 rounded-xl bg-[#b30033]/5 border border-[#b30033]/20">
              <p className="text-xs font-medium text-[#b30033]">Relevancia para las acciones KA122</p>
              <p className="text-xs text-gray-600 mt-1 leading-relaxed">El énfasis del Marco de 2018 en lo relacional, emocional y ciudadano hace de la movilidad un contexto no formal especialmente pertinente para su desarrollo.</p>
            </div>
          </div>
        )}

        {tab2018 === 'cambios' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {cambios2018.map((c, i) => (
              <div key={i} className="rounded-xl border border-gray-100 p-4 hover:border-[#b30033]/30 hover:shadow-sm transition-all">
                <div className="w-7 h-7 flex items-center justify-center rounded-full bg-[#b30033]/10 text-[#b30033] text-xs font-bold mb-2">{i + 1}</div>
                <h3 className="text-sm font-semibold text-[#1d1d1f] mb-1">{c.titulo}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Sesgos / estado de la cuestión */}
      <div className="bg-white rounded-2xl border border-gray-100 p-5 md:p-8">
        <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">Capítulo III · 3.7.4</span>
        <h2 className="text-lg md:text-xl font-semibold mt-1 mb-1">Sesgos de la Investigación Existente</h2>
        <p className="text-sm text-gray-500 mb-5">Tres sesgos estructurales que delimitan el espacio de esta investigación</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {sesgos.map((s) => (
            <div key={s.name} className="bg-gray-50 rounded-xl p-5">
              <p className="text-[11px] text-gray-400 font-medium uppercase tracking-wide">{s.name}</p>
              <p className="text-xs text-gray-600 mt-2 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 p-4 rounded-xl bg-[#b30033]/5 border border-[#b30033]/20">
          <p className="text-sm font-semibold text-[#b30033] mb-1.5">Laguna identificada</p>
          <p className="text-xs text-gray-700 leading-relaxed">
            No se trata de demostrar que las acciones KA122 generan impacto —los datos exploratorios disponibles ya sugieren que lo hacen—, sino de caracterizar con rigor ese impacto en términos de desarrollo competencial institucional, identificar las condiciones que lo facilitan o lo bloquean, y aportar evidencia empírica sistemática sobre un contexto territorial —el sur de la Comunidad de Madrid— que es representativo de las zonas metropolitanas de alta complejidad social sistemáticamente subrepresentadas en la investigación existente.
          </p>
        </div>
      </div>
    </div>
  )
}
