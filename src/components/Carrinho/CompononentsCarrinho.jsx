import styled from "styled-components";

export const StyledTituloCarrinho = styled.h2`
  color: hsl(14, 86%, 42%);
  padding: 1.5rem;
`;

export const StyledCarrinhoContainer = styled.div`
  background-color: white;
  border-radius: 1rem;
  max-width: 90%;
  margin: 1.5rem auto;
`;

export const StyledCarrinhoDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1.5rem;
`;

export const StyledCarrinhoImg = styled.img`
  max-width: 50%;
  src: "./src/assets/images/illustration-empty-cart.svg";
`;

export const StyledCarrinhoParagrafo = styled.p`
  color: hsl(12, 20%, 44%);
  font-weight: 600;
`;
