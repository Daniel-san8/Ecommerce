import React from "react";
import {
  StyledButtonOnProduct,
  StyledButtonOnProductIncDec,
  StyledspanIncDec,
  StyledspanIncMais,
} from "./ButtonImg/ButtonImg";
import { GlobalContext } from "../../GlobalContext";

const CarrinhoOnProduct = ({
  quantidadeItens,
  aumentaQuantidade,
  diminuiQuantidade,
}) => {
  const { larguraUsuario } = React.useContext(GlobalContext);
  return (
    <StyledButtonOnProduct
      $larguraUsuario={larguraUsuario}
      $itens={quantidadeItens}
    >
      <StyledButtonOnProductIncDec $larguraUsuario={larguraUsuario}>
        <StyledspanIncMais
          $larguraUsuario={larguraUsuario}
          onClick={aumentaQuantidade}
        >
          <img src="/images/icon-increment-quantity.svg" />
        </StyledspanIncMais>
        <span>{quantidadeItens}</span>
        <StyledspanIncDec
          $larguraUsuario={larguraUsuario}
          onClick={diminuiQuantidade}
        >
          <img src="/images/icon-decrement-quantity.svg" />
        </StyledspanIncDec>
      </StyledButtonOnProductIncDec>
    </StyledButtonOnProduct>
  );
};

export default CarrinhoOnProduct;
