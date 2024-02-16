import StoreItem from '../../components/StoreItem/StoreItem';

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
