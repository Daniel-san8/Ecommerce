import styled from "styled-components";

export const StyledTituloCarrinho = styled.h2`
  color: hsl(14, 86%, 42%);

  padding: ${(props) => {
    if (props.$larguraUsuario >= 1024) {
      return "1rem";
    } else if (props.$larguraUsuario < 1024 && props.$larguraUsuario >= 768) {
      return "2rem";
    } else if (
      props.$larguraUsuario < 1024 &&
      props.$larguraUsuario < 768 &&
      props.$larguraUsuario >= 425
    ) {
      return "1.5rem";
    } else if (
      props.$larguraUsuario < 1024 &&
      props.$larguraUsuario < 768 &&
      props.$larguraUsuario <= 425
    ) {
      return "1.5rem";
    }
  }};
  margin: 0;

  font-size: ${(props) => {
    if (props.$larguraUsuario >= 1024) {
      return "1rem";
    } else if (props.$larguraUsuario < 1024 && props.$larguraUsuario >= 768) {
      return "2.5rem";
    } else if (
      props.$larguraUsuario < 1024 &&
      props.$larguraUsuario < 768 &&
      props.$larguraUsuario <= 425
    ) {
      return "1rem";
    }
  }};
`;

export const StyledCarrinhoContainer = styled.div`
  background-color: white;
  border-radius: 1rem;
  max-width: 90%;
  margin: 1.5rem auto;
  width: ${(props) => {
    if (props.$larguraUsuario >= 1024) {
      return "100%";
    } else if (props.$larguraUsuario < 1024 && props.$larguraUsuario >= 768) {
      return "100%";
    } else if (
      props.$larguraUsuario < 1024 &&
      props.$larguraUsuario < 768 &&
      props.$larguraUsuario <= 425
    ) {
      return "80%";
    }
  }};
`;

export const StyledCarrinhoDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1.5rem;
`;

export const StyledCarrinhoImg = styled.img`
  max-width: 80%;
  width: ${(props) => {
    if (props.$larguraUsuario >= 1024) {
      return "50%";
    } else if (props.$larguraUsuario < 1024 && props.$larguraUsuario >= 768) {
      return "55%";
    } else if (
      props.$larguraUsuario < 1024 &&
      props.$larguraUsuario < 768 &&
      props.$larguraUsuario <= 425
    ) {
      return "50%";
    }
  }};
`;

export const StyledCarrinhoParagrafo = styled.p`
  margin: 0.5rem;
  color: hsl(12, 20%, 44%);
  font-weight: 600;
  font-size: ${(props) => {
    if (props.$larguraUsuario >= 1024) {
      return ".8rem";
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
  white-space: nowrap;
`;

export const StyledDivCarrinhoProduto = styled.div`
  display: flex;
  align-items: center;
  font-size: ${(props) => {
    if (props.$larguraUsuario >= 1024) {
      return "initial";
    } else if (props.$larguraUsuario < 1024 && props.$larguraUsuario >= 768) {
      return "1.5rem";
    } else if (
      props.$larguraUsuario < 1024 &&
      props.$larguraUsuario < 768 &&
      props.$larguraUsuario <= 425
    ) {
      return "1rem";
    }
  }};
  padding: ${(props) => {
    return props.$larguraUsuario >= 768 ? "0 1rem" : "initial";
  }};
  margin-bottom: 1rem;
`;

export const StyledDivCarrinhoProdutoItens = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 0.8rem;
  padding: 0 1.5rem;
  &::after {
    content: "";
    display: block;
    margin: 0 auto;
    width: calc(100% + 70px);
    background-color: hsl(25, 58%, 88%);
    height: 2px;
  }
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
  width: ${(props) => {
    if (props.$larguraUsuario >= 1024) {
      return "20px";
    } else if (props.$larguraUsuario < 1024 && props.$larguraUsuario >= 768) {
      return "40px";
    } else if (
      props.$larguraUsuario < 1024 &&
      props.$larguraUsuario < 768 &&
      props.$larguraUsuario >= 425
    ) {
      return "25px";
    } else if (
      props.$larguraUsuario < 1024 &&
      props.$larguraUsuario < 768 &&
      props.$larguraUsuario <= 425
    ) {
      return "20px";
    }
  }};

  height: ${(props) => {
    if (props.$larguraUsuario >= 1024) {
      return "20px";
    } else if (props.$larguraUsuario < 1024 && props.$larguraUsuario >= 768) {
      return "40px";
    } else if (
      props.$larguraUsuario < 1024 &&
      props.$larguraUsuario < 768 &&
      props.$larguraUsuario <= 425
    ) {
      return "20px";
    }
  }};
  padding: 0 1.5rem;
  cursor: pointer;
`;

export const StyledSpanOneTotal = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 1rem;
  padding: 1.5rem 0;
  font-size: ${(props) => {
    if (props.$larguraUsuario >= 1024) {
      return "initial";
    } else if (props.$larguraUsuario < 1024 && props.$larguraUsuario >= 768) {
      return "1.5rem";
    } else if (
      props.$larguraUsuario < 1024 &&
      props.$larguraUsuario < 768 &&
      props.$larguraUsuario <= 425
    ) {
      return "1rem";
    }
  }};

  transition: 0.3s;
`;

export const StyledSpanTwoTotal = styled.span`
  font-weight: bold;
  font-size: ${(props) => {
    if (props.$larguraUsuario >= 1024) {
      return "1.5rem";
    } else if (props.$larguraUsuario < 1024 && props.$larguraUsuario >= 768) {
      return "1.5rem";
    } else if (
      props.$larguraUsuario < 1024 &&
      props.$larguraUsuario < 768 &&
      props.$larguraUsuario <= 425
    ) {
      return "1rem";
    }
  }};
`;

export const StyledDivCarbonNeutral = styled.div`
  background-color: hsl(20, 50%, 98%);
  padding: 1rem 0;
  margin: 0 1.5rem;
  white-space: nowrap;
  font-size: ${(props) => {
    if (props.$larguraUsuario >= 1024) {
      return "0.8rem";
    } else if (props.$larguraUsuario < 1024 && props.$larguraUsuario >= 768) {
      return "1.5rem";
    } else if (
      props.$larguraUsuario < 1024 &&
      props.$larguraUsuario < 768 &&
      props.$larguraUsuario <= 425
    ) {
      return "0.6rem";
    }
  }};
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
  padding: ${(props) => {
    if (props.$larguraUsuario >= 1024) {
      return ".7rem 2rem";
    } else if (props.$larguraUsuario < 1024 && props.$larguraUsuario >= 768) {
      return "2rem 4rem";
    } else if (
      props.$larguraUsuario < 1024 &&
      props.$larguraUsuario < 768 &&
      props.$larguraUsuario >= 425
    ) {
      return "1rem 3rem";
    } else if (
      props.$larguraUsuario < 1024 &&
      props.$larguraUsuario < 768 &&
      props.$larguraUsuario <= 425
    ) {
      return "1rem 3rem";
    }
  }};

  width: ${(props) => {
    return props.$larguraUsuario >= 768 ? "80%" : "30%";
  }};
  display: flex;
  justify-content: center;
  white-space: nowrap;
  border-radius: ${(props) => {
    return props.$larguraUsuario >= 768 ? "50px" : "25px";
  }};
  cursor: pointer;

  font-size: ${(props) => {
    if (props.$larguraUsuario >= 1024) {
      return "0.8rem";
    } else if (props.$larguraUsuario < 1024 && props.$larguraUsuario >= 768) {
      return "1.5rem";
    } else if (
      props.$larguraUsuario < 1024 &&
      props.$larguraUsuario < 768 &&
      props.$larguraUsuario <= 425
    ) {
      return "1rem";
    }
  }};
  transition: 0.3s;
  &:hover {
    background-color: hsl(7, 86%, 42%);
    transition: 0.3s;
  }
`;
