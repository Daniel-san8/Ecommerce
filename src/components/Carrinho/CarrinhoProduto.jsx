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
  StyledSpanOneTotal,
  StyledSpanTwoTotal,
  StyledDivCarbonNeutral,
  StyledAnchorButtonOrder,
  StyledDivButtonOrder,
} from "./CompononentsCarrinho";
import { GlobalContext } from "../../GlobalContext";

const CarrinhoProduto = ({ totalItems, itensNoCarrinho, tirarTodosItens }) => {
  const { abreModal, modalState } = React.useContext(GlobalContext);
  const botao = React.useRef(null);
  let multiplicacaoValor = 0;
  let arr = 0;
  if (itensNoCarrinho.length > 0) {
    arr = itensNoCarrinho.reduce((acc, item) => {
      if (item.price && item.quantidade) {
        return acc + item.price * item.quantidade;
      }
      return acc;
    }, 0);
  }

  React.useEffect(() => {
    const handleClick = (event) => {
      event.preventDefault();
    };
    console.log(modalState);
    const botaoElement = botao.current;
    if (botaoElement) {
      botaoElement.addEventListener("click", handleClick);
    }

    return () => {
      if (botaoElement) {
        botaoElement.removeEventListener("click", handleClick);
      }
    };
  }, []);
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
        <StyledSpanOneTotal>
          Order Total <StyledSpanTwoTotal>${arr.toFixed(2)}</StyledSpanTwoTotal>
        </StyledSpanOneTotal>
        <StyledDivCarbonNeutral>
          <img src="./src/assets/images/icon-carbon-neutral.svg" />
          <span>
            This is a <strong>carbon-neutral</strong> delivery
          </span>
        </StyledDivCarbonNeutral>
        <StyledDivButtonOrder>
          <StyledAnchorButtonOrder
            ref={botao}
            onClick={() => {
              abreModal();
            }}
          >
            Confirm Order
          </StyledAnchorButtonOrder>
        </StyledDivButtonOrder>
      </StyledCarrinhoContainer>
    </>
  );
};

export default CarrinhoProduto;
