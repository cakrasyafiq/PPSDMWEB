export default function TambahDataModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay open" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal">
        <div className="modal-header">
          <div className="modal-title">Tambah Data Pelatihan</div>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>
        <div className="form-grid">
          <div className="form-group">
            <label>Nama Pelatihan</label>
            <input placeholder="Contoh: K3 Migas Lanjutan" />
          </div>
          <div className="form-group">
            <label>Jenis Sertifikasi</label>
            <select>
              <option>K3 Migas Dasar</option>
              <option>K3 Migas Lanjutan</option>
              <option>Operator Alat Berat</option>
              <option>Teknik Reservoir</option>
              <option>Inspeksi Peralatan</option>
            </select>
          </div>
          <div className="form-group">
            <label>Target Peserta</label>
            <input type="number" placeholder="Jumlah orang" />
          </div>
          <div className="form-group">
            <label>Jam Pelatihan (JP)</label>
            <input type="number" placeholder="Total JP" />
          </div>
          <div className="form-group">
            <label>Tanggal Mulai</label>
            <input type="date" />
          </div>
          <div className="form-group">
            <label>Tanggal Selesai</label>
            <input type="date" />
          </div>
          <div className="form-group full">
            <label>Mitra / Perusahaan</label>
            <select>
              <option>PT Pertamina Hulu Rokan</option>
              <option>SKK Migas</option>
              <option>PT Pertamina EP Cepu</option>
            </select>
          </div>
          <div className="form-group full">
            <label>Catatan</label>
            <textarea placeholder="Catatan tambahan..."></textarea>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '10px', marginTop: '20px', justifyContent: 'flex-end' }}>
          <button className="btn btn-outline" onClick={onClose}>Batal</button>
          <button className="btn btn-amber" onClick={onClose}>Simpan Data</button>
        </div>
      </div>
    </div>
  );
}
