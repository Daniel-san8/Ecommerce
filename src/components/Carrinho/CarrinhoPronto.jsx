import React from "react";
import {
  StyledContainerButtonCart,
  StyledTextoButtonCart,
} from "./ButtonImg/ButtonImg";
import { GlobalContext } from "../../GlobalContext";

const CarrinhoPronto = () => {
  const { setarTotal, setarQuantidadeGlobal } = React.useContext(GlobalContext);

  function setarWrapper() {
    setarQuantidadeGlobal();
    setarTotal();
  }

  return (
    <StyledContainerButtonCart onClick={setarWrapper}>
      <img src="./src/assets/images/icon-add-to-cart.svg" />
      <StyledTextoButtonCart>Add to Cart</StyledTextoButtonCart>
    </StyledContainerButtonCart>
  );
};

export default CarrinhoPronto;
