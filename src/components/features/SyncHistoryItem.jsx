export default function SyncHistoryItem({ item }) {
  const icon = item.status === 'berhasil' ? '🟢' : '🟡';
  const valColor = item.status === 'berhasil' ? 'var(--green)' : 'var(--amber)';
  
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px', background: 'var(--surface)', borderRadius: 8, fontSize: 12 }}>
      <span>{icon} {item.pesan}</span>
      <span style={{ color: 'var(--text-muted)' }}>{item.waktu}</span>
      <span style={{ color: valColor, fontWeight: 700 }}>{item.detail}</span>
    </div>
  );
}
