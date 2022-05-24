import React, { useEffect, useState } from "react";

const Shop = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://fortnite-api.com/v2/cosmetics/br/new`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setItems(data.data.items);
      });
  }, []);

  return (
    <section>
      <h1>Shop page</h1>
      {items.map((ele) => (
        <img
          src={ele.images.featured || ele.images.icon}
          style={{ height: "100px" }}
        />
      ))}
    </section>
  );
};

export default Shop;
