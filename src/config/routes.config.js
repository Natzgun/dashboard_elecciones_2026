/**
 * Route definitions for the Electoral Dashboard
 */
export const ROUTES = {
  HOME: '/',
  PRESIDENCIAL: '/presidencial',
  SENADORES_DEU: '/senadores-deu',
  SENADORES_DEM: '/senadores-dem',
  DIPUTADOS: '/diputados',
  PARLAMENTO_ANDINO: '/parlamento-andino',
  REGIONAL: '/regional',
  REGIONAL_DEPARTAMENTO: '/regional/:departamento',
  CONSULTA_ACTAS: '/consulta/actas',
  MAPA: '/mapa',
  PIPELINE: '/pipeline',
};

/**
 * Election categories configuration
 */
export const ELECTION_CATEGORIES = [
  { key: 'presidencial', label: 'Presidencial', route: '/presidencial', icon: 'Crown', description: 'Elección del Presidente de la República' },
  { key: 'senadores_deu', label: 'Senadores DEU', route: '/senadores-deu', icon: 'Landmark', description: 'Senadores por Distrito Electoral Único' },
  { key: 'senadores_dem', label: 'Senadores DEM', route: '/senadores-dem', icon: 'Building2', description: 'Senadores por Distrito Electoral Múltiple' },
  { key: 'diputados', label: 'Diputados', route: '/diputados', icon: 'Users', description: 'Representantes a la Cámara de Diputados' },
  { key: 'parlamento_andino', label: 'Parlamento Andino', route: '/parlamento-andino', icon: 'Globe', description: 'Representantes al Parlamento Andino' },
];

/**
 * Acta status definitions
 */
export const ACTA_STATUSES = [
  { key: 'contabilizadas', label: 'Contabilizadas', color: '#10b981', bgColor: 'bg-emerald-500/10', textColor: 'text-emerald-400' },
  { key: 'envio_jee', label: 'Para envío al JEE', color: '#f59e0b', bgColor: 'bg-amber-500/10', textColor: 'text-amber-400' },
  { key: 'pendientes', label: 'Pendientes', color: '#ef4444', bgColor: 'bg-red-500/10', textColor: 'text-red-400' },
];

/**
 * Total national mesas
 */
export const TOTAL_MESAS = 92766;

/**
 * Departments of Peru
 */
export const DEPARTAMENTOS = [
  'AMAZONAS', 'ÁNCASH', 'APURÍMAC', 'AREQUIPA', 'AYACUCHO',
  'CAJAMARCA', 'CALLAO', 'CUSCO', 'HUANCAVELICA', 'HUÁNUCO',
  'ICA', 'JUNÍN', 'LA LIBERTAD', 'LAMBAYEQUE', 'LIMA',
  'LIMA PROVINCIAS', 'LORETO', 'MADRE DE DIOS', 'MOQUEGUA',
  'PASCO', 'PIURA', 'PUNO', 'SAN MARTÍN', 'TACNA',
  'TUMBES', 'UCAYALI', 'PERUANOS EN EL EXTRANJERO',
];

/**
 * Party colors for consistent chart rendering
 */
export const PARTY_COLORS = {
  'FUERZA POPULAR': '#FF6B00',
  'ACCIÓN POPULAR': '#E41E20',
  'ALIANZA PARA EL PROGRESO': '#0066CC',
  'RENOVACIÓN POPULAR': '#004B87',
  'PERÚ LIBRE': '#CC0000',
  'AVANZA PAÍS': '#1B3A6B',
  'JUNTOS POR EL PERÚ': '#8B1A1A',
  'PARTIDO MORADO': '#6B21A8',
  'PODEMOS PERÚ': '#00B4D8',
  'SOMOS PERÚ': '#E63946',
  'DEMOCRACIA DIRECTA': '#2D6A4F',
  'FRENTE AMPLIO': '#D4380D',
};

/**
 * Default chart color palette
 */
export const CHART_COLORS = [
  '#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6',
  '#06b6d4', '#ec4899', '#14b8a6', '#f97316', '#6366f1',
  '#84cc16', '#e11d48', '#0ea5e9', '#a855f7', '#22c55e',
];

/**
 * Sidebar navigation items
 */
export const NAV_ITEMS = [
  { label: 'Dashboard', route: ROUTES.HOME, icon: 'LayoutDashboard' },
  { 
    label: 'Resultados', 
    icon: 'Vote',
    children: ELECTION_CATEGORIES.map(cat => ({
      label: cat.label,
      route: cat.route,
      icon: cat.icon,
    })),
  },
  { label: 'Regional', route: ROUTES.REGIONAL, icon: 'MapPin' },
  { label: 'Mapa Electoral', route: ROUTES.MAPA, icon: 'Map' },
  { label: 'Consulta Actas', route: ROUTES.CONSULTA_ACTAS, icon: 'FileSearch' },
  { label: 'Pipeline Hadoop', route: ROUTES.PIPELINE, icon: 'Workflow' },
];

export default ROUTES;
