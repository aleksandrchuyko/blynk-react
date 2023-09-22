import css from './ItemForm.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from '../../../redux/notesSlice';
import { nanoid } from '@reduxjs/toolkit';
import { Note } from '../../../types';

const ItemForm: React.FC = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');

  const handleChange = (e: any) => {
    setTitle(e.currentTarget.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    let newNote: Note = {
      id: nanoid(),
      title,
      comments: [],
    };

    dispatch(addNote(newNote));
    setTitle('');
  };

  return (
    <form className={css.inputGroup} onSubmit={handleSubmit}>
      <input
        type='text'
        name='title'
        value={title}
        onChange={handleChange}
        placeholder='Type name here...'
        required
      />

      <button type='submit'>Add New</button>
    </form>
  );
};

export default ItemForm;
