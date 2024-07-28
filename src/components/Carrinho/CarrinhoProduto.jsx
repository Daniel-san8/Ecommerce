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

const CarrinhoProduto = ({ totalItems, itensNoCarrinho, tirarTodosItens }) => {
  let multiplicacaoValor = 0;
  let arr = 0;
  console.log(itensNoCarrinho);
  if (itensNoCarrinho.length > 0) {
    arr = itensNoCarrinho.reduce((acc, item) => {
      if (item.price && item.quantidade) {
        return acc + item.price * item.quantidade;
      }
      return acc;
    }, 0);
  }
  return (
    <>
      <StyledCarrinhoContainer>
        <StyledTituloCarrinho>Your Cart ({totalItems})</StyledTituloCarrinho>
        {itensNoCarrinho.map(({ name, price, quantidade, id }) => {
          const validPrice = Number(price) || 0;
          const validQuantidade = Number(quantidade) || 0;
          multiplicacaoValor = validPrice * validQuantidade;
          return quantidade > 0 ? (
            <StyledDivCarrinhoProduto key={id}>
              <StyledDivCarrinhoProdutoItens>
                <StyledTituloProduto>{name}</StyledTituloProduto>
                <StyledDivQuantidades>
                  <StyledQuantidadeItens>
                    {validQuantidade}x
                  </StyledQuantidadeItens>
                  <StyledSpanUm>
                    @ {validPrice.toFixed(2)}{" "}
                    <StyledSpanDois>
                      ${multiplicacaoValor.toFixed(2)}
                    </StyledSpanDois>
                  </StyledSpanUm>
                </StyledDivQuantidades>
              </StyledDivCarrinhoProdutoItens>
              <StyledImgItens
                onClick={() => tirarTodosItens(id)}
                src="./src/assets/images/icon-remove-item.svg"
              />
            </StyledDivCarrinhoProduto>
          ) : null;
        })}
        <span
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            gap: "1rem",
          }}
        >
          Order Total{" "}
          <span style={{ fontSize: "2rem", fontWeight: "600" }}>
            ${arr.toFixed(2)}
          </span>
        </span>
      </StyledCarrinhoContainer>
    </>
  );
};

export default CarrinhoProduto;
