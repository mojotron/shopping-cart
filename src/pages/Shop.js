import React, { useEffect, useState } from "react";
import ItemCard from "../components/ItemCard";
import LoadingSpinner from "../components/LoadingSpinner";

const Shop = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await fetch(
        `https://fortnite-api.com/v2/cosmetics/br/new`
      );
      if (!response.ok) throw new Error("Connection error!");
      const responseData = await response.json();
      const filtered = responseData.data.items.filter(
        (item) =>
          item.name !== "TBD" &&
          ["backpack", "pickaxe", "glider"].includes(item.type.value)
      );
      setItems(filtered);
    } catch (error) {
      setError(error.message);
    }
  };

  if (items.length === 0 && error === "") return <LoadingSpinner />;
  if (error !== "") return <h3 className="error">{error}</h3>;

  return (
    <section className="Shop">
      {items.map((item) => {
        return <ItemCard key={item.id} data={item} />;
      })}
    </section>
  );
};

export default Shop;
