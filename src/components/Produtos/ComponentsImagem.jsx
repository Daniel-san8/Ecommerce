import styled from "styled-components";

export const StyledDivImg = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const StyledImg = styled.img`
  border-radius: 0.6rem;
  max-width: 90%;
  margin: 2rem auto;
  display: block;
  border: ${({ on }) =>
    on > 0 ? "2px solid hsl(14, 86%, 42%)" : "2px solid transparent"};
  transition: 0.3s;
`;

export const StyledDadosImagem = styled.div`
  margin: 0 1.5rem;
`;

export const StyledCategory = styled.p`
  color: gray;
`;

export const StyledName = styled.p`
  font-weight: 600;
`;

export const StyledPreco = styled.p`
  color: hsl(14, 86%, 42%);
  font-weight: bolder;
`;
