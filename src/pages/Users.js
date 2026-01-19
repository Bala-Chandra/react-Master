import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, setSearch, selectFilteredUsers } from '../features/users/usersSlice';
import UserList from '../components/UserList';
import UserDetails from '../components/UserDetails';

export default function Users() {
  const dispatch = useDispatch();
  const users = useSelector(selectFilteredUsers);
  const { status, error, search } = useSelector(state => state.users);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchUsers());
    }
  }, [status, dispatch]);

  if (status === 'loading') return <p>Loading users...</p>;
  if (status === 'failed') return <p>Error: {error}</p>;

  return (
    <>
      <h2>Users</h2>

      <input
        placeholder="Search users"
        value={search}
        onChange={(e) => dispatch(setSearch(e.target.value))}
      />

      <div style={{ display: 'flex', gap: '20px' }}>
        <UserList users={users} />
        <UserDetails />
      </div>
    </>
  );
}

