import { CheckCircle2, Clock, Database, FileCode, BarChart3, ArrowRight } from 'lucide-react';
import { pipelineStatus } from '@/data/mockData';
import { formatDate, formatDuration, formatNumber } from '@/utils/formatters';

const STATUS_ICONS = {
  completado: CheckCircle2,
  en_progreso: Clock,
};

const STATUS_COLORS = {
  completado: { bg: 'bg-emerald-500/10', text: 'text-emerald-400', border: 'border-emerald-500/30', dot: 'bg-emerald-400' },
  en_progreso: { bg: 'bg-amber-500/10', text: 'text-amber-400', border: 'border-amber-500/30', dot: 'bg-amber-400 animate-pulse' },
};

const STEP_ICONS = [Database, FileCode, Database, BarChart3, BarChart3];

export default function PipelinePage() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold text-surface-100">Pipeline Hadoop MapReduce</h1>
        <p className="text-sm text-surface-200/50 mt-1">
          Flujo de procesamiento: API ONPE → CSV → HDFS → MapReduce → Resultados agregados
        </p>
      </div>

      {/* Pipeline Diagram */}
      <div className="rounded-xl border border-surface-700/30 bg-surface-800/40 p-6">
        <h3 className="text-sm font-semibold text-surface-100 mb-6">Flujo del Pipeline</h3>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {['API ONPE', 'JSON/CSV', 'HDFS', 'MapReduce', 'Resultados'].map((step, i) => (
            <div key={step} className="flex items-center gap-3">
              <div className={`
                px-4 py-3 rounded-xl border text-center min-w-[110px]
                ${i === 3 ? 'bg-primary-600/20 border-primary-500/30' : 'bg-surface-700/30 border-surface-700/50'}
              `}>
                <div className={`text-xs font-bold ${i === 3 ? 'text-primary-300' : 'text-surface-100'}`}>
                  {step}
                </div>
              </div>
              {i < 4 && <ArrowRight size={16} className="text-surface-200/30 shrink-0" />}
            </div>
          ))}
        </div>
      </div>

      {/* Pipeline Steps Timeline */}
      <div className="rounded-xl border border-surface-700/30 bg-surface-800/40 p-6">
        <h3 className="text-sm font-semibold text-surface-100 mb-6">Etapas de ejecución</h3>
        <div className="space-y-1">
          {pipelineStatus.etapas.map((etapa, index) => {
            const style = STATUS_COLORS[etapa.estado] || STATUS_COLORS.completado;
            const StepIcon = STEP_ICONS[index] || Database;
            const StatusIcon = STATUS_ICONS[etapa.estado] || CheckCircle2;

            return (
              <div key={etapa.id} className="relative">
                {/* Timeline line */}
                {index < pipelineStatus.etapas.length - 1 && (
                  <div className="absolute left-[23px] top-[48px] w-0.5 h-[calc(100%-16px)] bg-surface-700/50"></div>
                )}
                
                <div className="flex gap-4 p-4 rounded-xl hover:bg-surface-700/20 transition-colors">
                  {/* Timeline dot */}
                  <div className={`shrink-0 w-12 h-12 rounded-xl ${style.bg} border ${style.border} flex items-center justify-center`}>
                    <StepIcon size={20} className={style.text} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h4 className="text-sm font-semibold text-surface-100 flex items-center gap-2">
                          {etapa.nombre}
                          <StatusIcon size={14} className={style.text} />
                        </h4>
                        <p className="text-xs text-surface-200/50 mt-1">{etapa.descripcion}</p>
                      </div>
                      <span className={`shrink-0 inline-flex px-2.5 py-1 rounded-full text-xs font-medium ${style.bg} ${style.text} border ${style.border}`}>
                        {etapa.estado === 'completado' ? 'Completado' : 'En progreso'}
                      </span>
                    </div>

                    {/* Stats */}
                    <div className="flex flex-wrap gap-4 mt-3">
                      <div className="text-xs text-surface-200/40">
                        Inicio: <span className="text-surface-200/70">{formatDate(etapa.inicio)}</span>
                      </div>
                      {etapa.fin && (
                        <div className="text-xs text-surface-200/40">
                          Fin: <span className="text-surface-200/70">{formatDate(etapa.fin)}</span>
                        </div>
                      )}
                      <div className="text-xs text-surface-200/40">
                        Duración: <span className="text-primary-300 font-medium">{formatDuration(etapa.inicio, etapa.fin)}</span>
                      </div>
                      <div className="text-xs text-surface-200/40">
                        Registros: <span className="text-surface-200/70">{formatNumber(etapa.registros)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Last update */}
      <div className="text-center text-xs text-surface-200/30">
        Última actualización: {formatDate(pipelineStatus.ultimaActualizacion)}
      </div>
    </div>
  );
}
