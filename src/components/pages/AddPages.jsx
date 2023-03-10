import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAdd } from 'redux/users/usersOperations';
import { useLocation, useNavigate } from 'react-router-dom';

const AddPage = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/users';
  const navigate = useNavigate();
  const handleSubmit = e => {
    e.preventDefault();
    const newUser = { name, email };
    dispatch(fetchAdd(newUser));
    navigate(backLinkHref, { replace: true });
    setName('');
    setEmail('');
  };

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      default:
        return;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input type="text" onChange={handleChange} name="name" value={name} />
      </label>
      <label>
        Email
        <input
          type="email"
          onChange={handleChange}
          name="email"
          value={email}
        />
      </label>

      <button type="submit">Add user</button>
    </form>
  );
};

export default AddPage;
