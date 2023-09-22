import css from './ItemList.module.css';
import { useSelector } from 'react-redux';
import { getNotes } from '../../../redux/selectors';

import Item from './Item/Item';

const ItemList: React.FC = () => {
  let notes = useSelector(getNotes);
  console.log(notes);

  return (
    <ul className={css.listGroup}>
      {notes.map((note) => (
        <Item note={note} key={note.id}></Item>
      ))}
    </ul>
  );
};

export default ItemList;
