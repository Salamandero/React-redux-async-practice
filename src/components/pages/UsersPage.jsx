import Button from 'components/Button/Button';

import { useDispatch } from 'react-redux';
import { fetchAll } from 'redux/users/usersOperations';
import UserList from 'components/UserList/UserList';
import { getUsers } from 'redux/users/usersSelector';
import { useSelector } from 'react-redux/es/exports';
import { Link, useLocation } from 'react-router-dom';

const UsersPages = () => {
  const usersData = useSelector(getUsers);
  const dispatch = useDispatch();
  const showUsersList = () => {
    dispatch(fetchAll());
  };

  const location = useLocation();

  return (
    <>
      {usersData.length > 0 ? (
        <>
          <UserList />
          <Link to="/add" state={{ from: location }}>
            Add user
          </Link>
        </>
      ) : (
        <Button text="Show Users list" clickHandler={showUsersList} />
      )}
    </>
  );
};

export default UsersPages;
