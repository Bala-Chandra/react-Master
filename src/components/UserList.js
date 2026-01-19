import { memo } from 'react';
import { useDispatch } from 'react-redux';
import { selectUser } from '../features/users/usersSlice';

function UserList({ users }) {
  const dispatch = useDispatch();

  console.log('UserList rendered');

  return (
    <ul>
      {users.map(user => (
        <li
          key={user.id}
          onClick={() => dispatch(selectUser(user))}
          style={{ cursor: 'pointer' }}
        >
          {user.name}
        </li>
      ))}
    </ul>
  );
}

export default memo(UserList);
