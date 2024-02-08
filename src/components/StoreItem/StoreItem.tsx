import type { ProductType } from '../../types/productType';

type PropsType = {
  item: ProductType;
};

const StoreItem = ({ item }: PropsType) => {
  return <article>StoreItem</article>;
};

export default StoreItem;
