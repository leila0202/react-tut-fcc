import { useState } from 'react';

const UseStateGotcha = () => {
  const [number, setNumber] = useState(0);
  return (
    <>
      <h2>useState "gotcha"</h2>
      <h3>{number}</h3>
      <button
        type="button"
        className="btn"
        onClick={() => {
          setNumber(number + 1);
          console.log(number);
        }}
      >
        increase
      </button>
    </>
  );
};

export default UseStateGotcha;
