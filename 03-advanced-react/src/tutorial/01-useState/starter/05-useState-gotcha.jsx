import { useState } from 'react';

const UseStateGotcha = () => {
  const [number, setNumber] = useState(0);
  const handleClick = () => {
    setNumber((prevState) => {
      const newState = prevState + 1;
      return newState;
    });
    console.log(newState);
  };
  return (
    <>
      <h2>useState "gotcha"</h2>
      <h3>{number}</h3>
      <button type="button" className="btn" onClick={handleClick}>
        increase
      </button>
    </>
  );
};

export default UseStateGotcha;
