export default function UserDetails({ user }) {
  if (!user) {
    return <p>Select a user</p>;
  }

  return (
    <div>
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
      <p>Company: {user.company.name}</p>
    </div>
  );
}
