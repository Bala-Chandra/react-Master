import { useEffect, useState } from 'react';
import UserList from '../components/UserList';
import UserDetails from '../components/UserDetails';

export default function Users() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <h2>Users</h2>

      <input
        placeholder="Search users"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div style={{ display: 'flex', gap: '20px' }}>
        <UserList
          users={filteredUsers}
          onSelect={setSelectedUser}
        />
        <UserDetails user={selectedUser} />
      </div>
    </>
  );
}
