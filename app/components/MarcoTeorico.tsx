'use client'
import { useState } from 'react'

const timeline = [
  { year: '1957', label: 'Tratado de Roma — El "Vacío Inicial"', desc: 'La CEE se fundó con enfoque económico. La educación quedó completamente al margen del Tratado, considerada competencia exclusiva de cada nación. Solo la Formación Profesional fue incluida (art. 128).' },
  { year: '1963', label: 'Decisión del Consejo', desc: 'Primera resolución sobre política comunitaria de formación profesional y educación general. Inicio tímido de la cooperación educativa europea.' },
  { year: '1969–1973', label: 'Cumbres de La Haya y París · Informe Janne', desc: 'La Cumbre de La Haya impulsó una integración más humana. En 1973, Henri Janne presentó el influyente informe "Para una política comunitaria de la educación", primer documento que propuso armonizar políticas educativas.' },
  { year: '1976–1980', label: 'Resolución educativa y Red Eurydice', desc: 'Los ministros de Educación acordaron siete áreas prioritarias, incluyendo movilidad e intercambio. En 1980 nació la Red Eurydice de información educativa. Los Programas de Estudio Conjuntos (1976-1986) financiaron más de 600 proyectos con 500 instituciones.' },
  { year: '1985', label: 'Sentencia Gravier — Base jurídica', desc: 'El Tribunal de Justicia amplió la definición de "formación profesional" para incluir la educación superior, proporcionando la base legal sólida que hizo posibles Comett, Erasmus, PETRA, Lingua, FORCE y Youth.' },
  { year: '1986–1987', label: 'Comett y Erasmus', desc: 'Comett (1986): primer programa de cooperación universidades-empresas en tecnología. Erasmus (1987): logro más emblemático de la CEE en educación. Solo 3.244 estudiantes en su primer año, pero sentó las bases de la movilidad europea e impulsó el ECTS.' },
  { year: '1987–1994', label: 'PETRA, Lingua, FORCE, TEMPUS, Youth', desc: 'Una familia de programas sectoriales: PETRA (formación profesional juvenil), Lingua (enseñanza de lenguas), FORCE (formación continua), TEMPUS (cooperación con Europa del Este), Youth for Europe (intercambios juveniles).' },
  { year: '1992', label: 'Tratado de Maastricht — Educación en el Tratado', desc: 'Hito decisivo: la educación fue incorporada formalmente al Tratado. Se fijaron objetivos como la dimensión europea en enseñanza, movilidad de estudiantes y docentes, y cooperación entre instituciones. La UE asumió competencias en educación por primera vez.' },
  { year: '1995–2006', label: 'Sócrates y Leonardo da Vinci', desc: 'Unificación de los programas previos en dos pilares: Sócrates (educación escolar y superior) y Leonardo da Vinci (formación profesional). El Libro Blanco de 1995 "Hacia la sociedad del aprendizaje" anticipó la estrategia de educación permanente.' },
  { year: '2000', label: 'Estrategia de Lisboa', desc: 'La UE se propuso convertirse en la economía del conocimiento más competitiva del mundo. La educación pasó a ser pilar estratégico fundamental. Se fijaron objetivos ET2010 para los sistemas educativos europeos.' },
  { year: '2007–2013', label: 'Programa de Aprendizaje Permanente (PAP)', desc: 'Presupuesto inicial de 6.970 M€. Integró Comenius (escolar), Erasmus (superior), Leonardo da Vinci (FP) y Grundtvig (adultos). Sentó las bases del futuro Erasmus+.' },
]

const erasmusPlus2014 = {
  presupuesto: '14.774 M€',
  incremento: '+111% vs PAP',
  participantes: '16 millones',
  satisfaccion: '>90%',
  puntos: [
    'Unificó todos los programas educativos europeos bajo una sola marca',
    'Se permitieron denominaciones sectoriales: Comenius, Erasmus, Leonardo da Vinci, Grundtvig',
    'Primera dimensión internacional real con "países asociados" de América, África y Asia',
    'Presupuesto del 77,5% para educación y formación; 10% para juventud; 1,8% para deporte',
    'La evaluación intermedia registró 1,8 millones de participantes en movilidad en menos de 3 años',
    'El 58% de los estudiantes fueron mujeres en el período 2014-2020',
  ],
}

const covid = [
  { label: '71%', desc: 'consideró que las herramientas digitales funcionaron adecuadamente' },
  { label: '81%', desc: 'de los estudiantes echó en falta la interacción presencial cara a cara' },
  { label: '25%', desc: 'de las movilidades fueron canceladas (ESN, n=21.930)' },
  { label: '51%', desc: 'pasó a educación totalmente en línea' },
]

const prioridades2027 = [
  { icon: '◉', title: 'Inclusión social', color: '#0071e3', desc: 'Reducción de barreras por discapacidad, situación económica o discriminación. Aprendizaje más diverso y equitativo para todos.' },
  { icon: '◎', title: 'Sostenibilidad ambiental', color: '#34c759', desc: 'Vinculada al Pacto Verde Europeo. Fomento de prácticas sostenibles en proyectos educativos y conciencia climática.' },
  { icon: '◈', title: 'Digitalización', color: '#5ac8fa', desc: 'Competencias digitales básicas y avanzadas, movilidad mixta, herramientas online y planes de transformación digital en instituciones.' },
  { icon: '◆', title: 'Participación juvenil', color: '#ff9f0a', desc: 'Implicación activa en la vida democrática. Pensamiento crítico, compromiso cívico y cooperación entre comunidades.' },
]

const ka122 = [
  { tipo: 'Cursos y Formación', dur: '2–30 días', desc: 'Seminarios o cursos estructurados en el extranjero. Habitual en competencias digitales, metodologías pedagógicas innovadoras o prácticas de inclusión.' },
  { tipo: 'Job Shadowing', dur: '2–60 días', desc: 'Inmersión en la práctica diaria de una organización socia. Observación directa e intercambio de buenas prácticas como motor del cambio organizativo.' },
  { tipo: 'Estancias de Docencia', dur: 'Variable', desc: 'El personal docente imparte clases en una institución socia extranjera, fortaleciendo la dimensión internacional del currículo.' },
  { tipo: 'Expertos Invitados', dur: 'Variable', desc: 'Organizaciones acogen expertos de otros países para compartir conocimientos y formación presencial sin necesidad de desplazamiento.' },
  { tipo: 'Movilidad de Alumnado', dur: 'Mín. 2 días', desc: 'Grupos de alumnos participan conjuntamente en actividades de aprendizaje en el extranjero. También movilidad individual de alumnos.' },
  { tipo: 'Prácticas FP', dur: '10–90+ días', desc: 'Estancias de prácticas cortas y largas para estudiantes de FP. Fundamentales para el desarrollo de competencias técnicas y empleabilidad.' },
]

const competencias2006 = [
  'Comunicación en la lengua materna',
  'Comunicación en lenguas extranjeras',
  'Competencia matemática y en ciencia y tecnología',
  'Competencia digital',
  'Aprender a aprender',
  'Competencias sociales y cívicas',
  'Sentido de iniciativa y espíritu empresarial',
  'Conciencia y expresión culturales',
]

const competencias2018 = [
  'Competencia en lengua materna (literacidad)',
  'Competencia plurilingüe',
  'Competencia matemática y en ciencia, tecnología e ingeniería (STEM)',
  'Competencia digital',
  'Competencia personal, social y de aprender a aprender',
  'Competencia ciudadana',
  'Competencia emprendedora',
  'Competencia en conciencia y expresión culturales',
]

const cambios2018 = [
  { titulo: 'Nueva: competencia plurilingüe', desc: 'Reconoce la realidad de la movilidad y la diversidad lingüística europeas. Directamente relevante para las estancias internacionales KA122.' },
  { titulo: 'Social + aprender a aprender', desc: '"Aprender a aprender" se amplía para incluir regulación emocional, bienestar personal y competencias colaborativas, no solo estrategias cognitivas.' },
  { titulo: 'Ciudadanía y sostenibilidad', desc: 'La competencia ciudadana incorpora explícitamente participación democrática y responsabilidad ambiental (Pacto Verde y ODS 2015).' },
  { titulo: 'Competencia digital sofisticada', desc: 'Pasa de capacidades técnicas básicas a incluir dimensiones críticas, reflexivas y éticas ante la transformación digital acelerada.' },
]

export default function MarcoTeorico() {
  const [openPeriod, setOpenPeriod] = useState<number | null>(null)
  const [tab2018, setTab2018] = useState<'2006' | '2018' | 'cambios'>('2006')

  return (
    <div className="space-y-8 fade-in">
      {/* Header */}
      <div>
        <span className="text-xs font-semibold uppercase tracking-widest text-[#0071e3]">Parte I</span>
        <h1 className="section-title mt-1">Marco Teórico</h1>
        <p className="section-subtitle">
          Evolución histórica de los programas educativos europeos, llegada de Erasmus+, acciones KA122 y marco normativo de competencias clave para el aprendizaje permanente.
        </p>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { label: 'Tratado de Roma', value: '1957', sub: 'inicio del "vacío inicial"' },
          { label: 'Primer Erasmus', value: '1987', sub: '3.244 estudiantes año 1' },
          { label: 'Presupuesto 2021-27', value: '26.200 M€', sub: 'Mayor programa educativo UE' },
          { label: 'Competencias clave', value: '8', sub: 'Recomendación UE 2018' },
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
        <h2 className="text-lg md:text-xl font-semibold mt-1 mb-1">Evolución de los Programas Educativos Europeos</h2>
        <p className="text-sm text-gray-500 mb-6">De acuerdos bilaterales al Programa de Aprendizaje Permanente (1957–2013)</p>

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-100" />
          <div className="space-y-4">
            {timeline.map((item, i) => (
              <div key={i} className="relative flex gap-4 pl-10">
                <div className="absolute left-2.5 top-2 w-3 h-3 rounded-full bg-[#0071e3] border-2 border-white shadow-sm flex-shrink-0" />
                <div
                  className="flex-1 cursor-pointer"
                  onClick={() => setOpenPeriod(openPeriod === i ? null : i)}
                >
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="inline-block bg-[#0071e3]/10 text-[#0071e3] text-[11px] font-semibold rounded-lg px-2 py-0.5">{item.year}</span>
                    <span className="text-sm font-medium text-[#1d1d1f]">{item.label}</span>
                    <span className="ml-auto text-gray-300 text-xs">{openPeriod === i ? '▲' : '▼'}</span>
                  </div>
                  {openPeriod === i && (
                    <p className="text-xs text-gray-600 leading-relaxed mt-2 pr-4">{item.desc}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CAPÍTULO II — Erasmus+ 2014-2020 ── */}
      <div className="bg-white rounded-2xl border border-gray-100 p-5 md:p-8">
        <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">Capítulo II · Sección 1</span>
        <h2 className="text-lg md:text-xl font-semibold mt-1 mb-1">Erasmus+ 2014–2020</h2>
        <p className="text-sm text-gray-500 mb-6">La consolidación y expansión de la cooperación europea en educación, formación, juventud y deporte</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          {[
            { v: erasmusPlus2014.presupuesto, l: 'Presupuesto total' },
            { v: erasmusPlus2014.incremento, l: 'vs Prog. Aprendizaje Perm.' },
            { v: erasmusPlus2014.participantes, l: 'Personas beneficiadas' },
            { v: erasmusPlus2014.satisfaccion, l: 'Satisfacción partes' },
          ].map((s) => (
            <div key={s.l} className="bg-gray-50 rounded-xl p-3 text-center">
              <p className="text-base md:text-lg font-semibold text-[#0071e3]">{s.v}</p>
              <p className="text-[11px] text-gray-500 mt-0.5 leading-tight">{s.l}</p>
            </div>
          ))}
        </div>

        <div className="space-y-2">
          {erasmusPlus2014.puntos.map((p, i) => (
            <div key={i} className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0071e3] mt-1.5 flex-shrink-0" />
              <p className="text-sm text-gray-700 leading-relaxed">{p}</p>
            </div>
          ))}
        </div>
      </div>

      {/* COVID-19 */}
      <div className="bg-white rounded-2xl border border-gray-100 p-5 md:p-8">
        <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">Capítulo II · Sección 1.2</span>
        <h2 className="text-lg md:text-xl font-semibold mt-1 mb-1">El Desafío de la Pandemia COVID-19</h2>
        <p className="text-sm text-gray-500 mb-6">Impacto en las movilidades Erasmus+ en 2020 · Encuesta a 57.000 participantes (n completado = 11.800)</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          {covid.map((c) => (
            <div key={c.label} className="rounded-xl bg-orange-50 border border-orange-100 p-4 text-center">
              <p className="text-2xl font-semibold text-orange-500">{c.label}</p>
              <p className="text-[11px] text-gray-600 mt-1 leading-tight">{c.desc}</p>
            </div>
          ))}
        </div>

        <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
          <p className="text-sm font-medium text-[#1d1d1f] mb-2">Respuesta institucional de Erasmus+</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { t: 'Seguridad', d: 'Apoyo para regreso seguro a países de origen de los participantes' },
              { t: 'Financiación', d: 'Becas conservadas aunque las actividades se acortaran o interrumpieran' },
              { t: 'Continuidad', d: 'Aprendizaje a distancia y modalidades mixtas para completar estudios' },
            ].map((item) => (
              <div key={item.t} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0071e3] mt-1.5 flex-shrink-0" />
                <div>
                  <p className="text-xs font-semibold text-[#1d1d1f]">{item.t}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Brexit */}
      <div className="bg-white rounded-2xl border border-gray-100 p-5 md:p-8">
        <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">Capítulo II · Sección 1.3</span>
        <h2 className="text-lg md:text-xl font-semibold mt-1 mb-1">Brexit: Fractura en la Internacionalización Educativa</h2>
        <p className="text-sm text-gray-500 mb-5">El fin de la participación del Reino Unido en Erasmus+ y la creación del Turing Scheme</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-xl bg-red-50 border border-red-100 p-4">
            <p className="text-sm font-semibold text-red-700 mb-2">Impacto del Brexit</p>
            <ul className="space-y-1.5">
              {[
                'Pérdida del acceso automático de estudiantes y académicos británicos a fondos Erasmus+',
                'Las universidades del RU, privilegiadas socias europeas hasta 2020, debieron rediseñar su cooperación internacional',
                'Costes más elevados y oportunidades financieras más limitadas para la colaboración UE-RU',
                'Ilustra cómo los procesos geopolíticos se materializan en las prácticas cotidianas de las instituciones educativas',
              ].map((p, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 flex-shrink-0" />
                  <p className="text-xs text-gray-700 leading-relaxed">{p}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl bg-blue-50 border border-blue-100 p-4">
            <p className="text-sm font-semibold text-[#0071e3] mb-2">Turing Scheme (sustituto británico)</p>
            <ul className="space-y-1.5">
              {[
                'Programa unilateral del RU para financiar movilidad de estudiantes al extranjero',
                'Orientación hacia países no europeos (Commonwealth, Asia, Norteamérica)',
                'Menor alcance e impacto que la participación en Erasmus+ por la reciprocidad perdida',
                'Modelo comparativo relevante para estudiar el valor añadido del programa europeo',
              ].map((p, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0071e3] mt-1.5 flex-shrink-0" />
                  <p className="text-xs text-gray-700 leading-relaxed">{p}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Erasmus+ 2021-2027 */}
      <div className="bg-white rounded-2xl border border-gray-100 p-5 md:p-8">
        <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">Capítulo II · Sección 2</span>
        <h2 className="text-lg md:text-xl font-semibold mt-1 mb-1">Erasmus+ 2021–2027</h2>
        <p className="text-sm text-gray-500 mb-6">Un nuevo horizonte para la inclusión, la digitalización y la sostenibilidad · 26.200 M€ · Reglamento UE 2021/817</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {[
            { titulo: 'KA1 — Movilidad', desc: 'Formatos de corta duración y mixtos. Amplía acceso a colectivos más amplios: alumnado escolar, adultos y personal deportivo.' },
            { titulo: 'KA2 — Cooperación', desc: 'Asociaciones a pequeña escala. Universidades Europeas y Centros de Excelencia Profesional para transferencia de buenas prácticas.' },
            { titulo: 'KA3 — Reforma de políticas', desc: 'Proyectos que contribuyen a marcos normativos y estrategias educativas nacionales y europeas.' },
          ].map((a) => (
            <div key={a.titulo} className="rounded-xl bg-[#0071e3]/5 border border-[#0071e3]/15 p-4">
              <p className="text-sm font-semibold text-[#0071e3] mb-1">{a.titulo}</p>
              <p className="text-xs text-gray-600 leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* KA122 */}
      <div className="bg-white rounded-2xl border border-gray-100 p-5 md:p-8">
        <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">Capítulo II · Sección 2.3</span>
        <h2 className="text-lg md:text-xl font-semibold mt-1 mb-1">Acciones de Movilidad Acreditada KA122</h2>
        <p className="text-sm text-gray-500 mb-6">Modalidad de Acción Clave 1 para centros sin acreditación previa · 6–18 meses · hasta 30 participantes</p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
          {[
            { code: 'KA122-SCH', label: 'Educación Escolar', color: '#0071e3' },
            { code: 'KA122-VET', label: 'Formación Profesional', color: '#5ac8fa' },
            { code: 'KA122-ADU', label: 'Educación de Adultos', color: '#0a4fa6' },
          ].map((t) => (
            <div key={t.code} className="rounded-xl p-3 text-center border" style={{ borderColor: t.color + '40', background: t.color + '0a' }}>
              <p className="text-sm font-bold" style={{ color: t.color }}>{t.code}</p>
              <p className="text-xs text-gray-600 mt-0.5">{t.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-6">
          {ka122.map((m) => (
            <div key={m.tipo} className="rounded-xl border border-gray-100 p-4 hover:border-[#0071e3]/30 hover:shadow-sm transition-all">
              <div className="flex items-start justify-between gap-2 mb-1.5">
                <p className="text-sm font-semibold text-[#1d1d1f] leading-tight">{m.tipo}</p>
                <span className="text-[10px] font-medium bg-gray-100 text-gray-500 rounded px-1.5 py-0.5 whitespace-nowrap flex-shrink-0">{m.dur}</span>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>

        <div className="p-4 rounded-xl bg-[#0071e3]/5 border border-[#0071e3]/20">
          <p className="text-sm font-semibold text-[#0071e3] mb-1.5">Propósito fundamental (Guía Erasmus+, 2024)</p>
          <p className="text-sm text-gray-700 leading-relaxed">
            «Desarrollar la capacidad de cooperación transnacional de las organizaciones, permitiéndoles explorar la movilidad Erasmus+ con una estructura de gestión y una inversión de recursos inferior a la de los proyectos acreditados de tipo KA121.»
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {['Inclusión y diversidad', 'Transformación digital', 'Sostenibilidad medioambiental', 'Participación ciudadana activa'].map((p) => (
              <span key={p} className="text-[11px] font-medium bg-[#0071e3]/10 text-[#0071e3] px-2.5 py-1 rounded-full">{p}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ── CAPÍTULO III — Competencias ── */}
      <div className="bg-white rounded-2xl border border-gray-100 p-5 md:p-8">
        <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">Capítulo III · Sección 1</span>
        <h2 className="text-lg md:text-xl font-semibold mt-1 mb-1">Crisis del Paradigma Tradicional y Proyecto DeSeCo</h2>
        <p className="text-sm text-gray-500 mb-5">De la transmisión de contenidos al enfoque por competencias · OCDE 1997–2003</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-xl bg-gray-50 p-4">
            <p className="text-sm font-semibold text-[#1d1d1f] mb-2">Crisis del paradigma (años 90)</p>
            <ul className="space-y-1.5">
              {[
                'Los sistemas educativos operaban bajo un paradigma de transmisión de contenidos disciplinares enraizado en el siglo XIX',
                'La globalización evidenció las limitaciones: la información se volvía obsoleta rápidamente y los problemas laborales eran crecientemente complejos',
                'La investigación demostró que el aprendizaje significativo requiere integración de dimensiones cognitivas, prácticas, afectivas y sociales (Delors, 1996)',
                'Necesidad de orientar la educación hacia capacidades de actuación en contextos cambiantes',
              ].map((p, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-1.5 flex-shrink-0" />
                  <p className="text-xs text-gray-700 leading-relaxed">{p}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl bg-[#0071e3]/5 border border-[#0071e3]/15 p-4">
            <p className="text-sm font-semibold text-[#0071e3] mb-2">Proyecto DeSeCo · OCDE (1997–2003)</p>
            <ul className="space-y-1.5">
              {[
                'Definición y Selección de Competencias Clave: primer consenso internacional',
                'Rychen y Salganik (2003): competencias como combinaciones dinámicas de conocimientos, habilidades, actitudes y valores',
                'Tres categorías: actuar autónomamente, usar herramientas de forma interactiva, funcionar en grupos socialmente heterogéneos (OCDE, 2005)',
                'Base conceptual para que la UE adoptara las competencias como marco central de sus políticas educativas',
              ].map((p, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0071e3] mt-1.5 flex-shrink-0" />
                  <p className="text-xs text-gray-700 leading-relaxed">{p}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Marco de Competencias */}
      <div className="bg-white rounded-2xl border border-gray-100 p-5 md:p-8">
        <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">Capítulo III · Sección 2</span>
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
                tab2018 === t.key ? 'bg-white text-[#0071e3] shadow-sm' : 'text-gray-500 hover:text-gray-700'
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
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-blue-50/50 transition-colors">
                  <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#0071e3] text-white text-[11px] font-bold flex-shrink-0">{i + 1}</span>
                  <span className="text-sm text-gray-700 leading-snug">{c}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 p-3 rounded-xl bg-amber-50 border border-amber-100">
              <p className="text-xs font-medium text-amber-700">Limitaciones identificadas en la implementación</p>
              <p className="text-xs text-amber-600 mt-1 leading-relaxed">La brecha entre el Marco normativo y la práctica pedagógica fue la limitación más relevante: el enfoque competencial permanecía en documentos curriculares sin transformar la enseñanza cotidiana (Eurydice, 2012). La competencia digital era excesivamente básica y no había marco específico de sostenibilidad ambiental.</p>
            </div>
          </div>
        )}

        {tab2018 === '2018' && (
          <div>
            <p className="text-xs text-gray-500 mb-3">Recomendación del Consejo de la UE · 22 mayo 2018 · (2018/C 189/01) · Marco de referencia para la presente investigación</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {competencias2018.map((c, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-blue-50/50 transition-colors">
                  <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#0071e3] text-white text-[11px] font-bold flex-shrink-0">{i + 1}</span>
                  <span className="text-sm text-gray-700 leading-snug">{c}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 p-3 rounded-xl bg-[#0071e3]/5 border border-[#0071e3]/20">
              <p className="text-xs font-medium text-[#0071e3]">Relevancia para las acciones KA122</p>
              <p className="text-xs text-gray-600 mt-1 leading-relaxed">El Marco de 2018 es el referente teórico más adecuado para analizar el impacto de KA122 por su énfasis en la dimensión relacional, emocional y ciudadana. Una estancia en el extranjero proporciona exactamente el contexto no formal, experiencial y multicultural que ambos marcos identifican como necesario para el desarrollo de competencias (Krzaklewska y Skórska, 2021).</p>
            </div>
          </div>
        )}

        {tab2018 === 'cambios' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {cambios2018.map((c, i) => (
              <div key={i} className="rounded-xl border border-gray-100 p-4 hover:border-[#0071e3]/30 hover:shadow-sm transition-all">
                <div className="w-7 h-7 flex items-center justify-center rounded-full bg-[#0071e3]/10 text-[#0071e3] text-xs font-bold mb-2">{i + 1}</div>
                <h3 className="text-sm font-semibold text-[#1d1d1f] mb-1">{c.titulo}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{c.desc}</p>
              </div>
            ))}
            <div className="sm:col-span-2 mt-1 p-4 rounded-xl bg-[#0a4fa6]/5 border border-[#0a4fa6]/15">
              <p className="text-sm font-medium text-[#0a4fa6]">Continuidad esencial entre ambos marcos</p>
              <p className="text-xs text-gray-600 mt-1 leading-relaxed">Ambos marcos comparten la concepción de que el desarrollo competencial ocurre en contextos formales, no formales e informales, y que la dimensión experiencial es irreductible a la transmisión de contenidos. Esta continuidad fundamenta teóricamente la lógica de las acciones de movilidad internacional KA122.</p>
            </div>
          </div>
        )}
      </div>

      {/* Estado de la cuestión */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { title: 'Sesgo educativo dominante', value: '84%', sub: 'Estudios robustos circunscritos a la educación superior', color: '#ff9f0a' },
          { title: 'Investigación KA122', value: 'Incipiente', sub: 'Primera aproximación empírica sistemática al impacto institucional en centros no universitarios', color: '#0071e3' },
          { title: 'Laguna identificada', value: 'Sur Madrid', sub: 'Ningún estudio previo sobre KA122 en centros de secundaria del sur de la Comunidad de Madrid', color: '#34c759' },
        ].map((s) => (
          <div key={s.title} className="bg-white rounded-2xl border border-gray-100 p-5">
            <p className="text-[11px] text-gray-400 font-medium uppercase tracking-wide">{s.title}</p>
            <p className="text-2xl font-semibold mt-2" style={{ color: s.color }}>{s.value}</p>
            <p className="text-xs text-gray-500 mt-1 leading-relaxed">{s.sub}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
