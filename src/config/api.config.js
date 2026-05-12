// API Configuration
const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';

export const API_CONFIG = {
  baseUrl: API_BASE_URL,
  endpoints: {
    resultados: {
      presidencial: `${API_BASE_URL}/resultados/presidencial`,
      senadoresDeu: `${API_BASE_URL}/resultados/senadores-deu`,
      senadoresDem: `${API_BASE_URL}/resultados/senadores-dem`,
      diputados: `${API_BASE_URL}/resultados/diputados`,
      parlamentoAndino: `${API_BASE_URL}/resultados/parlamento-andino`,
      porDepartamento: (dept) => `${API_BASE_URL}/resultados/departamento/${dept}`,
    },
    actas: {
      resumen: `${API_BASE_URL}/actas/resumen`,
      detalle: `${API_BASE_URL}/actas/detalle`,
      porMesa: (mesa) => `${API_BASE_URL}/actas/mesa/${mesa}`,
    },
    estadisticas: {
      general: `${API_BASE_URL}/estadisticas/general`,
      porCategoria: (cat) => `${API_BASE_URL}/estadisticas/${cat}`,
    },
  },
  // Use mock data when API is not available
  useMock: import.meta.env.VITE_USE_MOCK !== 'false',
};

export default API_CONFIG;
