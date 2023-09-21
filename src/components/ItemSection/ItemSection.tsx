import css from './ItemSection.module.css';
import ItemForm from './ItemForm/ItemForm';
import ItemList from './ItemList/ItemList';

const ItemSection: React.FC = () => {
  return (
    <div className={css.itemsBox}>
      <h1>Items</h1>
      <ItemForm />
      <ItemList />
    </div>
  );
};

export default ItemSection;
