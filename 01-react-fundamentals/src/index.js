import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

const author = 'James Clear';
const title = 'Atomic Habits'; //can be declared insinde or outside of the componentn but not in the return statement
const imgUrl =
  'https://images-na.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81bGKUa1e0L._AC_UL600_SR600,400_.jpg';

const BookList = () => {
  return (
    <section className="booklist">
      <Book author={author} title={title} imgUrl={imgUrl} />
      <Book author={author} title={title} imgUrl={imgUrl} />
      <Book author={author} title={title} imgUrl={imgUrl} />
    </section>
  );
};

const Book = (props) => {
  console.log(props);
  return (
    <article className="book">
      <img src={props.imgUrl} alt={props.title + ' Cover'} />
      <h2>{props.title}</h2>
      <h4>{props.author}</h4>
      {/* <p>{let x = 6}</p> doesn't work it must be an expression (return value)*/}
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
