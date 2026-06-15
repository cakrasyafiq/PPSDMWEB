import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';

export default function LoginPage({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === '123456') {
      setError('');
      onLogin();
      navigate('/dashboard');
    } else {
      setError('Username atau password salah.');
    }
  };

  return (
    <div style={{ display: 'flex', height: '100vh', width: '100vw', background: 'linear-gradient(135deg, var(--navy-mid) 0%, var(--navy) 100%)', backgroundSize: '200% 200%', animation: 'floatBg 10s ease infinite', alignItems: 'center', justifyContent: 'center' }}>
      <div className="animate-pop-in" style={{ background: 'var(--white)', padding: 40, borderRadius: 16, width: 400, boxShadow: '0 20px 60px rgba(0,0,0,0.3)', textAlign: 'center' }}>
        <div style={{ display: 'inline-block', background: 'var(--amber)', color: 'var(--navy)', fontWeight: 800, fontSize: 13, letterSpacing: 1.5, padding: '4px 12px', borderRadius: 6, marginBottom: 16 }}>SIMLATIH</div>
        <h2 style={{ fontSize: 24, fontWeight: 800, color: 'var(--navy)', marginBottom: 8 }}>Masuk ke Akun Anda</h2>
        <p style={{ fontSize: 13, color: 'var(--text-secondary)', marginBottom: 32 }}>Sistem Informasi Manajemen Pelatihan</p>
        
        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: 16, textAlign: 'left' }}>
          <div className="form-group animate-slide-up" style={{ opacity: 0, animationDelay: '0.1s' }}>
            <label>Username</label>
            <input 
              type="text" 
              placeholder="Masukkan username" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required 
            />
          </div>
          <div className="form-group animate-slide-up" style={{ opacity: 0, animationDelay: '0.2s' }}>
            <label>Password</label>
            <input 
              type="password" 
              placeholder="Masukkan password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>
          
          {error && <div className="animate-slide-up" style={{ color: 'var(--red)', fontSize: 12, fontWeight: 600, marginTop: -4, opacity: 0, animationDelay: '0.3s' }}>{error}</div>}
          
          <Button variant="primary" className="animate-slide-up" style={{ marginTop: 8, padding: 12, justifyContent: 'center', fontSize: 14, opacity: 0, animationDelay: '0.3s' }} type="submit">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}
