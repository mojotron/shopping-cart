import StoreItem from '../../components/StoreItem/StoreItem';
import storeData from '../../data/storeItems.json';

const StorePage = () => {
  return (
    <div>
      {storeData.map((item) => (
        <StoreItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default StorePage;
