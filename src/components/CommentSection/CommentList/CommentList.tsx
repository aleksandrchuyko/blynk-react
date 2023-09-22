import { nanoid } from '@reduxjs/toolkit';
import { Comment } from '../../../types';

type Props = {
  comments: Comment[];
};

const CommentList: React.FC<Props> = ({ comments }) => {
  return (
    <div>
      <ul>
        {comments.map((comment) => (
          <li key={nanoid()}>
            <div>{comment.content}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentList;
