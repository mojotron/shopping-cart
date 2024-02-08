import storeData from '../../data/storeItems.json';

const StorePage = () => {
  return (
    <div>
      {storeData.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
};

export default StorePage;
