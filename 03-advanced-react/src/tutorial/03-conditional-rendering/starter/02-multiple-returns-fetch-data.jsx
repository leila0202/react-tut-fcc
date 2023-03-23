import { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturnsFetchData = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const user = await response.json();
        setUser(user);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  console.log(user);
  return <h2>Fetch Data </h2>;
};
export default MultipleReturnsFetchData;
