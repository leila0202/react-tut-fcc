import { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturnsFetchData = () => {
  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const user = await response.json();

        setUser(user);
      } catch (error) {
        console.log(error);
        setIsError(true);
      }

      setIsLoading(false);
    };
    fetchData();
  }, []);
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2 style={{ color: 'red' }}>Error</h2>;
  }
  const { avatar_url, name, company, bio } = user;
  return (
    <div className="container">
      <h2>Fetch Data </h2>
      <img src={avatar_url} alt={name} />
      <h3>{name}</h3>
      <h4>{company}</h4>
      <h4>{bio}</h4>
    </div>
  );
};
export default MultipleReturnsFetchData;
