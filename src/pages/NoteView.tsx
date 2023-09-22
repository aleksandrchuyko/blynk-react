import css from './NoteView.module.css';
import CommentSection from '../components/CommentSection/CommentSection';
import ItemSection from '../components/ItemSection/ItemSection';

const NoteView: React.FC = () => {
  return (
    <div className={css.view}>
      <main className={css.main}>
        <div className={css.contentBox}>
          <ItemSection />
          <CommentSection />
        </div>
      </main>
    </div>
  );
};

export default NoteView;
