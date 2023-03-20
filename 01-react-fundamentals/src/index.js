import ReactDOM from 'react-dom/client';

import './index.css';

const books = [
  {
    author: 'James Clear',
    title: 'Atomic Habits',
    imgUrl:
      'https://images-na.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81bGKUa1e0L._AC_UL600_SR600,400_.jpg',
    id: 1,
  },
  {
    author: 'Dav Pilkey',
    title: 'Dog Man: Twenty Thousand Fleas Under the Sea',
    imgUrl:
      'https://images-na.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81fyoFoaxlL._AC_UL600_SR600,400_.jpg',
    id: 2,
  },
];

const BookList = () => {
  return (
    <section className="booklist">
      <EventExample />
      {books.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
};

const Book = (props) => {
  const { author, title, imgUrl } = props;
  return (
    <article className="book">
      <img src={imgUrl} alt={title + ' Cover'} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      {/* <p>{let x = 6}</p> doesn't work it must be an expression (return value)*/}
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
