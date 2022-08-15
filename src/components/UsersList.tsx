import { useUsersList } from '../state/hooks/useUsersList';

const UsersList = () => {
  const users: string[] = useUsersList();
  return (
    <ul>
      {users.map(user => (
        <li key={user}>{user}</li>
      ))}
    </ul>
  )
};

export default UsersList;