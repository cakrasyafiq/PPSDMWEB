export const kpiPeserta = {
  terdaftar: 1080,
  perluSinkronisasi: 187,
  forceMajeure: 3
};

export const pesertaList = [
  { nip: 'PHR-2019-0341', nama: 'Ahmad Fauzi', divisi: 'Drilling — Field Ops', pelatihan: 'K3 Migas Lanjutan', jadwal: '15 Jul 2025', status: 'Aktif' },
  { nip: 'PHR-2021-0789', nama: 'Siti Rahayu', divisi: 'HSE — Safety Dept.', pelatihan: 'Operator Alat Berat', jadwal: '22 Jul 2025', status: 'Aktif' },
  { nip: 'PHR-2020-0512', nama: 'Budi Santoso', divisi: 'Production — Upstream', pelatihan: 'Teknik Reservoir', jadwal: '10 Agu 2025', status: 'Mutasi' },
  { nip: 'PHR-2018-0234', nama: 'Dewi Kartika', divisi: 'Logistik — Supply Chain', pelatihan: 'K3 Migas Dasar', jadwal: '—', status: 'Force Majeure' },
  { nip: 'PHR-2022-1105', nama: 'Rizki Maulana', divisi: 'Engineering — Mechanical', pelatihan: 'Inspeksi Peralatan', jadwal: '5 Sep 2025', status: 'Pergantian' },
];

export const riwayatSinkronisasi = [
  { status: 'berhasil', pesan: 'Sinkronisasi otomatis berhasil', waktu: 'Senin, 9 Jun 2025 — 08:00 WIB', detail: '847 data diperbarui' },
  { status: 'warning', pesan: 'Sinkronisasi manual — 3 konflik data', waktu: 'Senin, 2 Jun 2025 — 10:15 WIB', detail: 'Perlu review' },
  { status: 'berhasil', pesan: 'Sinkronisasi otomatis berhasil', waktu: 'Senin, 26 Mei 2025 — 08:00 WIB', detail: '1.080 data diperbarui' },
];
