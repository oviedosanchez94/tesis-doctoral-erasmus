// Thesis data extracted from Excel and DOCX files
// Doctoral Thesis: Impact of Erasmus+ KA122 actions in secondary/FP centers (South Madrid)

export const thesisInfo = {
  title: 'Impacto de las Acciones KA122 del Programa Erasmus+ en los Centros de Educación Secundaria y Formación Profesional del Sur de la Comunidad de Madrid',
  author: 'Javier Oviedo',
  program: 'Programa Erasmus+ 2021-2027',
  action: 'KA122 — Movilidad de corta duración',
  n: 18,
  context: 'Sur de la Comunidad de Madrid',
}

// ─── Demographics ────────────────────────────────────────────────────────────
export const demographics = {
  sexo: [
    { name: 'Mujer', value: 11, pct: 61.1 },
    { name: 'Hombre', value: 7, pct: 38.9 },
  ],
  edad: [
    { name: '26-35', value: 4 },
    { name: '36-45', value: 10 },
    { name: '46-55', value: 4 },
  ],
  perfil: [
    { name: 'Docente', value: 15, pct: 83.3 },
    { name: 'Equipo Directivo', value: 3, pct: 16.7 },
  ],
  tipoCentro: [
    { name: 'Público', value: 12, pct: 66.7 },
    { name: 'Concertado', value: 6, pct: 33.3 },
  ],
  experiencia: [
    { name: '5-9 años', value: 8 },
    { name: '10-20 años', value: 10 },
  ],
}

// ─── Project Context ─────────────────────────────────────────────────────────
export const projectContext = {
  tematica: [
    { name: 'Inclusión y diversidad', value: 7, color: '#0071e3' },
    { name: 'Participación democrática', value: 5, color: '#34c759' },
    { name: 'Transformación digital', value: 3, color: '#ff9f0a' },
    { name: 'Medio ambiente', value: 2, color: '#30d158' },
    { name: 'Sin especificar', value: 1, color: '#aeaeb2' },
  ],
  paises: [
    { name: 'Alemania', value: 13 },
    { name: 'Italia', value: 8 },
    { name: 'Polonia', value: 7 },
    { name: 'Grecia', value: 4 },
    { name: 'Turquía', value: 4 },
    { name: 'Austria', value: 4 },
    { name: 'Suecia', value: 4 },
    { name: 'Bélgica', value: 4 },
    { name: 'Reino Unido', value: 3 },
    { name: 'Portugal', value: 2 },
    { name: 'Francia', value: 1 },
  ],
  brexit: [
    { name: 'No influyó', value: 12 },
    { name: 'Sí influyó', value: 4 },
    { name: 'No sabe', value: 2 },
  ],
  covid: [
    { name: 'Sí incidió', value: 9 },
    { name: 'No incidió', value: 7 },
    { name: 'No sabe', value: 2 },
  ],
  duracion: [
    { name: 'Una semana', value: 10 },
    { name: 'Menos de una semana', value: 6 },
    { name: 'Más de una semana', value: 2 },
  ],
  comoConocio: [
    { name: 'Centro educativo', value: 14 },
    { name: 'Otros compañeros', value: 3 },
    { name: 'Internet/Redes', value: 1 },
  ],
}

// ─── Impact Results (Likert scale: 1=Nada, 2=Poco, 3=Bastante, 4=Mucho) ────
export const impactResults = {
  // H1: Culture vs individual impact
  culturaOrganizativa: [
    { label: 'Cambios en cultura del centro', mean: 3.11, nada: 0, poco: 1, bastante: 12, mucho: 5 },
    { label: 'Influencia en objetivos educativos', mean: 3.17, nada: 0, poco: 4, bastante: 10, mucho: 4 },
    { label: 'Mejora de convivencia', mean: 3.28, nada: 0, poco: 1, bastante: 14, mucho: 3 },
    { label: 'Cambio actitud hacia internacionalización', mean: 3.44, nada: 0, poco: 2, bastante: 10, mucho: 5 },
  ],
  // H3: Student competences vs academic results
  impactoAlumnado: [
    { label: 'Motivación del alumnado', mean: 3.22, nada: 0, poco: 0, bastante: 7, mucho: 9 },
    { label: 'Resultados académicos', mean: 3.33, nada: 0, poco: 4, bastante: 12, mucho: 1 },
    { label: 'Trabajo en equipo y resolución problemas', mean: 2.72, nada: 0, poco: 0, bastante: 13, mucho: 4 },
    { label: 'Competencias lingüísticas', mean: 3.82, nada: 0, poco: 1, bastante: 10, mucho: 6 },
    { label: 'Aprendizaje cultural', mean: 2.71, nada: 0, poco: 0, bastante: 7, mucho: 9 },
    { label: 'Acceso mercado laboral', mean: 2.78, nada: 0, poco: 2, bastante: 9, mucho: 6 },
  ],
  // H1: Teaching methods
  impactoDocente: [
    { label: 'Cambio en métodos de enseñanza', mean: 2.24, nada: 0, poco: 9, bastante: 5, mucho: 2 },
    { label: 'Uso TIC más efectivo', mean: 2.71, nada: 0, poco: 0, bastante: 7, mucho: 9 },
  ],
  // H4: Administrative barriers
  gestionYBarreras: [
    { label: 'Simplicidad trámites KA122', mean: 3.88, nada: 0, poco: 2, bastante: 2, mucho: 13 },
    { label: 'Ayuda recibida instituciones', mean: 3.47, nada: 1, poco: 4, bastante: 4, mucho: 8 },
    { label: 'Cooperación entre países', mean: 3.86, nada: 0, poco: 0, bastante: 2, mucho: 14 },
  ],
  // Satisfaction
  satisfaccion: {
    muySatisfactoria: 14,
    satisfactoria: 3,
    pocaSatisfactoria: 0,
    nada: 0,
    recomendaria: 17,
    repetiria: 18,
  },
}

// ─── Hypotheses ──────────────────────────────────────────────────────────────
export const hypotheses = [
  {
    id: 'H1',
    color: '#0071e3',
    title: 'Impacto diferencial: individuo vs. centro',
    summary: 'La participación en una acción KA122 genera un impacto más inmediato y perceptible en las prácticas individuales del docente que en la cultura organizativa del centro.',
    result: 'CONFIRMADA',
    resultColor: '#34c759',
    evidence: 'El cambio en métodos de enseñanza individuales (media 2.24) muestra mayor variabilidad que los cambios en cultura institucional (media 3.11–3.44). Los docentes reportan transformaciones personales inmediatas, mientras que el cambio organizativo requiere horizontes temporales más largos.',
    keyMetric: '2.24 vs 3.11',
    keyMetricLabel: 'Cambio docente vs. cultura centro',
    details: [
      'Cambio métodos enseñanza individuales: media 2.24/4',
      'Cambio cultura institucional: media 3.11/4',
      'Cambio actitud internacionalización: media 3.44/4 (el más alto del bloque organizativo)',
    ],
  },
  {
    id: 'H2',
    color: '#ff9f0a',
    title: 'Patrones demográficos en elección de socios',
    summary: 'La elección de los países socios y la temática responde a patrones demográficos y afinidades culturales específicas del centro.',
    result: 'CONFIRMADA PARCIALMENTE',
    resultColor: '#ff9f0a',
    evidence: 'Alemania aparece como socio mayoritario (72% de los centros). La temática dominante es "Inclusión y diversidad" (39%), coherente con los perfiles sociodemográficos de centros del sur de Madrid. El Brexit reorientó flujos de movilidad (22% lo confirma).',
    keyMetric: '72%',
    keyMetricLabel: 'Centros con Alemania como socio',
    details: [
      'Alemania: socio en 13 de 18 proyectos (72%)',
      'Brexit influyó en 4 de 18 centros (22%)',
      'Inclusión y diversidad: temática más frecuente (39%)',
      'Centro educativo: principal canal de conocimiento del programa (78%)',
    ],
  },
  {
    id: 'H3',
    color: '#30d158',
    title: 'Competencias transversales vs. rendimiento académico',
    summary: 'La KA122 produce mejora significativa en competencias transversales del alumnado, pero el desarrollo competencial y el rendimiento académico no evolucionan necesariamente de forma paralela.',
    result: 'REFUTADA PARCIALMENTE',
    resultColor: '#ff453a',
    evidence: 'Las competencias lingüísticas presentan la media más alta (3.82) y la motivación es la más valorada (media 3.22). Sin embargo, los resultados académicos convencionales muestran una media inferior (3.33 con alta dispersión), confirmando la disociación entre competencia y rendimiento.',
    keyMetric: '3.82 vs 3.33',
    keyMetricLabel: 'Competencias lingüísticas vs. resultados académicos',
    details: [
      'Competencias lingüísticas: media 3.82/4 (la más alta de todas)',
      'Motivación alumnado: 9/18 responden "Mucho"',
      'Resultados académicos: media 3.33 pero con 4 respuestas "Poco"',
      'Disociación entre competencia transversal y rendimiento formal confirmada',
    ],
  },
  {
    id: 'H4',
    color: '#bf5af2',
    title: 'Barreras administrativas vs. pedagógicas',
    summary: 'Las principales dificultades percibidas por el profesorado son de naturaleza administrativa e institucional, no pedagógica ni motivacional.',
    result: 'CONFIRMADA',
    resultColor: '#34c759',
    evidence: '100% repetiría la experiencia. 17/18 recomendarían el programa. Sin embargo, la simplicidad percibida de los trámites KA122 obtiene la media más alta del bloque (3.88), lo que sugiere que aunque el programa es recomendable, la carga administrativa continúa siendo el principal reto identificado.',
    keyMetric: '100%',
    keyMetricLabel: 'Repetiría la experiencia',
    details: [
      'Todos los participantes (18/18) repetirían la experiencia',
      '17/18 recomendarían el programa a otros profesores',
      'Simplicidad trámites KA122: media 3.88/4 (percepción de complejidad)',
      'Ayuda institucional recibida: media 3.47 con alta variabilidad',
    ],
  },
]

// ─── Theory sections ─────────────────────────────────────────────────────────
export const theorySections: Array<{
  chapter: string
  title: string
  subtitle: string
  periods?: Array<{ year: string; event: string }>
  competencias?: string[]
  biases?: Array<{ name: string; desc: string }>
}> = [
  {
    chapter: 'Capítulo I',
    title: 'Evolución de los programas educativos europeos',
    subtitle: 'De los acuerdos bilaterales al Programa de Aprendizaje Permanente',
    periods: [
      { year: '1957', event: 'Tratado de Roma — La educación queda fuera de la agenda comunitaria' },
      { year: '1969', event: 'Cumbre de La Haya — Primera visión de integración más allá de lo económico' },
      { year: '1973', event: 'Informe Janne — Primeros pilares de una política educativa europea' },
      { year: '1987', event: 'Lanzamiento del programa Erasmus — Inicio de la movilidad estudiantil' },
      { year: '1999', event: 'Proceso de Bolonia — Convergencia del Espacio Europeo de Educación Superior' },
      { year: '2021', event: 'Erasmus+ 2021-2027 — 26.200 M€ presupuesto total' },
    ],
  },
  {
    chapter: 'Capítulo II',
    title: 'Marco normativo de las competencias clave',
    subtitle: 'Recomendación del Consejo de 2018 como referente de los objetivos KA122',
    competencias: [
      'Competencia en lectoescritura',
      'Competencia multilingüe',
      'Matemática, ciencia y tecnología',
      'Competencia digital',
      'Competencias personales, sociales y para aprender',
      'Competencia ciudadana',
      'Competencia emprendedora',
      'Conciencia y expresión culturales',
    ],
  },
  {
    chapter: 'Capítulo III',
    title: 'Revisión sistemática de la literatura',
    subtitle: 'Tres sesgos estructurales que delimitan el espacio de la investigación',
    biases: [
      {
        name: 'Sesgo de nivel educativo',
        desc: 'Los estudios robustos (Erasmus Impact Study, Souto-Otero et al. 2021) se circunscriben a la educación superior, no extrapolables a secundaria y FP.',
      },
      {
        name: 'Sesgo de escala individual',
        desc: 'La literatura privilegia al participante como unidad de análisis, ignorando cómo los aprendizajes individuales se transfieren al centro como institución.',
      },
      {
        name: 'Sesgo de ciclo programático',
        desc: 'Las KA122 son una modalidad de 2021-2027 sin bibliografía académica consolidada. Esta investigación es una de las primeras aproximaciones empíricas sistemáticas.',
      },
    ],
  },
]
