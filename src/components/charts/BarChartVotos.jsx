import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, Cell, LabelList,
} from 'recharts';
import { formatNumber, formatPercent } from '@/utils/formatters';

/**
 * Custom tooltip for the bar chart
 */
function CustomTooltip({ active, payload }) {
  if (!active || !payload?.[0]) return null;
  const d = payload[0].payload;
  return (
    <div className="glass rounded-lg px-4 py-3 shadow-xl border border-surface-700/50">
      <p className="text-sm font-semibold text-surface-100 mb-1">{d.nombre || d.partido}</p>
      <p className="text-xs text-surface-200/60">{d.partido || ''}</p>
      <div className="flex items-baseline gap-2 mt-2">
        <span className="text-lg font-bold text-primary-300">{formatNumber(d.votos)}</span>
        <span className="text-xs text-surface-200/50">votos ({formatPercent(d.porcentaje)})</span>
      </div>
    </div>
  );
}

/**
 * Horizontal bar chart for candidate/party vote counts
 */
export default function BarChartVotos({ data, dataKey = 'votos', nameKey = 'nombre', showLabels = true, height = 400, maxItems = 10 }) {
  const chartData = data?.slice(0, maxItems) || [];

  return (
    <div className="w-full" style={{ height }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={chartData}
          layout="vertical"
          margin={{ top: 5, right: 60, left: 10, bottom: 5 }}
          barCategoryGap="20%"
        >
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" horizontal={false} />
          <XAxis
            type="number"
            tickFormatter={(v) => formatNumber(v)}
            tick={{ fill: 'rgba(255,255,255,0.4)', fontSize: 11 }}
            axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
          />
          <YAxis
            dataKey={nameKey}
            type="category"
            width={140}
            tick={{ fill: 'rgba(255,255,255,0.6)', fontSize: 11 }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.03)' }} />
          <Bar dataKey={dataKey} radius={[0, 6, 6, 0]} maxBarSize={32}>
            {chartData.map((entry, index) => (
              <Cell key={index} fill={entry.color || `hsl(${210 + index * 25}, 70%, 55%)`} />
            ))}
            {showLabels && (
              <LabelList
                dataKey="porcentaje"
                position="right"
                formatter={(v) => `${v}%`}
                style={{ fill: 'rgba(255,255,255,0.6)', fontSize: 11, fontWeight: 600 }}
              />
            )}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
