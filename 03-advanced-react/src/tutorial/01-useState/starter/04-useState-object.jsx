import { useState } from 'react';

const UseStateObject = () => {
  const [name, setName] = useState('Kathi');
  const [age, setAge] = useState(24);
  const [hobby, setHobby] = useState('hiking');
  const handleClick = () => {
    setName('Leila');
    setAge(29);
    setHobby('programming');
  };
  return (
    <div>
      <h2>useState object example</h2>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{`Enjoys ${hobby}`}</h3>
      <button type="button" onClick={handleClick}>
        Show Leila
      </button>
    </div>
  );
};

export default UseStateObject;
