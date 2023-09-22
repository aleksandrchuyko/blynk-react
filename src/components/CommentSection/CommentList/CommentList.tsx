import css from './CommentList.module.css';

import { nanoid } from '@reduxjs/toolkit';
import { Comment } from '../../../types';

type Props = {
  comments: Comment[];
};

const CommentList: React.FC<Props> = ({ comments }) => {
  return (
    <>
      {comments.map((comment) => (
        <div className={css.commentCard} key={nanoid()}>
          <div
            className={css.cardColor}
            style={{ backgroundColor: comment.color }}
          ></div>
          <div className={css.cardContent}>
            <pre>{comment.content}</pre>
          </div>
        </div>
      ))}
    </>
  );
};

export default CommentList;
