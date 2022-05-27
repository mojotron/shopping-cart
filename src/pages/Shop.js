import React, { useEffect, useState } from "react";
import ItemCard from "../components/ItemCard";
import LoadingSpinner from "../components/LoadingSpinner";

const Shop = () => {
  const [items, setItems] = useState(null);

  useEffect(() => {
    fetch(`https://fortnite-api.com/v2/cosmetics/br/new`)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setItems(
          data.data.items.filter(
            (item) =>
              item.name !== "TBD" &&
              ["backpack", "pickaxe", "glider"].includes(item.type.value)
          )
        );
      });
  }, []);

  if (items === null) return <LoadingSpinner />;

  return (
    <section className="Shop">
      {items.map((item) => {
        return <ItemCard key={item.id} data={item} />;
      })}
    </section>
  );
};

export default Shop;
