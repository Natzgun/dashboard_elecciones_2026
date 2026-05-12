import {
  PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend,
} from 'recharts';
import { formatNumber, formatPercent } from '@/utils/formatters';

function CustomTooltip({ active, payload }) {
  if (!active || !payload?.[0]) return null;
  const d = payload[0].payload;
  return (
    <div className="glass rounded-lg px-4 py-3 shadow-xl border border-surface-700/50">
      <p className="text-sm font-semibold text-surface-100">{d.partido || d.nombre}</p>
      <div className="flex items-baseline gap-2 mt-1">
        <span className="text-lg font-bold text-primary-300">{formatNumber(d.votos)}</span>
        <span className="text-xs text-surface-200/50">({formatPercent(d.porcentaje)})</span>
      </div>
    </div>
  );
}

function CustomLegend({ payload }) {
  return (
    <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 mt-2">
      {payload?.map((entry, index) => (
        <div key={index} className="flex items-center gap-1.5 text-xs text-surface-200/60">
          <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: entry.color }}></span>
          <span className="truncate max-w-[120px]">{entry.value}</span>
        </div>
      ))}
    </div>
  );
}

/**
 * Pie/Donut chart for vote distribution by party
 */
export default function PieChartPartidos({ data, nameKey = 'partido', height = 300, donut = true }) {
  const chartData = data?.slice(0, 8) || [];

  return (
    <div className="w-full" style={{ height }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="45%"
            innerRadius={donut ? '55%' : 0}
            outerRadius="80%"
            paddingAngle={2}
            dataKey="votos"
            nameKey={nameKey}
            stroke="none"
          >
            {chartData.map((entry, index) => (
              <Cell key={index} fill={entry.color || `hsl(${210 + index * 35}, 65%, 55%)`} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend content={<CustomLegend />} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
