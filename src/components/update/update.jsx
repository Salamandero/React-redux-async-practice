import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchChangeUser } from 'redux/users/usersOperations';
const UpdateForm = ({ user, handleForm }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const newUser = { ...user, name, email };
    dispatch(fetchChangeUser(newUser));
    handleForm();
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
    }
    return;
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

      <button type="submit">Update user</button>
    </form>
  );
};

export { UpdateForm };
