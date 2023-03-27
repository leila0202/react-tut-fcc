import UserContainer from './UserContainer';

const NavLinks = (props) => {
  return (
    <div>
      <UserContainer user={props.user} logout={props.logout} />
    </div>
  );
};
export default NavLinks;
