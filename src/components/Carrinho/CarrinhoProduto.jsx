import React from "react";
import {
  StyledCarrinhoContainer,
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

const CarrinhoProduto = ({ totalItems, itensNoCarrinho }) => {
  return (
    <>
      <StyledCarrinhoContainer>
        <StyledTituloCarrinho>Your Cart ({totalItems})</StyledTituloCarrinho>
        {itensNoCarrinho.map(({ name, price, quantidade }, index) => {
          const validPrice = Number(price) || 0;
          const validQuantidade = Number(quantidade) || 0;
          return quantidade > 0 ? (
            <StyledDivCarrinhoProduto key={index}>
              <StyledDivCarrinhoProdutoItens>
                <StyledTituloProduto>{name}</StyledTituloProduto>
                <StyledDivQuantidades>
                  <StyledQuantidadeItens>
                    {validQuantidade}x
                  </StyledQuantidadeItens>
                  <StyledSpanUm>
                    @ {validPrice.toFixed(2)}{" "}
                    <StyledSpanDois>
                      ${(validPrice * validQuantidade).toFixed(2)}
                    </StyledSpanDois>
                  </StyledSpanUm>
                </StyledDivQuantidades>
              </StyledDivCarrinhoProdutoItens>
              <StyledImgItens src="./src/assets/images/icon-remove-item.svg" />
            </StyledDivCarrinhoProduto>
          ) : null;
        })}
      </StyledCarrinhoContainer>
    </>
  );
};

export default CarrinhoProduto;
