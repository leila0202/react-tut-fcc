import { useState } from 'react';

const UserChallenge = () => {
  const [user, setUser] = useState(null);
  const login = () => {
    setUser({
      name: 'Leila',
    });
  };
  const logout = () => {
    setUser(null);
  };
  return (
    <div>
      <h2>user challenge</h2>
      {user ? (
        <div>
          <h4> Hello there, {user.name}</h4>{' '}
          <button type="button" onClick={logout}>
            Logout
          </button>
        </div>
      ) : (
        <div>
          <h4>Please Login</h4>
          <button type="button" onClick={login}>
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default UserChallenge;
