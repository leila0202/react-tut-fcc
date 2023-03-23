import { useState } from 'react';

const ToggleChallenge = () => {
  const [showAlert, setShowAlert] = useState(true);
  return (
    <div>
      <h2>toggle challenge</h2>
      {showAlert && <h4>This is an Alert!!!!!!</h4>}
      <button type="button" onClick={() => setShowAlert(!showAlert)}>
        {showAlert ? 'Hide' : 'Show'}
      </button>
    </div>
  );
};

export default ToggleChallenge;
