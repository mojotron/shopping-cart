// components
import StoreItem from '../../components/StoreItem/StoreItem';
// data
import storeData from '../../data/storeItems.json';

const StorePage = () => {
  return (
    <div className="flex justify-center">
      <div>
        {storeData.map((item) => (
          <StoreItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default StorePage;
