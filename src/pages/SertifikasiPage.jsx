import KpiCard from '../components/ui/KpiCard';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import CertTimeline from '../components/features/CertTimeline';
import { kpiSertifikasi, certTimeline, siklusSertifikasi } from '../data/sertifikasiData';

export default function SertifikasiPage() {
  return (
    <div className="page active">
      <div className="section-header">
        <div>
          <div className="section-title">Siklus Manajemen Sertifikasi</div>
          <div className="section-subtitle">Pemantauan masa berlaku, siklus ulang 2 tahunan, dan notifikasi otomatis kedaluwarsa</div>
        </div>
        <Button variant="amber">+ Tambah Sertifikasi</Button>
      </div>

      <div className="kpi-grid">
        <KpiCard colorVariant="red" label="Kedaluwarsa < 30 Hari" value={kpiSertifikasi.kurang30Hari} metaText="Perlu perpanjangan segera" />
        <KpiCard colorVariant="yellow" label="Kedaluwarsa 30–90 Hari" value={kpiSertifikasi.hari30ke90} metaText="Mulai rencanakan jadwal" />
        <KpiCard colorVariant="green" label="Aktif & Valid" value={kpiSertifikasi.aktifValid} metaText="Sertifikasi dalam masa berlaku" />
        <KpiCard colorVariant="teal" label="Prediksi Lonjakan Q4" value={`+${kpiSertifikasi.lonjakanQ4}`} metaText="Siklus ulang Okt–Des 2025" />
      </div>

      <div className="grid-2 mt-16">
        <Card title="⏳ Segera Diperpanjang" badgeText={`${certTimeline.length} sertifikasi`} badgeColor="red">
          <CertTimeline items={certTimeline} />
        </Card>

        <Card title="📅 Prediksi Siklus Sertifikasi Ulang" badgeText="2025–2026" badgeColor="teal">
          <table style={{ fontSize: 12, width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: 'var(--surface)', color: 'var(--text-secondary)', textAlign: 'left' }}>
                <th style={{ padding: '10px 14px', borderBottom: '1px solid var(--border)' }}>Jenis Sertifikasi</th>
                <th style={{ padding: '10px 14px', borderBottom: '1px solid var(--border)' }}>Peserta</th>
                <th style={{ padding: '10px 14px', borderBottom: '1px solid var(--border)' }}>Periode Siklus</th>
                <th style={{ padding: '10px 14px', borderBottom: '1px solid var(--border)' }}>Prediksi Lonjakan</th>
              </tr>
            </thead>
            <tbody>
              {siklusSertifikasi.map((row, i) => (
                <tr key={i} style={{ borderBottom: '1px solid var(--border)' }}>
                  <td style={{ padding: '12px 14px' }}>{row.jenis}</td>
                  <td style={{ padding: '12px 14px' }}>{row.peserta}</td>
                  <td style={{ padding: '12px 14px' }}>{row.periode}</td>
                  <td style={{ padding: '12px 14px' }}>
                    <Badge color={row.warna}>{row.prediksi} ▲{row.peserta}</Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
    </div>
  );
}