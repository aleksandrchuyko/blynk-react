import { RootState } from './store';

export const getNotes = (state: RootState) => state.diary.notes;

export const getCurrent = (state: RootState) => state.diary.current;
