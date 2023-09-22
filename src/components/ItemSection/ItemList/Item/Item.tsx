import css from './Item.module.css';
import { useDispatch } from 'react-redux';
import { deleteNote, setCurrent } from '../../../../redux/notesSlice';
import { Note } from '../../../../types';

type Props = {
  note: Note;
};

const Item: React.FC<Props> = ({ note }) => {
  const dispatch = useDispatch();

  const removeNote = (e: any) => {
    dispatch(deleteNote(note.id));
  };

  return (
    <li
      className={css.item}
      onClick={() => {
        dispatch(setCurrent(note.id));
      }}
    >
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
