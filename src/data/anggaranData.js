export const konfirmasiAnggaran = [
  { mitra: 'PT Pertamina Hulu Rokan', alokasi: 'Rp 1.050 Jt', konfirmasi: '12 Jun 2025', leadTime: 'H-48 ✓', leadTimeOk: true, status: 'Tepat Waktu', statusColor: 'green', catatan: 'Sesuai klausul PKS' },
  { mitra: 'SKK Migas', alokasi: 'Rp 525 Jt', konfirmasi: '15 Jun 2025', leadTime: 'H-45 ✓', leadTimeOk: true, status: 'Tepat Waktu', statusColor: 'green', catatan: '—' },
  { mitra: 'PT Pertamina EP Cepu', alokasi: 'Rp 450 Jt', konfirmasi: 'Belum', leadTime: 'Terlambat ⚠️', leadTimeOk: false, status: 'Menunggak', statusColor: 'red', catatan: 'Tidak ada klausul lead time' },
  { mitra: 'PT Medco Energi', alokasi: '—', konfirmasi: 'PKS Kedaluwarsa', leadTime: '—', leadTimeOk: null, status: 'Nonaktif', statusColor: 'gray', catatan: 'Perlu pembaruan PKS' },
];

export const trenAnggaran = [
  { tahun: '2025 (Tw II)', pct: 75, color: 'green' },
  { tahun: '2024', pct: 50, color: 'amber' },
  { tahun: '2023', pct: 25, color: 'red' },
];

export const proyeksiAnggaran = [
  { tw: 'Tw I 2025', kebutuhan: 620, anggaran: 'Terpenuhi', anggaranColor: 'green', gap: '+8 JP', gapColor: 'green' },
  { tw: 'Tw II 2025', kebutuhan: 680, anggaran: 'Parsial', anggaranColor: 'amber', gap: '−132 JP', gapColor: 'red' },
  { tw: 'Tw III 2025*', kebutuhan: 600, anggaran: 'Proses konfirmasi', anggaranColor: 'text-muted', gap: 'Pending', gapColor: 'gray' },
  { tw: 'Tw IV 2025*', kebutuhan: 500, anggaran: 'Belum konfirmasi', anggaranColor: 'text-muted', gap: 'Pending', gapColor: 'gray' },
];
