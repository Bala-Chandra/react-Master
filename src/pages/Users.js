import UserList from '../components/UserList';
import UserDetails from '../components/UserDetails';
import { useUsers } from '../hooks/useUsers';

export default function Users() {
  const { users, status, error, search, setSearch } = useUsers();

  if (status === 'loading') return <p>Loading users...</p>;
  if (status === 'failed') return <p>Error: {error}</p>;

  return (
    <>
      <h2>Users</h2>

      <input
        placeholder="Search users"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div style={{ display: 'flex', gap: '20px' }}>
        <UserList users={users} />
        <UserDetails />
      </div>
    </>
  );
}
