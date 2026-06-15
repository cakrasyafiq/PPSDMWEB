import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Table from '../components/ui/Table';
import Badge from '../components/ui/Badge';
import ProgressBar from '../components/ui/ProgressBar';
import { konfirmasiAnggaran, trenAnggaran, proyeksiAnggaran } from '../data/anggaranData';

export default function AnggaranPage() {
  return (
    <div className="page active">
      <div className="section-header">
        <div>
          <div className="section-title">Manajemen Anggaran Mitra</div>
          <div className="section-subtitle">Pemantauan ketepatan waktu konfirmasi anggaran untuk mencegah perencanaan tergesa-gesa</div>
        </div>
        <Button variant="amber">+ Input Anggaran</Button>
      </div>

      <Card title="💰 Status Konfirmasi Anggaran Triwulan III 2025" badgeText="Batas: 30 Jun 2025" badgeColor="yellow">
        <Table headers={['Mitra', 'Alokasi Tw III', 'Konfirmasi Diterima', 'Lead Time', 'Status', 'Catatan']}>
          {konfirmasiAnggaran.map((row, i) => (
            <tr key={i}>
              <td><strong>{row.mitra}</strong></td>
              <td>{row.alokasi}</td>
              <td>{row.konfirmasi}</td>
              <td style={{ color: row.leadTimeOk === true ? 'var(--green)' : row.leadTimeOk === false ? 'var(--red)' : 'var(--text-primary)', fontWeight: 700 }}>
                {row.leadTime}
              </td>
              <td><Badge color={row.statusColor}>{row.status}</Badge></td>
              <td>{row.catatan}</td>
            </tr>
          ))}
        </Table>
      </Card>

      <div className="grid-2 mt-20" style={{ flex: 1, minHeight: 0 }}>
        <Card title="📈 Tren Ketepatan Konfirmasi Anggaran" className="stretch-card">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {trenAnggaran.map((tren, i) => (
              <div key={i}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, marginBottom: 4 }}>
                  <span>{tren.tahun}</span>
                  <span style={{ fontWeight: 700, color: `var(--${tren.color})` }}>{tren.pct}% Tepat Waktu</span>
                </div>
                <ProgressBar val={tren.pct} color={tren.color} />
              </div>
            ))}
          </div>
          <div style={{ marginTop: 14, fontSize: 12, color: 'var(--text-secondary)', background: 'var(--surface)', padding: 10, borderRadius: 8 }}>
            💡 <strong>Peningkatan signifikan</strong> sejak klausul lead time ditambahkan ke PKS PHR pada perpanjangan 2024.
          </div>
        </Card>
        
        <Card title="🔮 Proyeksi Kebutuhan vs Anggaran Tersedia" className="stretch-card" bodyClass="p-0">
          <table style={{ fontSize: 12, width: '100%', borderCollapse: 'collapse', marginTop: -10 }}>
            <thead>
              <tr style={{ color: 'var(--text-secondary)', textAlign: 'left' }}>
                <th style={{ padding: '10px 0', borderBottom: '1px solid var(--border)' }}>Tw</th>
                <th style={{ padding: '10px 0', borderBottom: '1px solid var(--border)' }}>Kebutuhan JP</th>
                <th style={{ padding: '10px 0', borderBottom: '1px solid var(--border)' }}>Anggaran</th>
                <th style={{ padding: '10px 0', borderBottom: '1px solid var(--border)' }}>Gap</th>
              </tr>
            </thead>
            <tbody>
              {proyeksiAnggaran.map((row, i) => (
                <tr key={i} style={{ borderBottom: i === proyeksiAnggaran.length - 1 ? 'none' : '1px solid var(--border)' }}>
                  <td style={{ padding: '12px 0' }}>{row.tw}</td>
                  <td style={{ padding: '12px 0' }}>{row.kebutuhan}</td>
                  <td style={{ padding: '12px 0', color: row.anggaranColor.startsWith('text-') ? `var(--${row.anggaranColor})` : `var(--${row.anggaranColor})` }}>{row.anggaran}</td>
                  <td style={{ padding: '12px 0', color: `var(--${row.gapColor})`, fontWeight: 700 }}>{row.gap}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
    </div>
  );
}