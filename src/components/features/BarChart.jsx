import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, Cell } from 'recharts';

export default function BarChart({ data }) {
  const getRealisasiColor = (item) => {
    const diff = item.realisasi - item.rencana;
    if (diff >= 0) return 'var(--green)';
    if (diff >= -15) return 'var(--amber)';
    return 'var(--red)';
  };

  return (
    <div style={{ width: '100%', height: 200 }}>
      <ResponsiveContainer>
        <RechartsBarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          <XAxis dataKey="name" tick={{ fontSize: 10, fill: 'var(--text-muted)' }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 10, fill: 'var(--text-muted)' }} axisLine={false} tickLine={false} />
          <Tooltip 
            contentStyle={{ borderRadius: 8, border: '1px solid var(--border)', fontSize: 12 }} 
            itemStyle={{ fontWeight: 600 }}
          />
          <Legend wrapperStyle={{ fontSize: 11 }} />
          <Bar dataKey="rencana" name="Rencana" fill="var(--surface-2)" radius={[4, 4, 0, 0]} />
          <Bar dataKey="realisasi" name="Tercapai" radius={[4, 4, 0, 0]}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={getRealisasiColor(entry)} />
            ))}
          </Bar>
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  );
}
