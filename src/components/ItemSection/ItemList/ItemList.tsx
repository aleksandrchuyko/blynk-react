import { useSelector } from 'react-redux';
import { getNotes } from '../../../redux/selectors';

import Item from './Item/Item';

const ItemList: React.FC = () => {
	let notes = useSelector(getNotes);
	console.log(notes);

  return (
    <div>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <Item note={note}></Item>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
