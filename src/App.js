import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import Error from "./pages/Error";
import Cart from "./pages/Cart";
import ProtectedRoute from "./pages/ProtectedRoute";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddItemToCard = (item) => {
    const checkItem = cartItems.find((ele) => ele.id === item.id);
    if (checkItem) {
      const newCartItems = cartItems.map((ele) => {
        if (ele.id === item.id) {
          return { ...ele, quantity: ele.quantity + 1 };
        }
        return ele;
      });
      setCartItems(newCartItems);
    } else {
      setCartItems((state) => [...state, item]);
    }
  };

  const handleIncrementItemQuantity = (event) => {
    const id = event.target.dataset.id;
    const newCartItems = cartItems.map((ele) => {
      if (ele.id === id) {
        return { ...ele, quantity: ele.quantity + 1 };
      }
      return ele;
    });
    setCartItems(newCartItems);
  };

  const handleDecrementItemQuantity = (event) => {
    const id = event.target.dataset.id;
    const checkItem = cartItems.find((ele) => ele.id === id);
    console.log(checkItem);
    if (checkItem.quantity === 1) {
      const newCartItems = cartItems.filter((ele) => {
        if (ele.id !== id) {
          return { ...ele };
        }
      });
      setCartItems(newCartItems);
    } else {
      const newCartItems = cartItems.map((ele) => {
        if (ele.id === id) {
          return { ...ele, quantity: ele.quantity - 1 };
        }
        return ele;
      });
      setCartItems(newCartItems);
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout cartLength={cartItems.length} />}>
          <Route index element={<Home />} />

          <Route path="shop">
            <Route index element={<Shop />} />
            <Route
              path=":itemId"
              element={<Product handleAddItemToCard={handleAddItemToCard} />}
            />
          </Route>

          <Route
            path="cart"
            element={
              <ProtectedRoute>
                <Cart
                  items={cartItems}
                  total={cartItems
                    .reduce((sum, ele) => sum + ele.price * ele.quantity, 0)
                    .toFixed(2)}
                  handleIncrementItemQuantity={handleIncrementItemQuantity}
                  handleDecrementItemQuantity={handleDecrementItemQuantity}
                />
              </ProtectedRoute>
            }
          />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
