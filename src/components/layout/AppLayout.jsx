import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import TambahDataModal from '../modals/TambahDataModal';

export default function AppLayout({ onLogout }) {
  const [isTambahDataOpen, setIsTambahDataOpen] = useState(false);

  return (
    <>
      <Sidebar onLogout={onLogout} />
      <main className="main">
        <Topbar onAddData={() => setIsTambahDataOpen(true)} />
        <div className="content">
          <Outlet />
        </div>
      </main>
      
      <TambahDataModal 
        isOpen={isTambahDataOpen} 
        onClose={() => setIsTambahDataOpen(false)} 
      />
    </>
  );
}
