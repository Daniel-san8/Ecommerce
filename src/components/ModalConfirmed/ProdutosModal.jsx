import React from "react";
import { GlobalContext } from "../../GlobalContext";
import {
  StyledAnchorButtonOrder,
  StyledDivButtonOrder,
  StyledQuantidadeItens,
  StyledSpanOneTotal,
  StyledSpanTwoTotal,
  StyledSpanUm,
} from "../Carrinho/CompononentsCarrinho";

const ProdutosModal = () => {
  const { itensNoCarrinho, dados, valorTotal } =
    React.useContext(GlobalContext);
  const botao = React.useRef(null);
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
      <div
        style={{ backgroundColor: "hsl(13, 31%, 94%)", borderRadius: "5px" }}
      >
        {itensNoCarrinho.map(({ name, price, quantidade, id }) => {
          if (quantidade <= 0) return null;
          return (
            <div key={id}>
              <div
                style={{
                  padding: "1rem",
                  display: "flex",
                  gap: "1rem",
                  fontWeight: "600",
                  fontSize: "13px",
                }}
              >
                <img
                  style={{ borderRadius: "6px", width: "60px", height: "60px" }}
                  src={dados[id].image.thumbnail}
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  <span>{name} </span>

                  <span style={{ display: "flex", gap: "1rem" }}>
                    <StyledQuantidadeItens>{quantidade}x</StyledQuantidadeItens>
                    <StyledSpanUm>@ {price.toFixed(2)}</StyledSpanUm>
                  </span>
                </div>
                <span
                  style={{
                    display: "block",
                    margin: "auto 0 auto auto",
                  }}
                >
                  ${(price * quantidade).toFixed(2)}
                </span>
              </div>
              <span
                style={{
                  display: "block",
                  margin: "0 auto",
                  justifyItems: "center",
                  width: "80%",
                  backgroundColor: "hsl(25, 58%, 88%)",
                  height: "1px",
                }}
              ></span>
            </div>
          );
        })}
        <StyledSpanOneTotal>
          Order Total
          <StyledSpanTwoTotal>${valorTotal.toFixed(2)}</StyledSpanTwoTotal>
        </StyledSpanOneTotal>
      </div>
      <StyledDivButtonOrder>
        <StyledAnchorButtonOrder ref={botao}>
          Start New Order
        </StyledAnchorButtonOrder>
      </StyledDivButtonOrder>
    </>
  );
};
export default ProdutosModal;
