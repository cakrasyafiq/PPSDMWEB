export default function InputRealisasiModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay open" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal">
        <div className="modal-header">
          <div className="modal-title">Input Realisasi Bulanan</div>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>
        <div className="form-grid">
          <div className="form-group">
            <label>Bulan</label>
            <select>
              <option>Juni 2025</option>
              <option>Juli 2025</option>
            </select>
          </div>
          <div className="form-group">
            <label>Rencana (JP)</label>
            <input type="number" placeholder="Target JP bulan ini" />
          </div>
          <div className="form-group">
            <label>Realisasi (JP)</label>
            <input type="number" placeholder="JP yang terealisasi" />
          </div>
          <div className="form-group">
            <label>Jumlah Peserta</label>
            <input type="number" placeholder="Peserta terlatih" />
          </div>
          <div className="form-group full">
            <label>Faktor Penyebab Deviasi</label>
            <textarea placeholder="Jelaskan faktor penyebab jika ada deviasi..."></textarea>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '10px', marginTop: '20px', justifyContent: 'flex-end' }}>
          <button className="btn btn-outline" onClick={onClose}>Batal</button>
          <button className="btn btn-amber" onClick={onClose}>Simpan Realisasi</button>
        </div>
      </div>
    </div>
  );
}
