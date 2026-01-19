import { useDispatch } from 'react-redux';
import { selectUser } from '../features/users/usersSlice';

export default function UserList({ users }) {
  const dispatch = useDispatch();

  return (
    <ul>
      {users.map(user => (
        <li
          key={user.id}
          style={{ cursor: 'pointer' }}
          onClick={() => dispatch(selectUser(user))}
        >
          {user.name}
        </li>
      ))}
    </ul>
  );
}
