import React from "react";
import {
  StyledCarrinhoContainer,
  StyledCarrinhoDiv,
  StyledCarrinhoImg,
  StyledCarrinhoParagrafo,
  StyledDivCarrinhoProduto,
  StyledDivCarrinhoProdutoItens,
  StyledDivQuantidades,
  StyledImgItens,
  StyledQuantidadeItens,
  StyledSpanDois,
  StyledSpanUm,
  StyledTituloCarrinho,
  StyledTituloProduto,
} from "./CompononentsCarrinho";
import { GlobalContext } from "../../GlobalContext";

const Carrinho = () => {
  const {
    totalItems,
    quantidadeDoProduto,
    precoDoProduto,
    nomeDoProduto,
    dados,
  } = React.useContext(GlobalContext);
  if (dados === null) return null;
  return (
    <>
      {totalItems === 0 ? (
        <StyledCarrinhoContainer>
          <StyledTituloCarrinho>Your Cart ({totalItems})</StyledTituloCarrinho>
          <StyledCarrinhoDiv>
            <StyledCarrinhoImg src="./src/assets/images/illustration-empty-cart.svg"></StyledCarrinhoImg>
            <StyledCarrinhoParagrafo>
              Your added items will appear here
            </StyledCarrinhoParagrafo>
          </StyledCarrinhoDiv>
        </StyledCarrinhoContainer>
      ) : null}
    </>
  );
};

export default Carrinho;
