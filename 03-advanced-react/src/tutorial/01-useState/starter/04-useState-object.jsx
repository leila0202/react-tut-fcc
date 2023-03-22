import { useState } from 'react';
//correct
const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'Kathi',
    age: 24,
    hobby: 'hiking',
  });
  const handleClick = () => {
    setPerson({
      name: 'Leila',
      age: 29,
      hobby: 'programming',
    });
  };
  return (
    <div>
      <h2>useState object example</h2>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{`Enjoys ${person.hobby}`}</h3>
      <button type="button" onClick={handleClick}>
        Show Leila
      </button>
    </div>
  );
};

export default UseStateObject;
