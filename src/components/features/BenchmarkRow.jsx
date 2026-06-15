export default function BenchmarkRow({ item }) {
  return (
    <div className="bench-row" style={item.isMe ? { background: 'rgba(245,166,35,0.07)', borderRadius: 8, padding: '12px 8px', borderBottom: 'none' } : {}}>
      <div className={`bench-rank ${item.rankClass}`} style={item.isMe ? { background: 'var(--amber)', color: 'white' } : {}}>
        {item.rank}
      </div>
      <div>
        <div className="bench-name" style={item.isMe ? { color: 'var(--amber-dark)' } : {}}>
          {item.name}
        </div>
        <div className="bench-meta">{item.meta}</div>
      </div>
      <div>
        <div className="bench-pct" style={{ color: `var(--${item.color})` }}>
          {item.pct}%
        </div>
        <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>JP Terlatih</div>
      </div>
    </div>
  );
}
