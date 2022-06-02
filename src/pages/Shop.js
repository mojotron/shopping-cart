import React, { useEffect, useState } from "react";
import ItemCard from "../components/ItemCard";
import LoadingSpinner from "../components/LoadingSpinner";

const Temp = (props) => {
  console.log("temp", props);
  return (
    <>
      {props.products.map((item) => {
        return <ItemCard key={item.id} data={item} />;
      })}
    </>
  );
};

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
      const data = await response.json();
      const filtered = data.data.items.filter(
        (item) =>
          item.name !== "TBD" &&
          ["backpack", "pickaxe", "glider"].includes(item.type.value)
      );
      setItems(filtered);
    } catch (error) {
      setError(error.message);
    }
  };

  if (error !== "") return <h3>{error}</h3>;

  return (
    <section className="Shop">
      {items.length > 0 ? <Temp products={items} /> : <LoadingSpinner />}
    </section>
  );
};

export default Shop;
