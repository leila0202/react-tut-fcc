import { useState } from 'react';

const ShortCircuitOverview = () => {
  const [number, setNumber] = useState(0); //falsy
  const [text, setText] = useState('test'); //truthy
  return (
    <>
      <h2>short circuit overview</h2>
      <h3>{number && text}</h3>
      <h3>{number || text}</h3>
    </>
  );
};
export default ShortCircuitOverview;
