import css from './CommentSection.module.css';
import { useSelector } from 'react-redux';
import CommentForm from './CommentForm/CommentForm';
import { getCurrent, getNotes } from '../../redux/selectors';
import CommentList from './CommentList/CommentList';

const CommentSection: React.FC = () => {
  let current = useSelector(getCurrent);

  let notes = useSelector(getNotes);
  let note = current ? notes.find((item) => item.id === current) : notes[0];

  return (
    <div className={css.commentsBox}>
      <h1>Comments #{note?.id}</h1>
      {note && (
        <>
          <CommentList comments={note.comments} />
          <CommentForm note={note} />
        </>
      )}
    </div>
  );
};

export default CommentSection;
