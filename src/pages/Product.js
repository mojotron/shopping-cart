import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import "../styles/Product.css";

const generatePriceValue = (type) => {
  if (type === "backpack") return 13.99;
  if (type === "pickaxe") return 15.99;
  if (type === "glider") return 19.99;
  return 9.99;
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
          description: data.data.description,
          introduction: data.data.introduction.text,
          set: data.data.set.text,
        });
      });
  }, []);

  if (!itemInfo) return <LoadingSpinner />;

  return (
    <div className="Product">
      <img className="Product__image" src={itemInfo.image} />

      <div className="Product__info">
        <h3 className="Product__info__heading">{itemInfo.name}</h3>
        <p>{itemInfo.description}</p>

        <p>
          {itemInfo.introduction} {itemInfo.set}
        </p>
        <h4 className="Product__info__price">
          Price: ${itemInfo.price.toFixed(2)}
        </h4>
        <div className="Product__info__control">
          <button
            className="btn"
            type="button"
            onClick={() => props.handleAddItemToCard({ ...itemInfo })}
          >
            Add to cart
          </button>
          <Link className="link" to="/shop">
            {"<"}back to shop
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
