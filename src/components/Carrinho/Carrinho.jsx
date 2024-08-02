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
  const { totalItems, larguraUsuario, dados } = React.useContext(GlobalContext);
  if (dados === null) return null;
  return (
    <>
      {totalItems === 0 ? (
        <StyledCarrinhoContainer>
          <StyledTituloCarrinho $larguraUsuario={larguraUsuario}>
            Your Cart ({totalItems})
          </StyledTituloCarrinho>
          <StyledCarrinhoDiv>
            <StyledCarrinhoImg
              $larguraUsuario={larguraUsuario}
              src="../../public/images/illustration-empty-cart.svg"
            ></StyledCarrinhoImg>
            <StyledCarrinhoParagrafo $larguraUsuario={larguraUsuario}>
              Your added items will appear here
            </StyledCarrinhoParagrafo>
          </StyledCarrinhoDiv>
        </StyledCarrinhoContainer>
      ) : null}
    </>
  );
};

export default Carrinho;
