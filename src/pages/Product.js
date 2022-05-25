import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const Product = () => {
  const { itemId } = useParams();

  useEffect(() => {
    fetch(`https://fortnite-api.com/v2/cosmetics/br/${itemId}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  });

  return (
    <div>
      <h3>Product {itemId}</h3>
      <Link to="/shop">back to shop</Link>
    </div>
  );
};

export default Product;
