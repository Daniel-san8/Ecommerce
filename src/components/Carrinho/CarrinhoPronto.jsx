import React from "react";
import {
  StyledContainerButtonCart,
  StyledTextoButtonCart,
} from "./ButtonImg/ButtonImg";

const CarrinhoPronto = () => {
  return (
    <StyledContainerButtonCart>
      <img src="./src/assets/images/icon-add-to-cart.svg" />
      <StyledTextoButtonCart>Add to Cart</StyledTextoButtonCart>
    </StyledContainerButtonCart>
  );
};

export default CarrinhoPronto;
