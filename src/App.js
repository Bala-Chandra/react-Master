import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/DashBoard';
import Users from './pages/Users';
import Settings from './pages/Settings';
import MainLayout from './layouts/MainLayout';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route element={<MainLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}

export default App;
