import { useSelector } from 'react-redux';
import CommentForm from './CommentForm/CommentForm';
import { getCurrent, getNotes } from '../../redux/selectors';
import CommentList from './CommentList/CommentList';

const CommentSection: React.FC = () => {
  let current = useSelector(getCurrent);
  let notes = useSelector(getNotes);
  let note = notes.find((item) => item.id === current);

  return (
    <div>
      <h1>Comments</h1>
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
