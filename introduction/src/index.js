import React from 'react';
import ReactDOM from 'react-dom/client';

export default function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}

const Person = () => <h2>john doe</h2>;
const Message = () => {
  return <p>This is my Message</p>;
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Greeting />);
