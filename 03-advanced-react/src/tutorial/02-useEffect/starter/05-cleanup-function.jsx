import { useEffect, useState } from 'react';

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <h2>cleanup function</h2>
      <button type="button" className="btn" onClick={() => setToggle(!toggle)}>
        Toggle
      </button>
      {toggle && <SecondComponent />}
    </div>
  );
};

export default CleanupFunction;

const SecondComponent = () => {
  useEffect(() => {
    console.log('use effect triggered');
    const intId = setInterval(() => {
      console.log('Interval triggered');
    }, 1000);
    return () => {
      clearInterval(intId);
    };
  }, []);
  return <h2>Second Component</h2>;
};
