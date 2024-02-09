import type { ProductType } from '../../types/productType';

type PropsType = {
  item: ProductType;
};

const StoreItem = ({ item }: PropsType) => {
  return (
    <article>
      <h3>{item.name}</h3>
      <img src={item.imageUrl} alt={item.name} />
      <p>${item.price}</p>
    </article>
  );
};

export default StoreItem;
