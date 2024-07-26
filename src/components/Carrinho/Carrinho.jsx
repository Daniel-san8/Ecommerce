import React from "react";
import {
  StyledCarrinhoContainer,
  StyledCarrinhoDiv,
  StyledCarrinhoImg,
  StyledCarrinhoParagrafo,
  StyledTituloCarrinho,
} from "./CompononentsCarrinho";
import { GlobalContext } from "../../GlobalContext";

const Carrinho = () => {
  const {
    totalItems,

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
