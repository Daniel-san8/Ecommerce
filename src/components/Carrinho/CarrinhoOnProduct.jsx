import React from "react";
import {
  StyledButtonOnProduct,
  StyledButtonOnProductIncDec,
  StyledspanIncDec,
} from "./ButtonImg/ButtonImg";

const CarrinhoOnProduct = ({ quantidade }) => {
  const [itens, setItens] = React.useState(quantidade);

  function aumentaQuantidade() {
    setItens(itens + 1);
  }

  function diminuiQuantidade() {
    setItens(itens - 1);
  }

  return (
    <StyledButtonOnProduct>
      <StyledButtonOnProductIncDec>
        <StyledspanIncDec onClick={aumentaQuantidade}>
          <img src="./src/assets/images/icon-increment-quantity.svg" />
        </StyledspanIncDec>
        <span>{itens}</span>
        <StyledspanIncDec onClick={diminuiQuantidade}>
          <img src="./src/assets/images/icon-decrement-quantity.svg" />
        </StyledspanIncDec>
      </StyledButtonOnProductIncDec>
    </StyledButtonOnProduct>
  );
};

export default CarrinhoOnProduct;
