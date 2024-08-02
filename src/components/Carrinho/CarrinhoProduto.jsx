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
  const { abreModal, setValorTotal, valorTotal, larguraUsuario } =
    React.useContext(GlobalContext);
  const botao = React.useRef(null);
  let multiplicacaoValor = 0;
  let arr = 0;
  function mudaTotal() {
    if (itensNoCarrinho.length > 0) {
      arr = itensNoCarrinho.reduce((acc, item) => {
        if (item.price && item.quantidade) {
          setValorTotal(acc + item.price * item.quantidade);
          return acc + item.price * item.quantidade;
        }
        return acc;
      }, 0);
    }
  }
  React.useEffect(() => {
    mudaTotal();
  }, [itensNoCarrinho]);

  React.useEffect(() => {
    const handleClick = (event) => {
      event.preventDefault();
    };
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
      <StyledCarrinhoContainer $larguraUsuario={larguraUsuario}>
        <StyledTituloCarrinho $larguraUsuario={larguraUsuario}>
          Your Cart ({totalItems})
        </StyledTituloCarrinho>
        {itensNoCarrinho.map(({ name, price, quantidade, id }) => {
          const validPrice = Number(price) || 0;
          const validQuantidade = Number(quantidade) || 0;
          multiplicacaoValor = validPrice * validQuantidade;
          return quantidade > 0 ? (
            <StyledDivCarrinhoProduto $larguraUsuario={larguraUsuario} key={id}>
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
                $larguraUsuario={larguraUsuario}
                onClick={() => tirarTodosItens(id)}
                src="./src/assets/images/icon-remove-item.svg"
              />
            </StyledDivCarrinhoProduto>
          ) : null;
        })}

        <StyledSpanOneTotal $larguraUsuario={larguraUsuario}>
          Order Total{" "}
          <StyledSpanTwoTotal $larguraUsuario={larguraUsuario}>
            ${valorTotal.toFixed(2)}
          </StyledSpanTwoTotal>
        </StyledSpanOneTotal>
        <StyledDivCarbonNeutral $larguraUsuario={larguraUsuario}>
          <img src="./src/assets/images/icon-carbon-neutral.svg" />
          <span>
            This is a <strong>carbon-neutral</strong> delivery
          </span>
        </StyledDivCarbonNeutral>
        <StyledDivButtonOrder $larguraUsuario={larguraUsuario}>
          <StyledAnchorButtonOrder
            $larguraUsuario={larguraUsuario}
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
