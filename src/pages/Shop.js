import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Shop = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://fortnite-api.com/v2/cosmetics/br/new`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setItems(data.data.items.filter((item) => item.name !== "TBD"));
      });
  }, []);

  return (
    <section>
      <h2>Shop</h2>
      {items.map((item) => {
        return (
          <div key={item.id}>
            <img src={item.images.smallIcon} />
            <Link to={`/shop/${item.id}`}>{item.name}</Link>
          </div>
        );
      })}
    </section>
  );
};

export default Shop;
