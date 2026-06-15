import { NavLink } from 'react-router-dom';

export default function Sidebar({ onLogout }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <div className="logo-badge">SIMLATIH</div>
        <div className="logo-title">Sistem Informasi<br/>Manajemen Pelatihan</div>
        <div className="logo-sub">PPSDM Migas — PT Pertamina Hulu Rokan</div>
      </div>

      <nav className="sidebar-nav">
        <div className="nav-section-label">Utama</div>
        <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
          <span className="nav-icon">📊</span> Dashboard KPI
        </NavLink>
        <NavLink to="/peserta" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
          <span className="nav-icon">👥</span> Manajemen Peserta
          <span className="nav-badge">3</span>
        </NavLink>
        <NavLink to="/monitoring" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
          <span className="nav-icon">📈</span> Monitoring Realisasi
        </NavLink>

        <div className="nav-section-label">Sertifikasi & PKS</div>
        <NavLink to="/sertifikasi" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
          <span className="nav-icon">🏅</span> Siklus Sertifikasi
          <span className="nav-badge">5</span>
        </NavLink>
        <NavLink to="/pks" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
          <span className="nav-icon">📄</span> Manajemen PKS
        </NavLink>
        <NavLink to="/anggaran" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
          <span className="nav-icon">💰</span> Anggaran Mitra
        </NavLink>

        <div className="nav-section-label">Analitik</div>

        <NavLink to="/laporan" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
          <span className="nav-icon">📋</span> Laporan & Risiko
        </NavLink>
      </nav>

      <div className="sidebar-footer">
        <div className="user-avatar">AD</div>
        <div className="user-info">
          <div className="user-name">Admin PPSDM</div>
          <div className="user-role">Koordinator Pelatihan</div>
        </div>
        {onLogout && (
          <button onClick={onLogout} style={{ background: 'rgba(255,54,92,0.1)', border: '1px solid rgba(255,54,92,0.2)', color: 'var(--red)', cursor: 'pointer', fontSize: 11, fontWeight: 700, padding: '4px 8px', borderRadius: 6, display: 'flex', alignItems: 'center', gap: 4 }} title="Logout">
            <span>Logout</span>
          </button>
        )}
      </div>
    </aside>
  );
}
