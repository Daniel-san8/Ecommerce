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
  const { totalItems } = React.useContext(GlobalContext);
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
      ) : (
        <StyledCarrinhoContainer>
          <StyledTituloCarrinho>Your Cart ({totalItems})</StyledTituloCarrinho>
          <StyledDivCarrinhoProduto>
            <StyledDivCarrinhoProdutoItens>
              <StyledTituloProduto>Classic Tiramisu</StyledTituloProduto>
              <StyledDivQuantidades>
                <StyledQuantidadeItens>1x</StyledQuantidadeItens>
                <StyledSpanUm>
                  @ $5.50 <StyledSpanDois>$5.50</StyledSpanDois>
                </StyledSpanUm>
              </StyledDivQuantidades>
            </StyledDivCarrinhoProdutoItens>
            <StyledImgItens src="./src/assets/images/icon-remove-item.svg" />
          </StyledDivCarrinhoProduto>
        </StyledCarrinhoContainer>
      )}
    </>
  );
};

export default Carrinho;
