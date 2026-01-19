import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <aside style={{ width: '200px', padding: '10px', background: '#ddd' }}>
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/users">Users</Link></li>
        <li><Link to="/settings">Settings</Link></li>
      </ul>
    </aside>
  );
}
