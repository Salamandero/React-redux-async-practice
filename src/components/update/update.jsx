import { useState } from 'react';
const UpdateForm = ({ user }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const handleSubmit = e => {
    e.preventDefault();
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
