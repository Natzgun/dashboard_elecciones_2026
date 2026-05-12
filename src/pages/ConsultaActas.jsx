import { useState, useMemo } from 'react';
import { Search, Filter, FileCheck, FileWarning, FileClock, ChevronDown, ChevronUp } from 'lucide-react';
import { actasDetalle, actasResumen } from '@/data/mockData';
import { formatNumber, formatDate } from '@/utils/formatters';
import { ELECTION_CATEGORIES, ACTA_STATUSES, TOTAL_MESAS } from '@/config/routes.config';
import KPICard from '@/components/dashboard/KPICard';

const STATUS_STYLES = {
  contabilizada: { bg: 'bg-emerald-500/10', text: 'text-emerald-400', border: 'border-emerald-500/30', label: 'Contabilizada' },
  envio_jee: { bg: 'bg-amber-500/10', text: 'text-amber-400', border: 'border-amber-500/30', label: 'Para envío JEE' },
  pendiente: { bg: 'bg-red-500/10', text: 'text-red-400', border: 'border-red-500/30', label: 'Pendiente' },
};

export default function ConsultaActas() {
  const [search, setSearch] = useState('');
  const [filterEstado, setFilterEstado] = useState('todas');
  const [filterCategoria, setFilterCategoria] = useState('todas');
  const [sortField, setSortField] = useState('mesa');
  const [sortDir, setSortDir] = useState('asc');
  const [page, setPage] = useState(1);
  const pageSize = 15;

  const filteredData = useMemo(() => {
    let data = [...actasDetalle];

    if (search) {
      const q = search.toLowerCase();
      data = data.filter(
        (a) => a.mesa.toString().includes(q) || a.departamento.toLowerCase().includes(q) || a.distrito.toLowerCase().includes(q)
      );
    }
    if (filterEstado !== 'todas') {
      data = data.filter((a) => a.estado === filterEstado);
    }
    if (filterCategoria !== 'todas') {
      data = data.filter((a) => a.categoria === filterCategoria);
    }

    data.sort((a, b) => {
      const aVal = a[sortField];
      const bVal = b[sortField];
      const cmp = typeof aVal === 'string' ? aVal.localeCompare(bVal) : aVal - bVal;
      return sortDir === 'asc' ? cmp : -cmp;
    });

    return data;
  }, [search, filterEstado, filterCategoria, sortField, sortDir]);

  const totalPages = Math.ceil(filteredData.length / pageSize);
  const pageData = filteredData.slice((page - 1) * pageSize, page * pageSize);

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDir(sortDir === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDir('asc');
    }
  };

  const SortIcon = ({ field }) => {
    if (sortField !== field) return null;
    return sortDir === 'asc' ? <ChevronUp size={14} /> : <ChevronDown size={14} />;
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold text-surface-100">Consulta de Actas</h1>
        <p className="text-sm text-surface-200/50 mt-1">
          Busca y filtra las {formatNumber(TOTAL_MESAS)} actas/mesas a nivel nacional
        </p>
      </div>

      {/* Summary KPIs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 stagger-children">
        <KPICard label="Contabilizadas" value={formatNumber(actasResumen.categorias.presidencial.contabilizadas.cantidad)} icon={FileCheck} color="success" />
        <KPICard label="Para envío JEE" value={formatNumber(actasResumen.categorias.presidencial.envio_jee.cantidad)} icon={FileWarning} color="warning" />
        <KPICard label="Pendientes" value={formatNumber(actasResumen.categorias.presidencial.pendientes.cantidad)} icon={FileClock} color="error" />
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 items-center">
        <div className="relative flex-1 min-w-[250px]">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-surface-200/40" />
          <input
            type="text"
            placeholder="Buscar por mesa, departamento o distrito..."
            value={search}
            onChange={(e) => { setSearch(e.target.value); setPage(1); }}
            className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-surface-800/80 border border-surface-700/50
              text-sm text-surface-100 placeholder:text-surface-200/30
              focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/20
              transition-all"
          />
        </div>
        <select
          value={filterEstado}
          onChange={(e) => { setFilterEstado(e.target.value); setPage(1); }}
          className="px-4 py-2.5 rounded-lg bg-surface-800/80 border border-surface-700/50
            text-sm text-surface-200/70 focus:outline-none focus:border-primary-500/50 transition-all"
        >
          <option value="todas">Todos los estados</option>
          <option value="contabilizada">Contabilizada</option>
          <option value="envio_jee">Para envío JEE</option>
          <option value="pendiente">Pendiente</option>
        </select>
        <select
          value={filterCategoria}
          onChange={(e) => { setFilterCategoria(e.target.value); setPage(1); }}
          className="px-4 py-2.5 rounded-lg bg-surface-800/80 border border-surface-700/50
            text-sm text-surface-200/70 focus:outline-none focus:border-primary-500/50 transition-all"
        >
          <option value="todas">Todas las categorías</option>
          {ELECTION_CATEGORIES.map((c) => (
            <option key={c.key} value={c.key}>{c.label}</option>
          ))}
        </select>
        <div className="text-xs text-surface-200/40">
          {formatNumber(filteredData.length)} resultados
        </div>
      </div>

      {/* Table */}
      <div className="rounded-xl border border-surface-700/30 bg-surface-800/40 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-surface-700/30">
                {[
                  { key: 'mesa', label: 'Mesa' },
                  { key: 'departamento', label: 'Departamento' },
                  { key: 'distrito', label: 'Distrito' },
                  { key: 'categoria', label: 'Categoría' },
                  { key: 'estado', label: 'Estado' },
                  { key: 'electoresHabiles', label: 'Electores' },
                  { key: 'votosEmitidos', label: 'Votos' },
                  { key: 'fechaProcesamiento', label: 'Procesada' },
                ].map((col) => (
                  <th
                    key={col.key}
                    onClick={() => handleSort(col.key)}
                    className="px-4 py-3 text-xs font-medium text-surface-200/50 uppercase tracking-wider cursor-pointer hover:text-surface-100 transition-colors select-none"
                  >
                    <div className="flex items-center gap-1">
                      {col.label}
                      <SortIcon field={col.key} />
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {pageData.map((acta) => {
                const status = STATUS_STYLES[acta.estado] || STATUS_STYLES.pendiente;
                return (
                  <tr key={acta.id} className="border-b border-surface-700/10 hover:bg-surface-700/20 transition-colors">
                    <td className="px-4 py-3 text-sm font-mono text-surface-100">{acta.mesa}</td>
                    <td className="px-4 py-3 text-sm text-surface-200/70">{acta.departamento}</td>
                    <td className="px-4 py-3 text-sm text-surface-200/70">{acta.distrito}</td>
                    <td className="px-4 py-3 text-xs text-surface-200/50 capitalize">{acta.categoria.replace('_', ' ')}</td>
                    <td className="px-4 py-3">
                      <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-medium ${status.bg} ${status.text} border ${status.border}`}>
                        {status.label}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-surface-200/70 text-right">{acta.electoresHabiles}</td>
                    <td className="px-4 py-3 text-sm text-surface-100 font-medium text-right">{acta.votosEmitidos}</td>
                    <td className="px-4 py-3 text-xs text-surface-200/50">{formatDate(acta.fechaProcesamiento)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between px-5 py-3 border-t border-surface-700/30 bg-surface-800/60">
          <span className="text-xs text-surface-200/40">
            Mostrando {(page - 1) * pageSize + 1}–{Math.min(page * pageSize, filteredData.length)} de {formatNumber(filteredData.length)}
          </span>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setPage(Math.max(1, page - 1))}
              disabled={page === 1}
              className="px-3 py-1.5 rounded-lg text-xs text-surface-200/60 hover:bg-surface-700/50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              Anterior
            </button>
            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              const p = page <= 3 ? i + 1 : page + i - 2;
              if (p < 1 || p > totalPages) return null;
              return (
                <button
                  key={p}
                  onClick={() => setPage(p)}
                  className={`w-8 h-8 rounded-lg text-xs font-medium transition-colors
                    ${p === page
                      ? 'bg-primary-600/30 text-primary-300'
                      : 'text-surface-200/50 hover:bg-surface-700/50'
                    }`}
                >
                  {p}
                </button>
              );
            })}
            <button
              onClick={() => setPage(Math.min(totalPages, page + 1))}
              disabled={page === totalPages}
              className="px-3 py-1.5 rounded-lg text-xs text-surface-200/60 hover:bg-surface-700/50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              Siguiente
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
