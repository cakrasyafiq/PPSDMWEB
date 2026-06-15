import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import DashboardPage from './pages/DashboardPage';
import PesertaPage from './pages/PesertaPage';
import MonitoringPage from './pages/MonitoringPage';
import SertifikasiPage from './pages/SertifikasiPage';
import PksPage from './pages/PksPage';
import AnggaranPage from './pages/AnggaranPage';
import LaporanPage from './pages/LaporanPage';
import LoginPage from './pages/LoginPage';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('simlatih_auth') === 'true';
  });

  const handleLogin = () => {
    localStorage.setItem('simlatih_auth', 'true');
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('simlatih_auth');
    setIsAuthenticated(false);
  };

  if (!isAuthenticated) {
    return (
      <Routes>
        <Route path="*" element={<LoginPage onLogin={handleLogin} />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<AppLayout onLogout={handleLogout} />}>
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="peserta" element={<PesertaPage />} />
        <Route path="monitoring" element={<MonitoringPage />} />
        <Route path="sertifikasi" element={<SertifikasiPage />} />
        <Route path="pks" element={<PksPage />} />
        <Route path="anggaran" element={<AnggaranPage />} />
        <Route path="laporan" element={<LaporanPage />} />
      </Route>
    </Routes>
  );
}
