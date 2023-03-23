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
    const someFunc = () => {
      //some logic
    };
    window.addEventListener('scroll', someFunc);
    return () => {
      window.removeEventListener('scroll', someFunc);
    };
  }, []);
  return <h2>Second Component</h2>;
};
