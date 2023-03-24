const Person = (props) => {
  const { name, nickName, images } = props.person;
  return (
    <div style={{ border: '1px black solid' }}>
      <h3>{name}</h3>
      <h4>{nickName}</h4>
      {images ? (
        <img style={{ width: '50px' }} src={images[0].small.url} alt={name} />
      ) : (
        <></>
      )}
    </div>
  );
};
export default Person;
