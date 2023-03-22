import { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const FetchData = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const resp = await fetch(url);
        const users = await resp.json();
        setUsers(users);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUsers();
  }, []);
  return (
    <>
      <h2>fetch data example</h2>
      <ul className="users">
        {users.map((user) => {
          return <User key={user.id} {...user} />;
        })}
      </ul>
    </>
  );
};

const User = (props) => {
  const { avatar_url, login, html_url, id } = props;

  // const [avatar_url, login, url] = user;
  return (
    <li>
      <img src={avatar_url} alt={`${login}'s Avatar`} />
      <div>
        <h5>{login}</h5>
        <a href={html_url}>Link to User</a>
      </div>
    </li>
  );
};
export default FetchData;
