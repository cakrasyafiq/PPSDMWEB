import { useLocation } from 'react-router-dom';

const pageTitles = {
  '/dashboard': 'Dashboard KPI Pelatihan',
  '/peserta': 'Manajemen Peserta Pelatihan',
  '/monitoring': 'Monitoring Realisasi',
  '/sertifikasi': 'Siklus Manajemen Sertifikasi',
  '/pks': 'Manajemen PKS',
  '/anggaran': 'Anggaran Mitra',
  '/benchmarking': 'Benchmarking Lembaga Sejenis',
  '/laporan': 'Laporan & Manajemen Risiko',
};

export default function Topbar({ onAddData }) {
  const location = useLocation();
  const title = pageTitles[location.pathname] || 'SIMLATIH';

  const toggleNotif = () => {
    alert('🔔 Notifikasi:\n\n🔴 5 sertifikasi K3 Migas kedaluwarsa dalam 30 hari\n🟡 Konfirmasi anggaran PEPC Tw III belum diterima\n🔴 Realisasi April 2025 kritis (55%)\n🔵 Prediksi lonjakan sertifikasi ulang Q4 2025');
  };

  return (
    <div className="topbar">
      <div className="topbar-title">{title}</div>
      <div className="topbar-actions">
        <div className="notif-btn" onClick={toggleNotif}>
          🔔<div className="notif-dot"></div>
        </div>
        {onAddData && (
          <button className="btn btn-amber btn-sm" onClick={onAddData}>
            + Tambah Data
          </button>
        )}
      </div>
    </div>
  );
}
