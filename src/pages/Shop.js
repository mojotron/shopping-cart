import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Shop = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://fortnite-api.com/v2/cosmetics/br/new`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setItems(
          data.data.items.filter(
            (item) =>
              item.name !== "TBD" &&
              ["backpack", "pickaxe", "glider"].includes(item.type.value)
          )
        );
      });
  }, []);

  return (
    <section className="Shop">
      {items.map((item) => {
        return (
          <Link to={`/shop/${item.id}`} className="ItemCard__info__link">
            <div key={item.id} className="ItemCard">
              <img className="ItemCard__image" src={item.images.icon} />
              <div className="ItemCard__info">
                <h3 className="ItemCard__info__name">{item.name}</h3>
                <p className="ItemCard__info__type">{item.type.value}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </section>
  );
};

export default Shop;
