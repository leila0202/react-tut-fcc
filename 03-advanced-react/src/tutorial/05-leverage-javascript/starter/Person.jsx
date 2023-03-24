import avatar from '../../../assets/default-avatar.svg';

const Person = ({ name, nickName = 'No Nickname', images }) => {
  const img = images?.[0]?.small?.url || avatar;
  return (
    <div style={{ border: '1px black solid' }}>
      <h3>{name}</h3>
      <h4>Nickname: {nickName}</h4>
      <img style={{ width: '50px' }} src={img} alt={name} />
    </div>
  );
};
export default Person;
