import React from "react";
import {
  StyledCarrinhoContainer,
  StyledCarrinhoDiv,
  StyledCarrinhoImg,
  StyledCarrinhoParagrafo,
  StyledTituloCarrinho,
} from "./CompononentsCarrinho";
// import { GlobalContext } from "../../GlobalContext";

const Carrinho = () => {
  // const { larguraUsuario } = React.useContext(GlobalContext);
  return (
    <StyledCarrinhoContainer>
      <StyledTituloCarrinho>Your Cart(0)</StyledTituloCarrinho>
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
