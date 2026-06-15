import KpiCard from '../components/ui/KpiCard';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Table from '../components/ui/Table';
import AlertItem from '../components/ui/AlertItem';
import BarChart from '../components/features/BarChart';
import { kpiDashboard, chartBulanan, rekapTriwulanan, alertsAktif } from '../data/kpiData';

export default function DashboardPage() {
  return (
    <div className="page active">
      <div className="section-header">
        <div>
          <div className="section-title">Dashboard KPI Pelatihan 2025</div>
          <div className="section-subtitle">Monitoring pencapaian realisasi vs rencana secara periodik triwulanan</div>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <select style={{ fontSize: 12, padding: '6px 10px', borderRadius: 7, border: '1.5px solid var(--border)' }}>
            <option>Triwulan II — 2025</option>
            <option>Triwulan I — 2025</option>
            <option>Triwulan IV — 2024</option>
          </select>
          <Button variant="outline" size="sm">⬇ Ekspor</Button>
        </div>
      </div>

      <div className="kpi-grid">
        <KpiCard
          colorVariant="amber" icon="🎯" label="Realisasi vs Rencana" value={`${kpiDashboard.realisasi}%`}
          metaChange={`▼ ${Math.abs(kpiDashboard.realisasiVsTahunLalu)}%`} metaChangeType="down" metaText="vs Tw II 2024" progressVal={kpiDashboard.realisasi}
        />
        <KpiCard
          colorVariant="green" icon="👥" label="Peserta Terlatih" value={kpiDashboard.pesertaTerlatih}
          metaText={`Target: 1.080 orang — sisa ${kpiDashboard.targetSisa}`} progressVal={(kpiDashboard.pesertaTerlatih / 1080) * 100}
        />
        <KpiCard
          colorVariant="red" icon="⚠️" label="Deviasi Peserta" value={`${kpiDashboard.deviasiPeserta}%`}
          metaChange="▲ Pergantian karyawan PHR" metaChangeType="up" progressVal={kpiDashboard.deviasiPeserta}
        />
        <KpiCard
          colorVariant="teal" icon="📄" label="PKS Aktif" value={`${kpiDashboard.pksAktif}/${kpiDashboard.pksTotal}`}
          metaText={`${kpiDashboard.pksTotal - kpiDashboard.pksAktif} PKS memerlukan perhatian`} progressVal={(kpiDashboard.pksAktif / kpiDashboard.pksTotal) * 100}
        />
      </div>

      <div className="dashboard-grid">
        <Card 
          title="📊 Realisasi vs Rencana per Bulan (2025)"
          actionNode={
            <div style={{ display: 'flex', gap: 6 }}>
              <div className="legend-item"><div className="legend-dot" style={{ background: 'var(--surface-2)', border: '1.5px solid var(--border)' }}></div>Rencana</div>
              <div className="legend-item"><div className="legend-dot" style={{ background: 'var(--green)' }}></div>Tercapai</div>
              <div className="legend-item"><div className="legend-dot" style={{ background: 'var(--amber)' }}></div>Kurang</div>
              <div className="legend-item"><div className="legend-dot" style={{ background: 'var(--red)' }}></div>Kritis</div>
            </div>
          }
        >
          <BarChart data={chartBulanan} />
        </Card>

        <Card title="🚨 Notifikasi Aktif" badgeText={`${alertsAktif.length} item`} badgeColor="red">
          <div className="alert-list">
            {alertsAktif.map((alert, i) => (
              <AlertItem key={i} type={alert.type} icon={alert.icon} title={alert.title} desc={alert.desc} />
            ))}
          </div>
        </Card>
      </div>

      <Card 
        title="📋 Rekapitulasi Realisasi Triwulanan 2021–2025" 
        actionNode={<Button variant="outline" size="sm">Lihat Semua</Button>}
      >
        <Table headers={['Tahun', 'Rencana (JP)', 'Realisasi (JP)', 'Deviasi', 'Faktor Utama', 'Status']}>
          {rekapTriwulanan.map((row, i) => {
            const devColor = row.deviasi >= 0 ? 'var(--green)' : row.deviasi < -20 ? 'var(--red)' : 'var(--amber)';
            const devText = row.deviasi > 0 ? `+${row.deviasi}%` : `${row.deviasi}%`;
            const badgeColorMap = { 'Di Bawah Target': 'red', 'Melebihi Target': 'green', 'Signifikan Naik': 'teal', 'Perlu Evaluasi': 'yellow' };
            
            return (
              <tr key={i}>
                <td><strong>{row.tahun}</strong></td>
                <td>{row.rencana}</td>
                <td>{row.realisasi}</td>
                <td style={{ color: devColor, fontWeight: 700 }}>{devText}</td>
                <td>{row.faktor}</td>
                <td><Badge color={badgeColorMap[row.status] || 'gray'}>{row.status}</Badge></td>
              </tr>
            );
          })}
        </Table>
      </Card>
    </div>
  );
}