import React from "react";
import {
  StyledButtonOnProduct,
  StyledButtonOnProductIncDec,
  StyledspanIncDec,
} from "./ButtonImg/ButtonImg";
import { GlobalContext } from "../../GlobalContext";

const CarrinhoOnProduct = () => {
  const { totalItems, decremento, setarTotal } =
    React.useContext(GlobalContext);
  return (
    <StyledButtonOnProduct>
      <StyledButtonOnProductIncDec>
        <StyledspanIncDec onClick={setarTotal}>
          <img src="./src/assets/images/icon-increment-quantity.svg" />
        </StyledspanIncDec>
        <span>{totalItems}</span>
        <StyledspanIncDec onClick={decremento}>
          <img src="./src/assets/images/icon-decrement-quantity.svg" />
        </StyledspanIncDec>
      </StyledButtonOnProductIncDec>
    </StyledButtonOnProduct>
  );
};

export default CarrinhoOnProduct;
