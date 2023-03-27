import { useState } from 'react';
import NavLinks from './NavLinks';

const Navbar = () => {
  const [user, setUser] = useState({ name: 'something' });
  const logout = () => {
    setUser(null);
  };
  return (
    <div>
      <NavLinks user={user} logout={logout} />
    </div>
  );
};
export default Navbar;
