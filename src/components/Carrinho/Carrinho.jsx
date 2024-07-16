import React from "react";
import { GlobalContext } from "../../GlobalContext";

const Cart = () => {
  const { larguraUsuario } = React.useContext(GlobalContext);
  return <h1>{larguraUsuario}</h1>;
};

export default Cart;
