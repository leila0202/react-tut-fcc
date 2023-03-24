import { people } from '../../../data';
import Person from './Person';

const List = () => {
  return (
    <div>
      <ul>
        {people.map((person) => (
          <Person key={person.id} person={person} />
        ))}
      </ul>
    </div>
  );
};
export default List;
