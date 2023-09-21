import CommentSection from '../components/CommentSection/CommentSection';
import ItemSection from '../components/ItemSection/ItemSection';

const NoteView: React.FC = () => {
  return (
    <main>
      <h2>Note view</h2>
      <ItemSection />
      <CommentSection />
    </main>
  );
};

export default NoteView;
