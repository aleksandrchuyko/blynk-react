import css from './NoteView.module.css';
import CommentSection from '../components/CommentSection/CommentSection';
import ItemSection from '../components/ItemSection/ItemSection';

const NoteView: React.FC = () => {
  return (
    <div className={css.view}>
      <main className={css.main}>
        <div className={css.contentBox}>
          <div className={css.sectionBox}>
            <ItemSection />
          </div>
          <div className={css.sectionBox}>
            <CommentSection />
          </div>
        </div>
      </main>
    </div>
  );
};

export default NoteView;
