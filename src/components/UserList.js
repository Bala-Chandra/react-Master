export default function UserList({ users, onSelect }) {
  return (
    <ul>
      {users.map(user => (
        <li
          key={user.id}
          style={{ cursor: 'pointer' }}
          onClick={() => onSelect(user)}
        >
          {user.name}
        </li>
      ))}
    </ul>
  );
}
