// Datos de la tesis — verificados contra la fuente primaria "Tabla Limpia Python.xlsx"
// (hoja Datos_Limpios, n = 18). Medias y distribuciones recalculadas desde las
// columnas codificadas (cod). Coinciden con el .docx final de la tesis.
// Tesis doctoral: Impacto de las acciones Erasmus+ KA122 en la comunidad educativa
// de los centros de secundaria y FP del sur de la Comunidad de Madrid (DAT-Sur).

export const thesisInfo = {
  title: 'Impacto de las Acciones Erasmus+ KA122 en la Comunidad Educativa de los Centros del Sur de la Comunidad de Madrid',
  author: 'Javier Oviedo',
  program: 'Programa Erasmus+ 2021-2027',
  action: 'KA122 — Movilidad de corta duración',
  n: 18,
  context: 'Sur de la Comunidad de Madrid (DAT-Sur)',
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
  nivelIngles: [
    { name: 'A1', value: 1 },
    { name: 'B1', value: 1 },
    { name: 'B2', value: 4 },
    { name: 'C1', value: 6 },
    { name: 'C2', value: 6 },
  ],
  competenciaDigital: [
    { name: 'A1', value: 1 },
    { name: 'A2', value: 6 },
    { name: 'B1', value: 3 },
    { name: 'B2', value: 5 },
    { name: 'C1', value: 3 },
  ],
  especialidad: [
    { name: 'Inglés', value: 7 },
    { name: 'Educación Física', value: 2 },
    { name: 'Matemáticas', value: 2 },
    { name: 'Tecnología', value: 1 },
    { name: 'Atención a la diversidad', value: 1 },
    { name: 'Geografía e Historia', value: 1 },
    { name: 'Física / Química', value: 1 },
    { name: 'Lengua castellana y Latín', value: 1 },
    { name: 'Educación y plástica', value: 1 },
    { name: 'Filosofía', value: 1 },
  ],
}

// ─── Project Context ─────────────────────────────────────────────────────────
export const projectContext = {
  tematica: [
    { name: 'Inclusión y diversidad', value: 7, color: '#b30033' },
    { name: 'Participación democrática', value: 6, color: '#7a0022' },
    { name: 'Transformación digital', value: 3, color: '#e87a93' },
    { name: 'Medio ambiente', value: 2, color: '#d6335c' },
  ],
  // Países socios (suma de menciones; un participante puede trabajar con varios)
  paises: [
    { name: 'Alemania', nameEn: 'Germany', flag: '🇩🇪', value: 13 },
    { name: 'Polonia', nameEn: 'Poland', flag: '🇵🇱', value: 9 },
    { name: 'Italia', nameEn: 'Italy', flag: '🇮🇹', value: 8 },
    { name: 'Suecia', nameEn: 'Sweden', flag: '🇸🇪', value: 6 },
    { name: 'Austria', nameEn: 'Austria', flag: '🇦🇹', value: 5 },
    { name: 'Bélgica', nameEn: 'Belgium', flag: '🇧🇪', value: 4 },
    { name: 'Grecia', nameEn: 'Greece', flag: '🇬🇷', value: 4 },
    { name: 'Turquía', nameEn: 'Turkey', flag: '🇹🇷', value: 4 },
    { name: 'Reino Unido', nameEn: 'United Kingdom', flag: '🇬🇧', value: 3 },
    { name: 'Portugal', nameEn: 'Portugal', flag: '🇵🇹', value: 2 },
    { name: 'Francia', nameEn: 'France', flag: '🇫🇷', value: 1 },
    { name: 'Luxemburgo', nameEn: 'Luxembourg', flag: '🇱🇺', value: 1 },
    { name: 'Lituania', nameEn: 'Lithuania', flag: '🇱🇹', value: 1 },
  ],
  brexit: [
    { name: 'No influyó', value: 12 },
    { name: 'Sí influyó', value: 4 },
    { name: 'No sabe', value: 2 },
  ],
  covid: [
    { name: 'Sí incidió', value: 9 },
    { name: 'No incidió', value: 8 },
    { name: 'No sabe', value: 1 },
  ],
  duracion: [
    { name: 'Una semana', value: 10 },
    { name: 'Menos de una semana', value: 6 },
    { name: 'Más de una semana', value: 1 },
  ],
  comoConocio: [
    { name: 'Centro educativo', value: 14 },
    { name: 'Otros compañeros', value: 3 },
    { name: 'Internet/Redes', value: 1 },
  ],
}

// ─── Impact Results (escala Likert: 1=Nada, 2=Poco, 3=Bastante, 4=Mucho) ─────
// En KA122 quien protagoniza la movilidad es el ALUMNADO; el profesorado encuestado
// acompaña/informa. Los ítems recogen su percepción del impacto.
export const impactResults = {
  // H1 — plano organizativo (centro)
  culturaOrganizativa: [
    { label: 'Cambios en cultura del centro', mean: 3.22, nada: 0, poco: 1, bastante: 12, mucho: 5 },
    { label: 'Influencia en objetivos educativos', mean: 3.06, nada: 0, poco: 3, bastante: 11, mucho: 4 },
    { label: 'Mejora de convivencia intercultural', mean: 3.06, nada: 0, poco: 2, bastante: 13, mucho: 3 },
    { label: 'Actitud del profesorado hacia internacionalización', mean: 3.17, nada: 0, poco: 2, bastante: 11, mucho: 5 },
  ],
  // H3 — impacto en el alumnado (percepción docente)
  impactoAlumnado: [
    { label: 'Aprendizaje intercultural del alumnado', mean: 3.89, nada: 0, poco: 0, bastante: 2, mucho: 16 },
    { label: 'Motivación del alumnado', mean: 3.53, nada: 0, poco: 0, bastante: 8, mucho: 9 },
    { label: 'Competencias lingüísticas', mean: 3.29, nada: 0, poco: 1, bastante: 10, mucho: 6 },
    { label: 'Trabajo en equipo y resolución de problemas', mean: 3.24, nada: 0, poco: 0, bastante: 13, mucho: 4 },
    { label: 'Acceso al mercado laboral', mean: 3.24, nada: 0, poco: 2, bastante: 9, mucho: 6 },
    { label: 'Resultados académicos convencionales', mean: 2.82, nada: 0, poco: 4, bastante: 12, mucho: 1 },
  ],
  // H1 — plano individual / práctica del profesorado acompañante
  impactoDocente: [
    { label: 'Cambio en métodos de enseñanza', mean: 2.59, nada: 0, poco: 9, bastante: 6, mucho: 2 },
  ],
  // H4 — gestión y barreras
  gestionYBarreras: [
    { label: 'Sencillez de los trámites KA122', mean: 2.24, nada: 3, poco: 8, bastante: 5, mucho: 1 },
    { label: 'Ayuda institucional en la solicitud', mean: 2.53, nada: 1, poco: 8, bastante: 6, mucho: 2 },
    { label: 'Cooperación entre países socios', mean: 3.50, nada: 0, poco: 2, bastante: 5, mucho: 11 },
  ],
  // Satisfacción y continuidad
  satisfaccion: {
    muySatisfactoria: 15,
    satisfactoria: 3,
    pocaSatisfactoria: 0,
    nada: 0,
    recomendaria: 18, // 0 valoraciones negativas (media 3,78)
    repetiria: 18,
  },
  // Ítems dicotómicos (Sí/No) — no Likert
  dicotomicos: {
    usoTicEfectivo: { si: 9, no: 8 },
    eTwinning: { si: 10, no: 8 },
    eleccionPropia: { si: 18, no: 0 },
  },
}

// ─── Hypotheses ──────────────────────────────────────────────────────────────
export const hypotheses = [
  {
    id: 'H1',
    color: '#7a0022',
    title: 'Impacto diferencial: práctica individual vs. centro',
    summary: 'La participación en una acción KA122 genera un impacto más inmediato en las prácticas individuales (del profesorado acompañante) que en la cultura organizativa del centro. La distinción no opone docente y centro, sino que examina a qué ritmo el impacto recorre la cadena hacia el aula y el alumnado.',
    result: 'NO CONFIRMADA',
    resultColor: '#7a0022',
    evidence: 'El índice de impacto individual (M = 2,92) NO supera al organizativo (M = 3,14), y la prueba de Wilcoxon no halla diferencia significativa (W = 12; p = 0,104). El hallazgo relevante es otro: la brecha no se da entre individuo y centro, sino DENTRO del plano individual, entre el cambio actitudinal —que sí se produce (actitud M = 3,17)— y la transformación de los métodos de enseñanza, el ítem más bajo del cuestionario (M = 2,59; 52,9 % responde "Poco"). Cambio de primer orden sí; de segundo orden no.',
    keyMetric: '2,92 vs 3,14',
    keyMetricLabel: 'Índice individual vs. organizativo (n.s.)',
    details: [
      'Índice individual M = 2,92 vs. organizativo M = 3,14 (Wilcoxon p = 0,104, n.s.)',
      'Actitud hacia internacionalización M = 3,17 vs. métodos de enseñanza M = 2,59',
      'Actitud correlaciona con cultura del centro (ρ = 0,553; p = 0,017), pero los métodos no (ρ = 0,247; p = 0,340)',
      'La brecha real es actitud (1.er orden) vs. práctica pedagógica (2.º orden)',
    ],
  },
  {
    id: 'H2',
    color: '#d6335c',
    title: 'Patrones en la elección de socios y temática',
    summary: 'La elección de los países socios y la temática del proyecto responde a patrones demográficos y afinidades culturales del centro.',
    result: 'CONFIRMADA PARCIALMENTE',
    resultColor: '#d6335c',
    evidence: 'Los patrones descriptivos confirman la hipótesis: jerarquía estable de destinos (Alemania 72,2 %, Polonia 50 %, Italia 44,4 %), diferenciación entre centros públicos y concertados, y por perfil profesional (directivos vs. docentes). Sin embargo, ninguna prueba inferencial alcanza significación (Mann-Whitney n.s.), lo que es esperable con N = 18: los indicios son coherentes con la literatura, pero la potencia estadística no permite confirmarlos de forma concluyente.',
    keyMetric: '72,2 %',
    keyMetricLabel: 'Participantes con Alemania como socio',
    details: [
      'Núcleo de socios: Alemania 72,2 %, Polonia 50 %, Italia 44,4 %, Suecia 33,3 %',
      'Centros concertados: red más concentrada (Alemania en el 100 %)',
      'Diferenciación temática por perfil (directivos vs. docentes)',
      'Patrones descriptivos sólidos, sin significación inferencial (N = 18)',
    ],
  },
  {
    id: 'H3',
    color: '#e87a93',
    title: 'Competencias transversales vs. rendimiento académico',
    summary: 'La KA122 mejora las competencias transversales del alumnado, pero esa mejora no se traslada a los resultados académicos convencionales: ambas dimensiones no evolucionan en paralelo.',
    result: 'NO CONFIRMADA',
    resultColor: '#8f0028',
    evidence: 'Las competencias transversales puntúan alto —motivación M = 3,53; competencias lingüísticas M = 3,29; trabajo en equipo M = 3,24— frente a los resultados académicos (M = 2,82). Las tres pruebas de Wilcoxon confirman que la diferencia es significativa (p = 0,003; 0,011; 0,035) y ninguna competencia correlaciona con el rendimiento (todos los p > 0,18). La hipótesis no se confirma en su formulación literal: las dos dimensiones no evolucionan en paralelo, y esa refutación constituye la aportación más informativa.',
    keyMetric: '3,29 vs 2,82',
    keyMetricLabel: 'Competencias lingüísticas vs. resultados académicos',
    details: [
      'Competencias transversales: motivación 3,53 · lingüísticas 3,29 · trabajo en equipo 3,24',
      'Resultados académicos M = 2,82 (el bloque más bajo del alumnado)',
      'Wilcoxon competencias > rendimiento: p = 0,003 / 0,011 / 0,035',
      'Único vínculo significativo: motivación ↔ trabajo en equipo (ρ = 0,523; p = 0,031)',
    ],
  },
  {
    id: 'H4',
    color: '#b30033',
    title: 'Barreras administrativas vs. pedagógicas',
    summary: 'Las principales dificultades percibidas son de naturaleza administrativa e institucional, no pedagógica ni motivacional; y esa carga no erosiona la intención de repetir.',
    result: 'CONFIRMADA',
    resultColor: '#b30033',
    evidence: 'Los dos ítems administrativos son los más bajos del cuestionario —sencillez de los trámites M = 2,24 (64,7 % negativo); ayuda institucional M = 2,53—, mientras que motivación y satisfacción puntúan alto. Pese a ello, el 100 % se incorporó por elección propia y repetiría, y la insatisfacción con los trámites no se asocia a menor adhesión (ρ = −0,068; p = 0,796). La paradoja —crítica burocrática + adhesión unánime— es el hallazgo central de H4.',
    keyMetric: '100 %',
    keyMetricLabel: 'Repetiría la experiencia',
    details: [
      'Sencillez de trámites M = 2,24 — el ítem más bajo (64,7 % en categorías negativas)',
      'Ayuda institucional M = 2,53 (52,9 % negativo)',
      '100 % se incorporó por elección propia y repetiría la experiencia',
      'Trámites ↔ recomendar el programa: ρ = −0,068 (p = 0,796) → independencia',
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
        desc: 'La práctica totalidad de la investigación existente analiza el impacto de movilidades en el marco del ciclo 2014-2020 o anteriores, sin considerar las especificidades del diseño 2021-2027 ni las características de las KA122 como modalidad de acceso para centros sin experiencia previa.',
      },
    ],
  },
]
