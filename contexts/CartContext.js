import React, { createContext, useState, useEffect } from "react";
// import axios from "axios";
import { useRouter } from "next/router";
// import { CookiesProvider, useCookies } from "react-cookie";
// 1.1  create the context
export const CartContext = createContext();

export default function CartContextWrapper({ children }) {
  const [cartContext, setCartContext] = useState([]);
  let val = {
    cartContext,
    setCartContext,
  };

  return (
    <>
      <CartContext.Provider value={val}>
        {children}
      </CartContext.Provider>
    </>
  );
}