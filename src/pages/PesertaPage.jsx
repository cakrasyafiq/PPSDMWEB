import { useState } from 'react';
import KpiCard from '../components/ui/KpiCard';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Table from '../components/ui/Table';
import TambahPesertaModal from '../components/modals/TambahPesertaModal';
import SyncHistoryItem from '../components/features/SyncHistoryItem';
import { kpiPeserta, pesertaList, riwayatSinkronisasi } from '../data/pesertaData';

export default function PesertaPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getStatusBadgeColor = (status) => {
    if (status === 'Aktif') return 'green';
    if (status === 'Mutasi' || status === 'Pergantian') return 'yellow';
    if (status === 'Force Majeure') return 'red';
    return 'gray';
  };

  return (
    <div className="page active">
      <div className="section-header">
        <div>
          <div className="section-title">Manajemen Peserta Pelatihan</div>
          <div className="section-subtitle">Sinkronisasi data peserta PHR secara berkala — mencegah deviasi akibat pergantian karyawan</div>
        </div>
        <Button variant="amber" onClick={() => setIsModalOpen(true)}>+ Tambah Peserta</Button>
      </div>

      <div className="kpi-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
        <KpiCard colorVariant="green" label="Total Peserta Terdaftar" value={kpiPeserta.terdaftar} metaText="Periode 2025" />
        <KpiCard colorVariant="red" label="Perlu Sinkronisasi" value={kpiPeserta.perluSinkronisasi} metaText="Pergantian karyawan terdeteksi" />
        <KpiCard colorVariant="amber" label="Force Majeure Aktif" value={kpiPeserta.forceMajeure} metaText="Dalam proses penanganan SOP" />
      </div>

      <Card 
        title="👥 Daftar Peserta" 
        className="stretch-card mt-16"
        actionNode={
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <input placeholder="🔍 Cari nama / NIP..." style={{ width: 220, fontSize: 12, padding: '6px 10px', borderRadius: 8, border: '1.5px solid var(--border)' }} />
            <select style={{ fontSize: 12, padding: '6px 10px', borderRadius: 7, border: '1.5px solid var(--border)' }}>
              <option>Semua Status</option>
              <option>Aktif</option>
              <option>Pergantian</option>
              <option>Force Majeure</option>
            </select>
          </div>
        }
      >
        <Table headers={['NIP', 'Nama Peserta', 'Divisi / Unit', 'Pelatihan', 'Jadwal', 'Status', 'Aksi']}>
          {pesertaList.map((row, i) => (
            <tr key={i}>
              <td>{row.nip}</td>
              <td><strong>{row.nama}</strong></td>
              <td>{row.divisi}</td>
              <td>{row.pelatihan}</td>
              <td>{row.jadwal}</td>
              <td><Badge color={getStatusBadgeColor(row.status)}>{row.status}</Badge></td>
              <td>
                <Button variant={row.status === 'Mutasi' || row.status === 'Pergantian' ? 'amber' : 'outline'} size="sm">
                  {row.status === 'Mutasi' || row.status === 'Pergantian' ? 'Sinkron' : row.status === 'Force Majeure' ? 'SOP' : 'Detail'}
                </Button>
              </td>
            </tr>
          ))}
        </Table>
      </Card>

      <Card title="🔄 Riwayat Sinkronisasi Data SDM" actionNode={<Button variant="primary" size="sm">Jalankan Sinkronisasi</Button>} className="mt-20">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {riwayatSinkronisasi.map((item, i) => <SyncHistoryItem key={i} item={item} />)}
        </div>
      </Card>

      <TambahPesertaModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}