import css from './CommentForm.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateNote } from '../../../redux/notesSlice';

import { nanoid } from '@reduxjs/toolkit';
import { Comment, Note } from '../../../types';

type Props = {
  note: Note;
};

const CommentForm: React.FC<Props> = ({ note }) => {
  const dispatch = useDispatch();

  const [content, setContent] = useState('');
  const [color, setColor] = useState('#000000');

  const handleChange = (e: any) => {
    const currentInputName = e.currentTarget.name;
    switch (currentInputName) {
      case 'color':
        setColor(e.currentTarget.value);
        break;
      case 'content':
        setContent(e.currentTarget.value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (note) {
      let newComment: Comment = {
        id: nanoid(),
        color,
        content,
      };
      let newNote: Note = {
        ...note,
        comments: [...note?.comments, newComment],
      };

      dispatch(updateNote(newNote));

      setContent('');
      setColor('#000000');
    }
  };

  return (
    <form className={css.inputGroup} onSubmit={handleSubmit}>
      <input
        className={`${css.control} ${css.controlColor}`}
        type='color'
        name='color'
        value={color}
        onChange={handleChange}
        placeholder='Type name here...'
      />
      <textarea
        className={`${css.control} ${css.controlText}`}
        name='content'
        rows={1}
        value={content}
        onChange={handleChange}
        placeholder='Type name here...'
        required
      />

      <button className={css.controlBtn} type='submit'>
        Add New
      </button>
    </form>
  );
};

export default CommentForm;
