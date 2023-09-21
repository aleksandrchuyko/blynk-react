import ItemForm from './ItemForm/ItemForm';
import ItemList from './ItemList/ItemList';

const ItemSection: React.FC = () => {
  return (
		<div>
			<h1>Items</h1>
      <ItemForm />
      <ItemList />
    </div>
  );
};

export default ItemSection;
