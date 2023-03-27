import { useContext } from 'react';
import { NavbarContext } from './Navbar';

const UserContainer = () => {
  const { user, logout } = useContext(NavbarContext);
  return (
    <div>
      {user ? <h3>{user.name}</h3> : <p>please login</p>}
      <button type="button" onClick={logout}>
        Logout
      </button>
    </div>
  );
};
export default UserContainer;
