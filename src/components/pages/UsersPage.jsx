import Button from 'components/Button/Button';

import { useDispatch } from 'react-redux';
import { fetchAll } from 'redux/users/usersOperations';
import UserList from 'components/UserList/UserList';
import { getUsers } from 'redux/users/usersSelector';
import { useSelector } from 'react-redux/es/exports';
import { Link } from 'react-router-dom';
const UsersPages = () => {
  const usersData = useSelector(getUsers);
  const dispatch = useDispatch();
  const showUsersList = () => {
    dispatch(fetchAll());
  };

  return (
    <>
      {usersData.length > 0 ? (
        <>
          <UserList />
          <Link to="/add">Add user</Link>
        </>
      ) : (
        <Button text="Show Users list" clickHandler={showUsersList} />
      )}
    </>
  );
};

export default UsersPages;
