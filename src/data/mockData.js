/**
 * Comprehensive mock data for the Electoral Dashboard
 * Reflects the 5 election categories and 3 acta statuses
 */

// ============ ACTAS SUMMARY ============
export const actasResumen = {
  totalMesas: 92766,
  categorias: {
    presidencial: {
      label: 'Presidencial',
      contabilizadas: { cantidad: 85432, porcentaje: 92.1 },
      envio_jee: { cantidad: 4212, porcentaje: 4.5 },
      pendientes: { cantidad: 3122, porcentaje: 3.4 },
      total: 92766,
    },
    senadores_deu: {
      label: 'Senadores DEU',
      contabilizadas: { cantidad: 83198, porcentaje: 89.7 },
      envio_jee: { cantidad: 5432, porcentaje: 5.9 },
      pendientes: { cantidad: 4136, porcentaje: 4.5 },
      total: 92766,
    },
    senadores_dem: {
      label: 'Senadores DEM',
      contabilizadas: { cantidad: 84678, porcentaje: 91.3 },
      envio_jee: { cantidad: 4876, porcentaje: 5.3 },
      pendientes: { cantidad: 3212, porcentaje: 3.5 },
      total: 92766,
    },
    diputados: {
      label: 'Diputados',
      contabilizadas: { cantidad: 82098, porcentaje: 88.5 },
      envio_jee: { cantidad: 6234, porcentaje: 6.7 },
      pendientes: { cantidad: 4434, porcentaje: 4.8 },
      total: 92766,
    },
    parlamento_andino: {
      label: 'Parlamento Andino',
      contabilizadas: { cantidad: 83654, porcentaje: 90.2 },
      envio_jee: { cantidad: 5432, porcentaje: 5.9 },
      pendientes: { cantidad: 3680, porcentaje: 4.0 },
      total: 92766,
    },
  },
};

// ============ PRESIDENTIAL RESULTS ============
export const resultadosPresidencial = {
  categoria: 'presidencial',
  label: 'Elección Presidencial',
  totalVotos: 18543210,
  votosValidos: 17234567,
  votosNulos: 876543,
  votosBlancos: 432100,
  candidatos: [
    { id: 1, nombre: 'CANDIDATO A', partido: 'ALIANZA PARA EL PROGRESO', votos: 4321567, porcentaje: 25.08, color: '#0066CC' },
    { id: 2, nombre: 'CANDIDATO B', partido: 'FUERZA POPULAR', votos: 3876543, porcentaje: 22.49, color: '#FF6B00' },
    { id: 3, nombre: 'CANDIDATO C', partido: 'RENOVACIÓN POPULAR', votos: 2987654, porcentaje: 17.33, color: '#004B87' },
    { id: 4, nombre: 'CANDIDATO D', partido: 'ACCIÓN POPULAR', votos: 2156789, porcentaje: 12.51, color: '#E41E20' },
    { id: 5, nombre: 'CANDIDATO E', partido: 'PERÚ LIBRE', votos: 1432567, porcentaje: 8.31, color: '#CC0000' },
    { id: 6, nombre: 'CANDIDATO F', partido: 'AVANZA PAÍS', votos: 987654, porcentaje: 5.73, color: '#1B3A6B' },
    { id: 7, nombre: 'CANDIDATO G', partido: 'JUNTOS POR EL PERÚ', votos: 654321, porcentaje: 3.80, color: '#8B1A1A' },
    { id: 8, nombre: 'CANDIDATO H', partido: 'PARTIDO MORADO', votos: 432109, porcentaje: 2.51, color: '#6B21A8' },
    { id: 9, nombre: 'CANDIDATO I', partido: 'PODEMOS PERÚ', votos: 234567, porcentaje: 1.36, color: '#00B4D8' },
    { id: 10, nombre: 'CANDIDATO J', partido: 'SOMOS PERÚ', votos: 150796, porcentaje: 0.87, color: '#E63946' },
  ],
  actas: actasResumen.categorias.presidencial,
};

// ============ SENADORES DEU RESULTS ============
export const resultadosSenadoresDEU = {
  categoria: 'senadores_deu',
  label: 'Senadores - Distrito Electoral Único',
  totalVotos: 18234567,
  votosValidos: 16987654,
  votosNulos: 812345,
  votosBlancos: 434568,
  partidos: [
    { id: 1, partido: 'ALIANZA PARA EL PROGRESO', votos: 3456789, porcentaje: 20.35, escanos: 8, color: '#0066CC' },
    { id: 2, partido: 'FUERZA POPULAR', votos: 3123456, porcentaje: 18.39, escanos: 7, color: '#FF6B00' },
    { id: 3, partido: 'RENOVACIÓN POPULAR', votos: 2654321, porcentaje: 15.63, escanos: 6, color: '#004B87' },
    { id: 4, partido: 'ACCIÓN POPULAR', votos: 2234567, porcentaje: 13.15, escanos: 5, color: '#E41E20' },
    { id: 5, partido: 'PERÚ LIBRE', votos: 1543210, porcentaje: 9.08, escanos: 4, color: '#CC0000' },
    { id: 6, partido: 'AVANZA PAÍS', votos: 1234567, porcentaje: 7.27, escanos: 3, color: '#1B3A6B' },
    { id: 7, partido: 'PODEMOS PERÚ', votos: 987654, porcentaje: 5.81, escanos: 2, color: '#00B4D8' },
    { id: 8, partido: 'JUNTOS POR EL PERÚ', votos: 876543, porcentaje: 5.16, escanos: 2, color: '#8B1A1A' },
    { id: 9, partido: 'PARTIDO MORADO', votos: 543210, porcentaje: 3.20, escanos: 1, color: '#6B21A8' },
    { id: 10, partido: 'SOMOS PERÚ', votos: 333337, porcentaje: 1.96, escanos: 1, color: '#E63946' },
  ],
  actas: actasResumen.categorias.senadores_deu,
};

// ============ SENADORES DEM RESULTS ============
export const resultadosSenadoresDEM = {
  categoria: 'senadores_dem',
  label: 'Senadores - Distrito Electoral Múltiple',
  totalVotos: 18123456,
  votosValidos: 16876543,
  votosNulos: 823456,
  votosBlancos: 423457,
  departamentos: [
    { departamento: 'LIMA', partidos: [
      { partido: 'ALIANZA PARA EL PROGRESO', votos: 1234567, porcentaje: 24.5, escanos: 3 },
      { partido: 'FUERZA POPULAR', votos: 1098765, porcentaje: 21.8, escanos: 2 },
      { partido: 'RENOVACIÓN POPULAR', votos: 876543, porcentaje: 17.4, escanos: 2 },
    ]},
    { departamento: 'AREQUIPA', partidos: [
      { partido: 'RENOVACIÓN POPULAR', votos: 234567, porcentaje: 28.3, escanos: 1 },
      { partido: 'ALIANZA PARA EL PROGRESO', votos: 198765, porcentaje: 24.0, escanos: 1 },
      { partido: 'ACCIÓN POPULAR', votos: 167890, porcentaje: 20.3, escanos: 1 },
    ]},
    { departamento: 'CUSCO', partidos: [
      { partido: 'PERÚ LIBRE', votos: 198765, porcentaje: 26.7, escanos: 1 },
      { partido: 'ACCIÓN POPULAR', votos: 176543, porcentaje: 23.7, escanos: 1 },
      { partido: 'FUERZA POPULAR', votos: 145678, porcentaje: 19.6, escanos: 0 },
    ]},
  ],
  actas: actasResumen.categorias.senadores_dem,
};

// ============ DIPUTADOS RESULTS ============
export const resultadosDiputados = {
  categoria: 'diputados',
  label: 'Diputados',
  totalVotos: 18345678,
  votosValidos: 17098765,
  votosNulos: 834567,
  votosBlancos: 412346,
  partidos: [
    { id: 1, partido: 'ALIANZA PARA EL PROGRESO', votos: 3234567, porcentaje: 18.91, escanos: 24, color: '#0066CC' },
    { id: 2, partido: 'FUERZA POPULAR', votos: 2987654, porcentaje: 17.47, escanos: 22, color: '#FF6B00' },
    { id: 3, partido: 'RENOVACIÓN POPULAR', votos: 2543210, porcentaje: 14.87, escanos: 19, color: '#004B87' },
    { id: 4, partido: 'ACCIÓN POPULAR', votos: 2123456, porcentaje: 12.42, escanos: 16, color: '#E41E20' },
    { id: 5, partido: 'PERÚ LIBRE', votos: 1876543, porcentaje: 10.98, escanos: 14, color: '#CC0000' },
    { id: 6, partido: 'AVANZA PAÍS', votos: 1345678, porcentaje: 7.87, escanos: 10, color: '#1B3A6B' },
    { id: 7, partido: 'PODEMOS PERÚ', votos: 1098765, porcentaje: 6.43, escanos: 8, color: '#00B4D8' },
    { id: 8, partido: 'JUNTOS POR EL PERÚ', votos: 876543, porcentaje: 5.13, escanos: 7, color: '#8B1A1A' },
    { id: 9, partido: 'PARTIDO MORADO', votos: 654321, porcentaje: 3.83, escanos: 5, color: '#6B21A8' },
    { id: 10, partido: 'SOMOS PERÚ', votos: 358028, porcentaje: 2.09, escanos: 3, color: '#E63946' },
  ],
  actas: actasResumen.categorias.diputados,
};

// ============ PARLAMENTO ANDINO RESULTS ============
export const resultadosParlamentoAndino = {
  categoria: 'parlamento_andino',
  label: 'Parlamento Andino',
  totalVotos: 17876543,
  votosValidos: 16543210,
  votosNulos: 901234,
  votosBlancos: 432099,
  partidos: [
    { id: 1, partido: 'ALIANZA PARA EL PROGRESO', votos: 2876543, porcentaje: 17.39, escanos: 1, color: '#0066CC' },
    { id: 2, partido: 'FUERZA POPULAR', votos: 2654321, porcentaje: 16.05, escanos: 1, color: '#FF6B00' },
    { id: 3, partido: 'RENOVACIÓN POPULAR', votos: 2345678, porcentaje: 14.18, escanos: 1, color: '#004B87' },
    { id: 4, partido: 'ACCIÓN POPULAR', votos: 2098765, porcentaje: 12.69, escanos: 1, color: '#E41E20' },
    { id: 5, partido: 'PERÚ LIBRE', votos: 1876543, porcentaje: 11.34, escanos: 1, color: '#CC0000' },
    { id: 6, partido: 'AVANZA PAÍS', votos: 1543210, porcentaje: 9.33, escanos: 0, color: '#1B3A6B' },
    { id: 7, partido: 'PODEMOS PERÚ', votos: 1234567, porcentaje: 7.46, escanos: 0, color: '#00B4D8' },
    { id: 8, partido: 'JUNTOS POR EL PERÚ', votos: 987654, porcentaje: 5.97, escanos: 0, color: '#8B1A1A' },
    { id: 9, partido: 'PARTIDO MORADO', votos: 543210, porcentaje: 3.28, escanos: 0, color: '#6B21A8' },
    { id: 10, partido: 'SOMOS PERÚ', votos: 382719, porcentaje: 2.31, escanos: 0, color: '#E63946' },
  ],
  actas: actasResumen.categorias.parlamento_andino,
};

// ============ DEPARTAMENTOS SUMMARY ============
export const resultadosDepartamentos = [
  { departamento: 'LIMA', mesas: 28456, contabilizadas: 26789, porcentaje: 94.1, ganador: 'ALIANZA PARA EL PROGRESO', electores: 7234567 },
  { departamento: 'AREQUIPA', mesas: 4567, contabilizadas: 4234, porcentaje: 92.7, ganador: 'RENOVACIÓN POPULAR', electores: 1098765 },
  { departamento: 'LA LIBERTAD', mesas: 4234, contabilizadas: 3987, porcentaje: 94.2, ganador: 'ALIANZA PARA EL PROGRESO', electores: 987654 },
  { departamento: 'PIURA', mesas: 4123, contabilizadas: 3876, porcentaje: 94.0, ganador: 'FUERZA POPULAR', electores: 976543 },
  { departamento: 'CUSCO', mesas: 3876, contabilizadas: 3543, porcentaje: 91.4, ganador: 'PERÚ LIBRE', electores: 876543 },
  { departamento: 'JUNÍN', mesas: 3567, contabilizadas: 3234, porcentaje: 90.7, ganador: 'PERÚ LIBRE', electores: 843210 },
  { departamento: 'CAJAMARCA', mesas: 3456, contabilizadas: 3198, porcentaje: 92.5, ganador: 'ACCIÓN POPULAR', electores: 812345 },
  { departamento: 'LAMBAYEQUE', mesas: 3234, contabilizadas: 3012, porcentaje: 93.1, ganador: 'ALIANZA PARA EL PROGRESO', electores: 789012 },
  { departamento: 'PUNO', mesas: 3123, contabilizadas: 2876, porcentaje: 92.1, ganador: 'PERÚ LIBRE', electores: 765432 },
  { departamento: 'ÁNCASH', mesas: 2987, contabilizadas: 2756, porcentaje: 92.3, ganador: 'ACCIÓN POPULAR', electores: 743210 },
  { departamento: 'CALLAO', mesas: 2876, contabilizadas: 2698, porcentaje: 93.8, ganador: 'ALIANZA PARA EL PROGRESO', electores: 723456 },
  { departamento: 'ICA', mesas: 2345, contabilizadas: 2198, porcentaje: 93.7, ganador: 'RENOVACIÓN POPULAR', electores: 634567 },
  { departamento: 'LORETO', mesas: 2234, contabilizadas: 1987, porcentaje: 88.9, ganador: 'FUERZA POPULAR', electores: 598765 },
  { departamento: 'HUÁNUCO', mesas: 2123, contabilizadas: 1945, porcentaje: 91.6, ganador: 'ACCIÓN POPULAR', electores: 543210 },
  { departamento: 'SAN MARTÍN', mesas: 2098, contabilizadas: 1934, porcentaje: 92.2, ganador: 'ALIANZA PARA EL PROGRESO', electores: 534567 },
  { departamento: 'AYACUCHO', mesas: 1987, contabilizadas: 1823, porcentaje: 91.7, ganador: 'PERÚ LIBRE', electores: 487654 },
  { departamento: 'TACNA', mesas: 1234, contabilizadas: 1156, porcentaje: 93.7, ganador: 'RENOVACIÓN POPULAR', electores: 298765 },
  { departamento: 'APURÍMAC', mesas: 1198, contabilizadas: 1098, porcentaje: 91.7, ganador: 'PERÚ LIBRE', electores: 276543 },
  { departamento: 'UCAYALI', mesas: 1123, contabilizadas: 1034, porcentaje: 92.1, ganador: 'FUERZA POPULAR', electores: 265432 },
  { departamento: 'HUANCAVELICA', mesas: 1098, contabilizadas: 998, porcentaje: 90.9, ganador: 'PERÚ LIBRE', electores: 254321 },
  { departamento: 'MOQUEGUA', mesas: 678, contabilizadas: 634, porcentaje: 93.5, ganador: 'RENOVACIÓN POPULAR', electores: 167890 },
  { departamento: 'TUMBES', mesas: 654, contabilizadas: 612, porcentaje: 93.6, ganador: 'ALIANZA PARA EL PROGRESO', electores: 156789 },
  { departamento: 'PASCO', mesas: 876, contabilizadas: 798, porcentaje: 91.1, ganador: 'ACCIÓN POPULAR', electores: 198765 },
  { departamento: 'MADRE DE DIOS', mesas: 432, contabilizadas: 398, porcentaje: 92.1, ganador: 'FUERZA POPULAR', electores: 98765 },
  { departamento: 'LIMA PROVINCIAS', mesas: 2876, contabilizadas: 2687, porcentaje: 93.4, ganador: 'ALIANZA PARA EL PROGRESO', electores: 698765 },
  { departamento: 'PERUANOS EN EL EXTRANJERO', mesas: 1234, contabilizadas: 987, porcentaje: 80.0, ganador: 'RENOVACIÓN POPULAR', electores: 234567 },
];

// ============ ACTAS DETALLE (SAMPLE) ============
export const actasDetalle = Array.from({ length: 100 }, (_, i) => {
  const estados = ['contabilizada', 'envio_jee', 'pendiente'];
  const categorias = ['presidencial', 'senadores_deu', 'senadores_dem', 'diputados', 'parlamento_andino'];
  const depts = ['LIMA', 'AREQUIPA', 'CUSCO', 'PIURA', 'LA LIBERTAD', 'JUNÍN', 'CAJAMARCA', 'LAMBAYEQUE'];
  
  return {
    id: 100000 + i,
    mesa: 100000 + i,
    departamento: depts[i % depts.length],
    provincia: `PROVINCIA ${(i % 5) + 1}`,
    distrito: `DISTRITO ${(i % 8) + 1}`,
    localVotacion: `I.E. ${1000 + i}`,
    categoria: categorias[i % categorias.length],
    estado: estados[i % 3 === 0 ? 0 : i % 5 === 0 ? 1 : i % 7 === 0 ? 2 : 0],
    electoresHabiles: 200 + (i % 100),
    votosEmitidos: 180 + (i % 80),
    fechaProcesamiento: i % 3 !== 2 ? new Date(2026, 3, 13, 8 + (i % 14), i % 60).toISOString() : null,
  };
});

// ============ PIPELINE STATUS ============
export const pipelineStatus = {
  etapas: [
    { id: 1, nombre: 'Consumo API ONPE', estado: 'completado', inicio: '2026-04-13T08:00:00Z', fin: '2026-04-13T08:15:00Z', registros: 92766, descripcion: 'Descarga de datos desde la API de resultados de la ONPE' },
    { id: 2, nombre: 'Transformación a CSV', estado: 'completado', inicio: '2026-04-13T08:16:00Z', fin: '2026-04-13T08:20:00Z', registros: 92766, descripcion: 'Conversión de JSON a formato plano CSV' },
    { id: 3, nombre: 'Carga a HDFS', estado: 'completado', inicio: '2026-04-13T08:21:00Z', fin: '2026-04-13T08:25:00Z', registros: 92766, descripcion: 'Subida de archivos CSV al sistema de archivos distribuido HDFS' },
    { id: 4, nombre: 'MapReduce - Conteo', estado: 'completado', inicio: '2026-04-13T08:26:00Z', fin: '2026-04-13T08:45:00Z', registros: 92766, descripcion: 'Ejecución del job MapReduce para conteo de votos' },
    { id: 5, nombre: 'Agregación de Resultados', estado: 'completado', inicio: '2026-04-13T08:46:00Z', fin: '2026-04-13T08:50:00Z', registros: 27, descripcion: 'Generación de resultados agregados por departamento y categoría' },
  ],
  ultimaActualizacion: '2026-04-13T08:50:00Z',
};

// ============ GET DATA BY CATEGORY ============
export function getResultsByCategory(category) {
  const map = {
    presidencial: resultadosPresidencial,
    senadores_deu: resultadosSenadoresDEU,
    senadores_dem: resultadosSenadoresDEM,
    diputados: resultadosDiputados,
    parlamento_andino: resultadosParlamentoAndino,
  };
  return map[category] || resultadosPresidencial;
}

export function getActasByCategory(category) {
  return actasResumen.categorias[category] || actasResumen.categorias.presidencial;
}
