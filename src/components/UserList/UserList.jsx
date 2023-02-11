import { getUsers } from 'redux/users/usersSelector';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDelete } from 'redux/users/usersOperations';

const UserList = () => {
  const users = useSelector(getUsers);
  const dispatch = useDispatch();

  return (
    <ul>
      {users.map(({ id, email, name }) => (
        <li key={id}>
          <p>name: {name}</p>
          <p>email: {email}</p>
          <button onClick={() => dispatch(fetchDelete(id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
};
export default UserList;
