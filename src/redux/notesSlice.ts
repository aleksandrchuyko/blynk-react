import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { Note } from '../types';

const notesInitialState: Note[] = [
  {
    id: '01234567',
    title: "Test",
    comments: [
      {
        id: '00000xx',
        color: '#ffffff',
        content: 'Test',
      },
    ],
  },
];
const initialState = {
  notes: notesInitialState,
  current: '',
};

const notesSlice = createSlice({
  name: 'diary',
  initialState,
  reducers: {
    addNote(state, action: PayloadAction<Note>) {
      state.notes.push(action.payload);
    },
    deleteNote(state, action: PayloadAction<string | undefined>) {
      const index = state.notes.findIndex((note) => note.id === action.payload);
      state.notes.splice(index, 1);
    },
    updateNote(state, action: PayloadAction<Note>) {
      for (let note of state.notes) {
        if (note.id === action.payload.id) {
          note.comments = action.payload.comments;
          break;
        }
      }
    },
    setCurrent(state, action: PayloadAction<string>) {
      state.current = action.payload;
    },
  },
});

//persist
const persistConfig = {
  key: 'diary',
  storage,
  whitelist: ['notes'],
};

export const { addNote, deleteNote, updateNote, setCurrent } = notesSlice.actions;

export const notesReducer = persistReducer(persistConfig, notesSlice.reducer);
