import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../styles/Product.css";

const generatePriceValue = (type) => {
  if (type === "backpack") return 2000;
};
const Product = (props) => {
  const [itemInfo, setItemInfo] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    fetch(`https://fortnite-api.com/v2/cosmetics/br/${itemId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setItemInfo({
          id: data.data.id,
          image: data.data.images.icon,
          name: data.data.name,
          price: generatePriceValue(data.data.type.value),
          quantity: 1,
        });
      });
  }, []);

  if (!itemInfo) return null;
  return (
    <div className="Product">
      <img src={itemInfo.image} />
      <h3>{itemInfo.name}</h3>
      <p>Price: {itemInfo.price}</p>
      <button onClick={() => props.handleAddItemToCard({ ...itemInfo })}>
        Add to cart
      </button>
      <Link to="/shop">back to shop</Link>
    </div>
  );
};

export default Product;
