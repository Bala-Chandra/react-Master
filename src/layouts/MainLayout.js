import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export default function MainLayout() {
  const { theme } = useTheme();

  return (
    <div
      style={{
        minHeight: '100vh',
        background: theme === 'light' ? '#fafafa' : '#222',
        color: theme === 'light' ? '#000' : '#fff',
      }}
    >
      <Navbar />
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <main style={{ padding: '10px' }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
