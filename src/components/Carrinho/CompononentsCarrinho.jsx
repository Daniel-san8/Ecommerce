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
`;

export const StyledCarrinhoParagrafo = styled.p`
  color: hsl(12, 20%, 44%);
  font-weight: 600;
`;

export const StyledDivCarrinhoProduto = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledDivCarrinhoProdutoItens = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 0.8rem;
  padding: 0 1.5rem;
`;

export const StyledTituloProduto = styled.span`
  font-weight: 600;
`;

export const StyledQuantidadeItens = styled.span`
  color: hsl(14, 86%, 42%);
  font-weight: 600;
`;

export const StyledDivQuantidades = styled.div`
  display: flex;
  gap: 1rem;
`;

export const StyledSpanUm = styled.span`
  color: hsl(7, 20%, 60%);
`;
export const StyledSpanDois = styled.span`
  color: hsl(7, 20%, 60%);
  font-weight: 600;
`;

export const StyledImgItens = styled.img`
  width: 20px;
  height: 20px;
  padding: 0 1.5rem;
  cursor: pointer;
`;

export const StyledSpanOneTotal = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 1rem;
  padding: 1.5rem 0;
  transition: 0.3s;
`;

export const StyledSpanTwoTotal = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const StyledDivCarbonNeutral = styled.div`
  background-color: hsl(20, 50%, 98%);
  padding: 1rem 0;
  margin: 0 1.5rem;
  white-space: nowrap;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;

export const StyledDivButtonOrder = styled.div`
  display: flex;
  justify-content: center;
  padding: 1.5rem;
`;

export const StyledAnchorButtonOrder = styled.a`
  background-color: hsl(14, 86%, 42%);
  text-decoration: none;
  color: white;
  padding: 1rem 4rem;
  border-radius: 25px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: hsl(7, 86%, 42%);
    transition: 0.3s;
  }
`;
