import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Table from '../components/ui/Table';
import Badge from '../components/ui/Badge';
import PksCard from '../components/features/PksCard';
import { pksList, pksChecklist } from '../data/pksData';

export default function PksPage() {
  return (
    <div className="page active">
      <div className="section-header">
        <div>
          <div className="section-title">Manajemen Perjanjian Kerja Sama (PKS)</div>
          <div className="section-subtitle">Database PKS aktif dan monitoring klausul kritis dengan mitra K3S</div>
        </div>
        <Button variant="amber">+ Tambah Dokumen PKS</Button>
      </div>

      <div className="grid-2 mt-16">
        {pksList.map((pks, i) => <PksCard key={i} item={pks} />)}
      </div>

      <Card title="📑 Checklist Kepatuhan Klausul PKS" actionNode={<Button variant="outline" size="sm">Download Format</Button>} className="stretch-card mt-20">
        <Table headers={['Klausul Wajib (Berdasarkan Audit 2024)', 'PHR', 'PEPC', 'SKK Migas', 'Medco']}>
          {pksChecklist.map((row, i) => (
            <tr key={i}>
              <td>{row.klausul}</td>
              <td style={{ textAlign: 'center' }}>
                <Badge color={row.phr}>{row.phr === 'green' ? '✓' : row.phr === 'yellow' ? '⚠️' : '✗'}</Badge>
              </td>
              <td style={{ textAlign: 'center' }}>
                <Badge color={row.pepc}>{row.pepc === 'green' ? '✓' : row.pepc === 'yellow' ? '⚠️' : '✗'}</Badge>
              </td>
              <td style={{ textAlign: 'center' }}>
                <Badge color={row.skk}>{row.skk === 'green' ? '✓' : row.skk === 'yellow' ? '⚠️' : '✗'}</Badge>
              </td>
              <td style={{ textAlign: 'center' }}>
                <Badge color={row.medco}>{row.medco === 'green' ? '✓' : row.medco === 'yellow' ? '⚠️' : '✗'}</Badge>
              </td>
            </tr>
          ))}
        </Table>
      </Card>
    </div>
  );
}