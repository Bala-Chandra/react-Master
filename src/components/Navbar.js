import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header
      style={{
        padding: '10px',
        background: theme === 'light' ? '#eee' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
      }}
    >
      <h3>React Pro Dashboard</h3>
      <button onClick={toggleTheme}>
        Toggle Theme
      </button>
    </header>
  );
}
