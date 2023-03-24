import { useState } from 'react';
import { data } from '../../../data';

const UserChallenge = () => {
  const [name, setName] = useState('');
  const [users, setUsers] = useState(data);
  const id = users[users.length - 1]?.id;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;
    const newUser = {
      id: id + 1 || 1,
      name: name,
    };
    setUsers((prevState) => {
      return [...prevState, newUser];
    });
    setName('');
  };

  const removeUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      {/* render users below */}
      {users.map((user) => (
        <div key={user.id}>
          <h4>{user.name}</h4>
          <button
            type="button"
            className="btn"
            onClick={() => removeUser(user.id)}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};
export default UserChallenge;
