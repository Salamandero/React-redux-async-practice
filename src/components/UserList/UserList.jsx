import { getUsers } from 'redux/users/usersSelector';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDelete } from 'redux/users/usersOperations';
import { useState } from 'react';

const UserList = () => {
  const users = useSelector(getUsers);
  const dispatch = useDispatch();
  const [userToUpdate, setUserToUpdate] = useState(null);
  const handleId = id => {
    setUserToUpdate(users.find(user => user.id === id));
    console.log(userToUpdate);
  };

  return (
    <ul>
      {users.map(({ id, email, name }) => (
        <li key={id}>
          <p>name: {name}</p>
          <p>email: {email}</p>
          <button onClick={() => dispatch(fetchDelete(id))}>Delete</button>
          <button onClick={() => handleId(id)}>update user</button>
        </li>
      ))}
    </ul>
  );
};
export default UserList;
