import React, { useEffect, useState } from "react";
import ItemCard from "../components/ItemCard";
import LoadingSpinner from "../components/LoadingSpinner";

const Shop = () => {
  const [items, setItems] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://fortnite-api.com/v2/cosmetics/br/new`)
      .then((response) => response.json())
      .then((data) => {
        setItems(
          data.data.items.filter(
            (item) =>
              item.name !== "TBD" &&
              ["backpack", "pickaxe", "glider"].includes(item.type.value)
          )
        );
      })
      .catch((error) => setError(error));
  }, []);

  if (items === null) return <LoadingSpinner />;
  if (error !== null) return <h3>{error.message}</h3>;

  return (
    <section className="Shop">
      {items.map((item) => {
        return <ItemCard key={item.id} data={item} />;
      })}
    </section>
  );
};

export default Shop;
