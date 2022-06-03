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
  const [itemInfo, setItemInfo] = useState({});
  const [error, setError] = useState("");
  const { itemId } = useParams();

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const response = await fetch(
        `https://fortnite-api.com/v2/cosmetics/br/${itemId}`
      );
      if (!response.ok) throw new Error("Connection error!");
      const responseData = await response.json();

      setItemInfo({
        id: responseData.data.id,
        image: responseData.data.images.icon,
        name: responseData.data.name,
        price: generatePriceValue(responseData.data.type.value),
        quantity: 1,
        description: responseData.data.description,
        introduction: responseData.data.introduction.text,
        set: responseData.data.set.text,
      });
    } catch (error) {
      setError(error.message);
    }
  };

  if (itemInfo.name === undefined && error === "") return <LoadingSpinner />;
  if (error !== "") return <h3 className="error">{error}</h3>;

  return (
    <article className="Product">
      <img className="Product__image" src={itemInfo.image} />

      <div className="Product__info">
        <h3 className="Product__info__heading">{itemInfo.name}</h3>
        <p>{itemInfo.description}</p>

        <p>
          {itemInfo.introduction} {itemInfo.set}
        </p>
        <h4 className="Product__info__price">Price: ${itemInfo.price}</h4>
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
    </article>
  );
};

export default Product;
