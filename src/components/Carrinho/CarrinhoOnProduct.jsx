import React from "react";
import {
  StyledButtonOnProduct,
  StyledButtonOnProductIncDec,
  StyledspanIncDec,
} from "./ButtonImg/ButtonImg";

const CarrinhoOnProduct = () => {
  return (
    <StyledButtonOnProduct>
      <StyledButtonOnProductIncDec>
        <StyledspanIncDec>
          <img src="./src/assets/images/icon-increment-quantity.svg" />
        </StyledspanIncDec>
        <span>{totalItems}</span>
        <StyledspanIncDec>
          <img src="./src/assets/images/icon-decrement-quantity.svg" />
        </StyledspanIncDec>
      </StyledButtonOnProductIncDec>
    </StyledButtonOnProduct>
  );
};

export default CarrinhoOnProduct;
