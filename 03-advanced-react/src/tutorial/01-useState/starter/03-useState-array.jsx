import { data } from '../../../data';
import { useState } from 'react';

const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  const handleRemoveOne = (id) => {
    setPeople(people.filter((person) => person.id !== id));
  };
  return (
    <>
      <h2>useState array example</h2>
      <ul>
        {people.map((person) => {
          return (
            <li key={person.id}>
              {person.name}{' '}
              <button
                className="btn"
                onClick={() => handleRemoveOne(person.id)}
              >
                Remove
              </button>
            </li>
          );
        })}
      </ul>
      <button className="btn" onClick={() => setPeople([])}>
        Clear List
      </button>
    </>
  );
};

export default UseStateArray;
