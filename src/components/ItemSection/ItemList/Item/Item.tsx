import css from './Item.module.css'
import { useDispatch } from 'react-redux';
import { deleteNote, setCurrent } from '../../../../redux/notesSlice';
import { useSelector } from 'react-redux';

import { Note } from '../../../../types';
import { getCurrent } from '../../../../redux/selectors';

type Props = {
  note: Note;
};

const Item: React.FC<Props> = ({ note }) => {
  const dispatch = useDispatch();

  const removeNote = (e: any) => {
    dispatch(deleteNote(note.id));
  };

  let current = useSelector(getCurrent);

  return (
    <li className={css.item}
      onClick={() => {
        dispatch(setCurrent(note.id));
      }}
    >
      {current}
      {note.title}
      <span>{note.comments.length}</span>
      <button
        type='button'
        onClick={() => {
          removeNote(note.id);
        }}
      >
        Delete
      </button>
    </li>
  );
};

export default Item;
