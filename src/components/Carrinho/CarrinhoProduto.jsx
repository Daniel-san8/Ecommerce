import React from "react";
import {
  StyledCarrinhoContainer,
  StyledDivCarrinhoProduto,
  StyledDivCarrinhoProdutoItens,
  StyledDivQuantidades,
  StyledQuantidadeItens,
  StyledSpanDois,
  StyledSpanUm,
  StyledTituloCarrinho,
  StyledTituloProduto,
} from "./CompononentsCarrinho";

const CarrinhoProduto = () => {
  return (
    <>
      (
      <StyledCarrinhoContainer>
        <StyledTituloCarrinho>Your Cart ({totalItems})</StyledTituloCarrinho>
        <StyledDivCarrinhoProduto>
          <StyledDivCarrinhoProdutoItens>
            <StyledTituloProduto>{nomeDoProduto}</StyledTituloProduto>
            <StyledDivQuantidades>
              <StyledQuantidadeItens>
                {quantidadeDoProduto}x
              </StyledQuantidadeItens>
              <StyledSpanUm>
                @ {precoDoProduto.toFixed(2)}{" "}
                <StyledSpanDois>
                  ${(precoDoProduto * quantidadeDoProduto).toFixed(2)}
                </StyledSpanDois>
              </StyledSpanUm>
            </StyledDivQuantidades>
          </StyledDivCarrinhoProdutoItens>
          <StyledImgItens src="./src/assets/images/icon-remove-item.svg" />
        </StyledDivCarrinhoProduto>
      </StyledCarrinhoContainer>
      )
    </>
  );
};

export default CarrinhoProduto;
