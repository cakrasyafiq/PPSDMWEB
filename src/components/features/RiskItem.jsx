export default function RiskItem({ risk }) {
  const bgColors = { red: '#FFF8F9', amber: '#FFFBF0', yellow: '#FFFBEA' };
  
  return (
    <div style={{ padding: '10px 12px', borderRadius: 8, borderLeft: `3px solid var(--${risk.color})`, background: bgColors[risk.color] || '#FFF' }}>
      <div style={{ fontWeight: 700, fontSize: 12, color: 'var(--navy)' }}>
        {risk.id} · {risk.title}
      </div>
      <div style={{ fontSize: 11, color: 'var(--text-secondary)', marginTop: 3 }}>
        Dampak: {risk.dampak} · Kemungkinan: {risk.kemungkinan}
      </div>
      <div style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 2 }}>
        Mitigasi: {risk.mitigasi}
      </div>
    </div>
  );
}
