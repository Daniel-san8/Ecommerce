import React from "react";
import {
  StyledButtonOnProduct,
  StyledButtonOnProductIncDec,
  StyledspanIncDec,
} from "./ButtonImg/ButtonImg";
import { GlobalContext } from "../../GlobalContext";

const CarrinhoOnProduct = ({ quantidade }) => {
  const [itens, setItens] = React.useState(1);

  function aumentaQuantidade() {
    quantidade + 1;
  }

  function diminuiQuantidade() {
    quantidade - 1;
  }

  return (
    <StyledButtonOnProduct>
      <StyledButtonOnProductIncDec>
        <StyledspanIncDec onClick={aumentaQuantidade}>
          <img src="./src/assets/images/icon-increment-quantity.svg" />
        </StyledspanIncDec>
        <span>{quantidade}</span>
        <StyledspanIncDec onClick={diminuiQuantidade}>
          <img src="./src/assets/images/icon-decrement-quantity.svg" />
        </StyledspanIncDec>
      </StyledButtonOnProductIncDec>
    </StyledButtonOnProduct>
  );
};

export default CarrinhoOnProduct;
