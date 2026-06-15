export default function TambahPesertaModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay open" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal">
        <div className="modal-header">
          <div className="modal-title">Tambah Peserta Pelatihan</div>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>
        <div className="form-grid">
          <div className="form-group">
            <label>NIP / ID Karyawan</label>
            <input placeholder="Contoh: PHR-2024-0001" />
          </div>
          <div className="form-group">
            <label>Nama Lengkap</label>
            <input placeholder="Nama peserta" />
          </div>
          <div className="form-group">
            <label>Divisi / Unit</label>
            <input placeholder="Contoh: Drilling — Field Ops" />
          </div>
          <div className="form-group">
            <label>Pelatihan yang Diikuti</label>
            <select>
              <option>K3 Migas Dasar</option>
              <option>K3 Migas Lanjutan</option>
              <option>Operator Alat Berat</option>
            </select>
          </div>
          <div className="form-group">
            <label>Tanggal Pelatihan</label>
            <input type="date" />
          </div>
          <div className="form-group">
            <label>Status Karyawan</label>
            <select>
              <option>Aktif</option>
              <option>Mutasi</option>
              <option>Pergantian</option>
              <option>Force Majeure</option>
            </select>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '10px', marginTop: '20px', justifyContent: 'flex-end' }}>
          <button className="btn btn-outline" onClick={onClose}>Batal</button>
          <button className="btn btn-amber" onClick={onClose}>Daftarkan Peserta</button>
        </div>
      </div>
    </div>
  );
}
