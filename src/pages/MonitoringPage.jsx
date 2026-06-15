import { useState } from 'react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import Table from '../components/ui/Table';
import Tabs from '../components/ui/Tabs';
import InputRealisasiModal from '../components/modals/InputRealisasiModal';
import { monitoringBulanan } from '../data/monitoringData';

export default function MonitoringPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('bulanan');

  const getThresholdBadge = (status) => {
    if (status === 'Normal') return <Badge color="green">Normal</Badge>;
    if (status === 'Perhatian') return <Badge color="yellow">Perhatian</Badge>;
    if (status === 'Kritis') return <Badge color="red">🚨 Kritis</Badge>;
    return null;
  };

  const getDeviasiColor = (deviasi) => {
    if (deviasi >= 0) return 'var(--green)';
    if (deviasi >= -20) return 'var(--amber)';
    return 'var(--red)';
  };

  return (
    <div className="page active">
      <div className="section-header">
        <div>
          <div className="section-title">Monitoring Realisasi Pelatihan</div>
          <div className="section-subtitle">KPI berkala bulanan & triwulanan dengan threshold tindakan korektif otomatis</div>
        </div>
        <Button variant="amber" onClick={() => setIsModalOpen(true)}>+ Input Realisasi</Button>
      </div>

      <Tabs 
        activeTab={activeTab} 
        onChange={setActiveTab}
        tabs={[
          { id: 'bulanan', label: 'Bulanan' },
          { id: 'triwulan', label: 'Triwulanan' },
          { id: 'tahunan', label: 'Tahunan' }
        ]} 
      />

      {activeTab === 'bulanan' && (
        <Card className="stretch-card mt-16" title="📅 KPI Bulanan — Semester I 2025" actionNode={
          <div style={{ display: 'flex', gap: 8, fontSize: 12, alignItems: 'center' }}>
            <span style={{ color: 'var(--text-muted)' }}>Threshold koreksi: </span>
            <Badge color="red">≥20% deviasi</Badge>
            <Badge color="yellow">10–19% deviasi</Badge>
            <Badge color="green">&lt;10% deviasi</Badge>
          </div>
        }>
          <Table headers={['Bulan', 'Target (JP)', 'Realisasi (JP)', 'Deviasi (%)', 'Peserta', 'Status Threshold', 'Tindakan']}>
            {monitoringBulanan.map((row, i) => (
              <tr key={i}>
                <td>{row.bulan}</td>
                <td>{row.target}</td>
                <td>{row.realisasi}</td>
                <td style={{ color: getDeviasiColor(row.deviasi), fontWeight: 700 }}>
                  {row.deviasi > 0 ? `+${row.deviasi.toFixed(1)}%` : `${row.deviasi.toFixed(1)}%`}
                </td>
                <td>{row.peserta}</td>
                <td>{getThresholdBadge(row.statusThreshold)}</td>
                <td>
                  {row.statusThreshold === 'Normal' ? '—' : 
                   row.statusThreshold === 'Perhatian' ? <Button variant="outline" size="sm">Laporan</Button> :
                   <Button variant="danger" size="sm">Korektif!</Button>
                  }
                </td>
              </tr>
            ))}
          </Table>
        </Card>
      )}

      {activeTab !== 'bulanan' && (
        <Card className="stretch-card mt-16" title="🚧 Dalam Pengembangan">
          <p>Tab {activeTab} sedang dalam pengembangan.</p>
        </Card>
      )}

      <InputRealisasiModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}