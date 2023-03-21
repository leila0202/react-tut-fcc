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
export default Book;
