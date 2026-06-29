'use client'

const conclusiones = [
  {
    n: '1',
    color: '#b30033',
    title: 'La brecha interna del plano individual (H1)',
    desc: 'La movilidad KA122 produce cambios de primer orden —actitudinales en el docente (3,17) y culturales en el centro (3,22)—, pero no transforma los métodos de enseñanza en el aula (2,59), un cambio de segundo orden. La brecha no se da entre individuo y centro (índices 2,92 vs. 3,14; n.s.), sino dentro del propio plano individual: entre la apertura actitudinal y la práctica pedagógica (Fullan, 2007).',
    implication: 'Los mecanismos de acompañamiento post-movilidad son clave para que la apertura actitudinal se traduzca en transformación pedagógica sostenida.',
  },
  {
    n: '2',
    color: '#d6335c',
    title: 'Patrones geográficos en elección de socios (H2)',
    desc: 'Alemania concentra el 72% de las colaboraciones, reflejando una preferencia por sistemas educativos con alta visibilidad internacional. La temática de Inclusión y Diversidad domina, coherente con los perfiles sociodemográficos de los centros del sur de Madrid.',
    implication: 'Los servicios de apoyo (SEPIE) deberían facilitar el acceso a información sobre sistemas educativos menos conocidos pero potencialmente más pertinentes.',
  },
  {
    n: '3',
    color: '#e87a93',
    title: 'Disociación competencia–rendimiento (H3)',
    desc: 'El aprendizaje intercultural (3,89), la motivación (3,53) y las competencias lingüísticas (3,29) destacan como efectos robustos de la movilidad, frente a los resultados académicos convencionales (2,82). La diferencia es significativa (Wilcoxon p &lt; 0,05) y ninguna competencia correlaciona con el rendimiento, confirmando la limitación estructural de los instrumentos de evaluación vigentes.',
    implication: 'Es necesario desarrollar marcos evaluativos que capturen las competencias transversales desarrolladas por Erasmus+ más allá del rendimiento formal.',
  },
  {
    n: '4',
    color: '#7a0022',
    title: 'Barrera administrativa como obstáculo estructural (H4)',
    desc: 'El 100% de los participantes repetiría la experiencia, evidenciando que la motivación pedagógica no es el obstáculo. Sin embargo, los trámites KA122 (media 2,24 de sencillez —el ítem más bajo, 64,7% negativo—) y la ayuda institucional (2,53) confirman que la brecha de capacidad administrativa (Flisi et al., 2021) persiste. La crítica burocrática no erosiona la adhesión (ρ = −0,068; p = 0,796): esa es la paradoja central de H4.',
    implication: 'La sostenibilidad del programa depende de reducir la carga burocrática más que de incrementar la motivación del profesorado.',
  },
]

const aportaciones = [
  {
    icon: '◉',
    title: 'Aportación metodológica',
    desc: 'El instrumento IRKA122 constituye la primera herramienta de evaluación diseñada específicamente para capturar el impacto institucional de las acciones KA122 en centros de secundaria y FP.',
  },
  {
    icon: '◎',
    title: 'Aportación empírica',
    desc: 'Una de las primeras aproximaciones sistemáticas al impacto de las KA122 en el sur de la Comunidad de Madrid, un contexto específico no estudiado previamente en la literatura internacional.',
  },
  {
    icon: '◈',
    title: 'Aportación teórica',
    desc: 'Identificación y documentación empírica de la brecha temporal entre impacto individual e institucional de la movilidad Erasmus+ en centros de educación no universitaria.',
  },
  {
    icon: '◆',
    title: 'Aportación política',
    desc: 'Recomendaciones específicas para el SEPIE y la Comisión Europea sobre el diseño de futuras convocatorias KA122 orientadas a reducir barreras administrativas.',
  },
]

const limitaciones = [
  'Limitación muestral (N=18): el tamaño y la naturaleza censal por accesibilidad limitan la generalización estadística, aunque permiten una aproximación sistemática al universo accesible del territorio estudiado.',
  'Limitación de diseño: la ausencia de medidas pre y post intervención impide atribuir causalmente los cambios observados a la participación en la KA122.',
  'Limitación instrumental: el cuestionario IRKA122 genera datos autoinformados susceptibles al sesgo de deseabilidad social. Los resultados se interpretan como percepción experta, no como medida objetiva del impacto.',
  'Limitación de la medida indirecta del rendimiento académico: la percepción docente sobre el rendimiento es una aproximación válida pero no equivalente a la medida directa de calificaciones o pruebas estandarizadas.',
  'Limitación reflexiva: la doble posición del investigador —coordinador de proyectos KA122 y analista de sus efectos— es fuente potencial de sesgo, gestionada mediante distancia analítica explícita y transparencia metodológica.',
]

export default function Conclusiones() {
  return (
    <div className="space-y-8 fade-in">
      <div>
        <span className="text-xs font-semibold uppercase tracking-widest text-[#b30033]">Capítulo VI</span>
        <h1 className="section-title mt-1">Conclusiones</h1>
        <p className="section-subtitle">
          Síntesis de los resultados, aportaciones originales, limitaciones y líneas de investigación futura.
        </p>
      </div>

      {/* Main conclusions */}
      <div className="space-y-4">
        {conclusiones.map((c) => (
          <div key={c.n} className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            <div className="h-1" style={{ background: c.color }} />
            <div className="p-6 grid grid-cols-1 md:grid-cols-5 gap-4">
              <div className="md:col-span-3">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0" style={{ background: c.color }}>
                    {c.n}
                  </span>
                  <h3 className="text-base font-semibold text-[#1d1d1f]">{c.title}</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{c.desc}</p>
              </div>
              <div className="md:col-span-2">
                <div className="h-full rounded-xl p-4 flex flex-col justify-center" style={{ background: c.color + '0d' }}>
                  <p className="text-[10px] font-semibold uppercase tracking-widest mb-1" style={{ color: c.color }}>Implicación práctica</p>
                  <p className="text-xs leading-relaxed" style={{ color: c.color + 'cc' }}>{c.implication}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Contributions */}
      <div className="bg-white rounded-2xl border border-gray-100 p-8">
        <h2 className="text-lg font-semibold mb-6">Aportaciones Originales de la Investigación</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {aportaciones.map((a) => (
            <div key={a.title} className="flex gap-4 p-4 rounded-xl bg-gray-50">
              <span className="text-[#b30033] text-xl flex-shrink-0">{a.icon}</span>
              <div>
                <p className="text-sm font-semibold text-[#1d1d1f] mb-1">{a.title}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Limitations */}
      <div className="bg-white rounded-2xl border border-gray-100 p-8">
        <h2 className="text-lg font-semibold mb-4">Limitaciones del Estudio</h2>
        <div className="space-y-3">
          {limitaciones.map((l, i) => (
            <div key={i} className="flex gap-3 items-start p-3 rounded-xl bg-[#e87a93]/10 border border-[#e87a93]/20">
              <span className="w-5 h-5 rounded-full bg-[#e87a93]/20 text-[#b30033] text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">!</span>
              <p className="text-sm text-gray-600 leading-relaxed">{l}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Future lines */}
      <div className="bg-white rounded-2xl border border-gray-100 p-8">
        <h2 className="text-lg font-semibold mb-4">Líneas de Investigación Futura</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {[
            { title: 'Comparativa KA121 vs. KA122', desc: 'Diseño cuasi-experimental para contrastar si los centros con acreditación previa (KA121) logran conectar los dominios externo y personal con la transformación pedagógica sostenida que las KA122 no alcanzan. Permitiría discernir si la limitación documentada responde al diseño de la acción o a condicionantes más generales del sistema.' },
            { title: 'Comparativa intermetropolitana europea', desc: 'Estudio comparado entre áreas metropolitanas periurbanas con alta diversidad cultural y menor tradición de internacionalización: Lisboa, Bruselas, Berlín y la periferia de París. Requiere adaptación del IRKA122 y red interuniversitaria europea.' },
            { title: 'Comparativa diacrónica 2021-2027 / post-2027', desc: 'Utilizar esta tesis como línea base del ciclo 2021-2027 y contrastarla con cohortes del próximo Marco Financiero Plurianual, mediante técnicas de matching sociodemográfico, para medir el impacto de los ajustes programáticos sobre la capacidad transformadora de las KA122.' },
          ].map((f) => (
            <div key={f.title} className="p-4 rounded-xl border border-gray-100 hover:border-[#b30033]/30 hover:shadow-sm transition-all">
              <p className="text-sm font-semibold text-[#1d1d1f] mb-1">{f.title}</p>
              <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Final note */}
      <div className="bg-gradient-to-br from-[#b30033] to-[#8f0028] rounded-3xl p-8 text-white">
        <h3 className="text-xl font-semibold mb-3">Reflexión Final</h3>
        <p className="text-blue-100 text-sm leading-relaxed max-w-3xl">
          La convergencia entre la magnitud de la inversión pública en Erasmus+ (26.200 M€ en el ciclo 2021-2027) y la escasez de evidencia científica independiente sobre el impacto de las acciones KA122 en centros de secundaria y FP constituye una paradoja que esta investigación contribuye a reducir. Los resultados obtenidos apuntan a que el programa tiene un potencial transformador real, pero que su materialización plena requiere superar obstáculos administrativos estructurales e invertir en los mecanismos de transferencia post-movilidad que convierten el aprendizaje individual en capital colectivo del centro.
        </p>
      </div>
    </div>
  )
}
