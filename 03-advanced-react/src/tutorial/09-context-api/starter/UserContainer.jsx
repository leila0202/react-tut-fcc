const UserContainer = (props) => {
  const { user, logout } = props;
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
