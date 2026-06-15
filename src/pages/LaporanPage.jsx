import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import RiskItem from '../components/features/RiskItem';
import { laporanList, risikoAktif } from '../data/laporanData';

export default function LaporanPage() {
  return (
    <div className="page active">
      <div className="section-header">
        <div>
          <div className="section-title">Laporan & Manajemen Risiko</div>
          <div className="section-subtitle">Rekap SOP force majeure, laporan triwulanan, dan identifikasi risiko berbasis root cause</div>
        </div>
        <Button variant="amber">+ Buat Laporan</Button>
      </div>

      <div className="grid-2" style={{ flex: 1, minHeight: 0 }}>
        <Card className="stretch-card" title="📄 Laporan Tersedia">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {laporanList.map((lap, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 8 }}>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 13 }}>{lap.title}</div>
                  <div style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 2 }}>{lap.desc}</div>
                </div>
                <div style={{ display: 'flex', gap: 6 }}>
                  <Badge color={lap.statusColor}>{lap.status}</Badge>
                  <Button variant="outline" size="sm">{lap.action}</Button>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="stretch-card" title="⚠️ Register Risiko Aktif" badgeText="4 risiko tinggi" badgeColor="red">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {risikoAktif.map((risk, i) => <RiskItem key={i} risk={risk} />)}
          </div>
        </Card>
      </div>
    </div>
  );
}