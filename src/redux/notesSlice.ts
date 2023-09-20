import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Note } from '../types';

const notesInitialState: Note[] = [
  {
    id: '01234567',
    title: "It's time to return the books to the library",
    comments: [
      {
        id: '00000xx',
        color: '#ffffff',
        content: 'Test',
      },
    ],
  },
];

const notesSlice = createSlice({
  name: 'notes',
  initialState: notesInitialState,
  reducers: {
    addNote(state, action: PayloadAction<Note>) {
      state.push(action.payload);
    },
    deleteNote(state, action: PayloadAction<string>) {
      const index = state.findIndex((note) => note.id === action.payload);
      state.splice(index, 1);
    },
    updateNote(state, action: PayloadAction<Note>) {
      for (let note of state) {
        if (note.id === action.payload.id) {
          // note.content = action.payload.content;
          // note.dates = action.payload.dates;
          break;
        }
      }
    },
  },
});

export const { addNote, deleteNote, updateNote } = notesSlice.actions;
export const notesReducer = notesSlice.reducer;
