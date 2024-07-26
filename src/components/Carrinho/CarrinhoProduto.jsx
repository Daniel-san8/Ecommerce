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

const CarrinhoProduto = ({
  totalItems,
  nomeDoProduto,
  quantidadeDoProduto,
  precoDoProduto,
  itensNoCarrinho,
}) => {
  return (
    <>
      <StyledTituloCarrinho>Your Cart ({totalItems})</StyledTituloCarrinho>
      {itensNoCarrinho.map(({ name, price }, index) => {
        const validPrice = Number(price) || 0;
        const validQuantidade = Number(quantidadeDoProduto) || 0;
        return (
          <StyledCarrinhoContainer key={index}>
            <StyledDivCarrinhoProduto>
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
          </StyledCarrinhoContainer>
        );
      })}
    </>
  );
};

export default CarrinhoProduto;
