export const kpiDashboard = {
  realisasi: 78.4,
  realisasiVsTahunLalu: -12.8,
  pesertaTerlatih: 847,
  targetSisa: 233,
  deviasiPeserta: 17.3,
  pksAktif: 3,
  pksTotal: 5
};

export const chartBulanan = [
  { name: 'Jan', rencana: 85, realisasi: 90 },
  { name: 'Feb', rencana: 90, realisasi: 92 },
  { name: 'Mar', rencana: 88, realisasi: 72 },
  { name: 'Apr', rencana: 95, realisasi: 55 },
  { name: 'Mei', rencana: 80, realisasi: 68 },
  { name: 'Jun', rencana: 78, realisasi: 62 },
];

export const rekapTriwulanan = [
  { tahun: '2025*', rencana: 2400, realisasi: 1881, deviasi: -12.8, faktor: 'Efisiensi anggaran PHR', status: 'Di Bawah Target' },
  { tahun: '2024', rencana: 2000, realisasi: 2546, deviasi: 27.3, faktor: 'Regulasi ESDM 2021', status: 'Melebihi Target' },
  { tahun: '2023', rencana: 1500, realisasi: 2515, deviasi: 67.7, faktor: 'Lonjakan regulasi baru', status: 'Signifikan Naik' },
  { tahun: '2022', rencana: 1800, realisasi: 1502, deviasi: -16.6, faktor: 'Transisi pasca pandemi', status: 'Perlu Evaluasi' },
  { tahun: '2021', rencana: 2000, realisasi: 1668, deviasi: -16.6, faktor: 'Pandemi COVID-19', status: 'Di Bawah Target' },
];

export const alertsAktif = [
  { type: 'red', icon: '🔴', title: 'Sertifikasi K3 Migas Kedaluwarsa', desc: '5 peserta PHR — sertifikasi berakhir dalam 30 hari' },
  { type: 'yellow', icon: '🟡', title: 'Informasi Anggaran Tw III Belum Diterima', desc: 'Batas konfirmasi PKS PHR: 14 Juli 2025' },
  { type: 'yellow', icon: '🟡', title: 'Realisasi April 2025 Kritis (55%)', desc: 'Deviasi melebihi threshold 20% — perlu tindakan korektif' },
  { type: 'teal', icon: '🔵', title: 'Siklus Sertifikasi Ulang 2 Tahunan', desc: 'Operator Alat Berat — diperkirakan lonjakan Q4 2025' },
];
