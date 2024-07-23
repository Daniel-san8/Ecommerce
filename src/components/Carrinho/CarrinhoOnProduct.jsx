import React from "react";
import {
  StyledButtonOnProduct,
  StyledButtonOnProductIncDec,
  StyledspanIncDec,
} from "./ButtonImg/ButtonImg";
import { GlobalContext } from "../../GlobalContext";

const CarrinhoOnProduct = ({ quantidadeItens }) => {
  const { setarTotal, decremento } = React.useContext(GlobalContext);
  const [itens, setItens] = React.useState(quantidadeItens);

  function aumentaQuantidade() {
    setItens(itens + 1);
    setarTotal();
  }

  function diminuiQuantidade() {
    setItens(itens - 1);
    decremento();
  }

  return (
    <StyledButtonOnProduct $itens={itens}>
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
