import styled from "styled-components";

export const StyledDivPrincipal = styled.div`
  display: flex;
  width: ${(props) => {
    return props.$larguraUsuario < 1024 ? "initial" : "60%";
  }};
  flex-direction: ${(props) => {
    return props.$larguraUsuario < 1024 ? "column" : "row";
  }};
  flex-wrap: ${(props) => {
    return props.$larguraUsuario < 1024 ? "nowrap" : "wrap";
  }};
  padding: ${(props) => {
    return props.$larguraUsuario < 1024 ? "0" : "0 0 0 3rem";
  }};
  margin: ${(props) => {
    return props.$larguraUsuario < 1024 ? "0" : "0 0 3rem";
  }};
`;

export const StyledDivImg = styled.div`
  flex: 1 1 calc(33.333% - 10px);
  position: relative;
`;

export const StyledImg = styled.img`
  border-radius: 0.6rem;
  max-width: 90%;
  width: ${(props) => {
    return props.$larguraUsuario < 1024 ? "90%" : "100%";
  }};
  margin: ${(props) => {
    return props.$larguraUsuario < 1024 ? "2rem auto" : "1.5rem auto";
  }};
  display: flex;
  border: ${({ on }) =>
    on > 0 ? "2px solid hsl(14, 86%, 42%)" : "2px solid transparent"};
  transition: 0.3s;
`;

export const StyledDadosImagem = styled.div`
  margin: ${(props) => {
    if (props.$larguraUsuario >= 1024) {
      return "0 1rem";
    } else if (props.$larguraUsuario < 1024 && props.$larguraUsuario >= 768) {
      return "0 2.5rem";
    } else if (
      props.$larguraUsuario < 1024 &&
      props.$larguraUsuario < 768 &&
      props.$larguraUsuario <= 425
    ) {
      return "0 1.5rem";
    }
  }};

  font-size: ${(props) => {
    if (props.$larguraUsuario >= 1024) {
      return "1rem";
    } else if (props.$larguraUsuario < 1024 && props.$larguraUsuario >= 768) {
      return "2rem";
    } else if (
      props.$larguraUsuario < 1024 &&
      props.$larguraUsuario < 768 &&
      props.$larguraUsuario <= 425
    ) {
      return "1rem";
    }
  }};
`;

export const StyledCategory = styled.p`
  color: gray;
  margin: 3px;
`;

export const StyledName = styled.p`
  font-weight: 600;
  margin: 3px;
`;

export const StyledPreco = styled.p`
  color: hsl(14, 86%, 42%);
  font-weight: bolder;
  margin: 3px;
`;
