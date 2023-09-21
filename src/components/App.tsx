import css from './App.module.css'
import React from 'react';
import Layout from './Layout/Layout';
import NoteView from '../pages/NoteView';

const App: React.FC = () => {
  return (
    <div className={css.app}>
      <Layout><NoteView/></Layout>
    </div>
  );
};

export default App;
