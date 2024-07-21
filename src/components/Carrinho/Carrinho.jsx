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
  const { totalItems } = React.useContext(GlobalContext);
  return (
    <StyledCarrinhoContainer>
      <StyledTituloCarrinho>Your Cart ({totalItems})</StyledTituloCarrinho>
      <StyledCarrinhoDiv>
        <StyledCarrinhoImg src="./src/assets/images/illustration-empty-cart.svg"></StyledCarrinhoImg>
        <StyledCarrinhoParagrafo>
          Your added items will appear here
        </StyledCarrinhoParagrafo>
      </StyledCarrinhoDiv>
    </StyledCarrinhoContainer>
  );
};

export default Carrinho;
