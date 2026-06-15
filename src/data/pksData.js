export const pksList = [
  { status: 'active-pks', badge: 'Aktif', badgeColor: 'green', company: 'PT Pertamina Hulu Rokan', number: 'PKS/PPSDM/2024/PHR-001', periode: '1 Jan 2025 – 31 Des 2025', leadTime: 'H-60 sebelum pelaksanaan ✓', leadTimeOk: true, nilai: 'Rp 4,2 Miliar', forceMajeure: 'Tersedia (Pasal 12) ✓', forceMajeureOk: true },
  { status: 'warning-pks', badge: 'Perlu Review', badgeColor: 'yellow', company: 'PT Pertamina EP Cepu', number: 'PKS/PPSDM/2024/PEPC-002', periode: '1 Mar 2025 – 28 Feb 2026', leadTime: 'Belum ada klausul ⚠️', leadTimeOk: false, nilai: 'Rp 1,8 Miliar', forceMajeure: 'Tidak ada ⚠️', forceMajeureOk: false },
  { status: 'active-pks', badge: 'Aktif', badgeColor: 'green', company: 'SKK Migas', number: 'PKS/PPSDM/2025/SKKM-003', periode: '15 Jan 2025 – 14 Jan 2026', leadTime: 'H-45 sebelum pelaksanaan ✓', leadTimeOk: true, nilai: 'Rp 2,1 Miliar', forceMajeure: 'Tersedia (Pasal 9) ✓', forceMajeureOk: true },
  { status: 'expired-pks', badge: 'Kedaluwarsa', badgeColor: 'red', company: 'PT Medco Energi', number: 'PKS/PPSDM/2024/MED-004', periode: '1 Jan 2024 – 31 Des 2024', leadTime: 'Belum diperbarui ✗', leadTimeOk: false, nilai: 'Rp 0,9 Miliar', forceMajeure: 'Perlu pembaruan segera', forceMajeureOk: false },
];

export const pksChecklist = [
  { klausul: 'Dokumen PKS ditandatangani', phr: 'green', pepc: 'green', skk: 'green', medco: 'red' },
  { klausul: 'Klausul batas waktu konfirmasi anggaran', phr: 'green', pepc: 'red', skk: 'green', medco: 'red' },
  { klausul: 'Klausul sinkronisasi data peserta', phr: 'green', pepc: 'yellow', skk: 'green', medco: 'red' },
  { klausul: 'Klausul force majeure', phr: 'green', pepc: 'red', skk: 'green', medco: 'red' },
  { klausul: 'Tim operasional dilibatkan dalam negosiasi', phr: 'green', pepc: 'yellow', skk: 'green', medco: 'red' },
];
