import { getUsers } from 'redux/users/usersSelector';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDelete } from 'redux/users/usersOperations';
import { useState } from 'react';
import { UpdateForm } from 'components/Update/Update';

const UserList = () => {
  const users = useSelector(getUsers);
  const dispatch = useDispatch();
  const [userToUpdate, setUserToUpdate] = useState(null);
  const handleId = id => {
    setUserToUpdate(users.find(user => user.id === id));
  };
  const closeForm = () => {
    setUserToUpdate(null);
  };
  return (
    <ul>
      {users.map(({ id, email, name }) => (
        <li key={id}>
          <p>name: {name}</p>
          <p>email: {email}</p>
          <button onClick={() => dispatch(fetchDelete(id))}>Delete</button>
          <button onClick={() => handleId(id)}>update user</button>
          {userToUpdate && userToUpdate.id === id && (
            <UpdateForm handleForm={closeForm} user={userToUpdate} />
          )}
        </li>
      ))}
    </ul>
  );
};
export default UserList;
