import styled from "styled-components";

export const StyledDivImg = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const StyledImg = styled.img`
  border-radius: 0.6rem;
  max-width: 90%;
  width: 100%;
  margin: 2rem auto;
  display: block;
  border: ${({ on }) =>
    on > 0 ? "2px solid hsl(14, 86%, 42%)" : "2px solid transparent"};
  transition: 0.3s;
`;

export const StyledDadosImagem = styled.div`
  margin: ${(props) => {
    return props.$larguraUsuario >= 768 ? "0 2.5rem" : "0 1.5rem";
  }};
  font-size: ${(props) => {
    return props.$larguraUsuario >= 768 ? "2rem" : "1rem";
  }};
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
