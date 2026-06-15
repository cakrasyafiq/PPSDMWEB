import Badge from '../ui/Badge';

export default function PksCard({ item }) {
  return (
    <div className={`pks-card ${item.status}`}>
      <div className="pks-header">
        <div>
          <div className="pks-company">{item.company}</div>
          <div className="pks-number">{item.number}</div>
        </div>
        <Badge color={item.badgeColor}>{item.badge}</Badge>
      </div>
      <div className="pks-meta">
        Periode: <span>{item.periode}</span><br />
        Lead Time Konfirmasi: <span style={{ color: item.leadTimeOk === false ? 'var(--amber-dark)' : item.leadTimeOk === null ? 'var(--red)' : undefined }}>
          {item.leadTime}
        </span><br />
        Nilai PKS: <span>{item.nilai}</span><br />
        Klausul Force Majeure: <span style={{ color: item.forceMajeureOk === false ? 'var(--amber-dark)' : undefined }}>
          {item.forceMajeure}
        </span>
      </div>
    </div>
  );
}
