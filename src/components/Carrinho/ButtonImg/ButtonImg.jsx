import styled from "styled-components";

export const StyledContainerButtonCart = styled.div`
  background-color: white;

  width: ${(props) => {
    if (props.$larguraUsuario >= 1024) {
      return "60%";
    } else if (props.$larguraUsuario < 1024 && props.$larguraUsuario >= 768) {
      return "80%";
    } else if (
      props.$larguraUsuario < 1024 &&
      props.$larguraUsuario < 768 &&
      props.$larguraUsuario >= 425
    ) {
      return "40%";
    } else if (
      props.$larguraUsuario < 1024 &&
      props.$larguraUsuario < 768 &&
      props.$larguraUsuario <= 425
    ) {
      return "50%";
    }
  }};

  height: ${(props) => {
    if (props.$larguraUsuario >= 1024) {
      return "11.50%";
    } else if (props.$larguraUsuario < 1024 && props.$larguraUsuario >= 768) {
      return "8%";
    } else if (
      props.$larguraUsuario < 1024 &&
      props.$larguraUsuario < 768 &&
      props.$larguraUsuario >= 425
    ) {
      return "10%";
    } else if (
      props.$larguraUsuario < 1024 &&
      props.$larguraUsuario < 768 &&
      props.$larguraUsuario <= 425
    ) {
      return "10%";
    }
  }};

  max-width: 300px;
  position: absolute;

  bottom: ${(props) => {
    if (props.$larguraUsuario > 1440) {
      return "8%";
    } else if (props.$larguraUsuario >= 1440 && props.$larguraUsuario < 2560) {
      return "18%";
    } else if (props.$larguraUsuario >= 1024) {
      return "29%";
    } else if (props.$larguraUsuario < 1024 && props.$larguraUsuario >= 768) {
      return "15%";
    } else if (
      props.$larguraUsuario < 1024 &&
      props.$larguraUsuario < 768 &&
      props.$larguraUsuario >= 425
    ) {
      return "85px";
    } else if (
      props.$larguraUsuario < 1024 &&
      props.$larguraUsuario < 768 &&
      props.$larguraUsuario <= 425
    ) {
      return "90px";
    }
  }};
  right: ${(props) => {
    if (props.$larguraUsuario > 1440) {
      return "30%";
    } else if (props.$larguraUsuario >= 1024) {
      return "20%";
    } else if (props.$larguraUsuario < 1024 && props.$larguraUsuario >= 768) {
      return "30%";
    } else if (
      props.$larguraUsuario < 1024 &&
      props.$larguraUsuario < 768 &&
      props.$larguraUsuario >= 425
    ) {
      return "28%";
    } else if (
      props.$larguraUsuario < 1024 &&
      props.$larguraUsuario < 768 &&
      props.$larguraUsuario <= 425
    ) {
      return "25%";
    }
  }};
  display: ${(props) => (props.$quantidade <= 0 ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  gap: 1rem;
  gap: ${(props) => (props.$larguraUsuario >= 1024 ? ".2rem" : "1rem")};
  border-radius: ${(props) => {
    return props.$larguraUsuario >= 768 ? "50px" : "25px";
  }};
  border: 1px solid hsl(7, 20%, 60%);
  cursor: pointer;

  font-size: ${(props) => {
    if (props.$larguraUsuario > 1440) {
      return "1.5rem";
    } else if (props.$larguraUsuario >= 1024) {
      return ".8rem";
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

  transition: 0.2s;
  &:hover {
    filter: grayscale(0.5);
  }
`;

export const StyledCarrinhoProntoImg = styled.img`
  height: ${(props) => {
    if (props.$larguraUsuario > 1440) {
      return "30px";
    } else if (props.$larguraUsuario >= 1024) {
      return "15px";
    } else if (props.$larguraUsuario < 1024 && props.$larguraUsuario >= 768) {
      return "35px";
    } else if (
      props.$larguraUsuario < 1024 &&
      props.$larguraUsuario < 768 &&
      props.$larguraUsuario <= 425
    ) {
      return "initial";
    }
  }};
`;

export const StyledTextoButtonCart = styled.span`
  color: black;
  font-weight: 600;
`;

export const StyledButtonOnProduct = styled.div`
  background-color: hsl(14, 86%, 42%);
  width: ${(props) => {
    if (props.$larguraUsuario >= 1024) {
      return "60%";
    } else if (props.$larguraUsuario < 1024 && props.$larguraUsuario >= 768) {
      return "80%";
    } else if (
      props.$larguraUsuario < 1024 &&
      props.$larguraUsuario < 768 &&
      props.$larguraUsuario >= 425
    ) {
      return "40%";
    } else if (
      props.$larguraUsuario < 1024 &&
      props.$larguraUsuario < 768 &&
      props.$larguraUsuario <= 425
    ) {
      return "50%";
    }
  }};

  height: ${(props) => {
    if (props.$larguraUsuario >= 1024) {
      return "11.50%";
    } else if (props.$larguraUsuario < 1024 && props.$larguraUsuario >= 768) {
      return "8%";
    } else if (
      props.$larguraUsuario < 1024 &&
      props.$larguraUsuario < 768 &&
      props.$larguraUsuario >= 425
    ) {
      return "10%";
    } else if (
      props.$larguraUsuario < 1024 &&
      props.$larguraUsuario < 768 &&
      props.$larguraUsuario <= 425
    ) {
      return "10%";
    }
  }};
  max-width: 300px;
  position: absolute;
  bottom: ${(props) => {
    if (props.$larguraUsuario > 1440) {
      return "8%";
    } else if (props.$larguraUsuario >= 1440 && props.$larguraUsuario < 2560) {
      return "18%";
    } else if (props.$larguraUsuario >= 1024) {
      return "29%";
    } else if (props.$larguraUsuario < 1024 && props.$larguraUsuario >= 768) {
      return "15%";
    } else if (
      props.$larguraUsuario < 1024 &&
      props.$larguraUsuario < 768 &&
      props.$larguraUsuario >= 425
    ) {
      return "85px";
    } else if (
      props.$larguraUsuario < 1024 &&
      props.$larguraUsuario < 768 &&
      props.$larguraUsuario <= 425
    ) {
      return "90px";
    }
  }};
  right: ${(props) => {
    if (props.$larguraUsuario > 1440) {
      return "30%";
    } else if (props.$larguraUsuario >= 1024) {
      return "20%";
    } else if (props.$larguraUsuario < 1024 && props.$larguraUsuario >= 768) {
      return "30%";
    } else if (
      props.$larguraUsuario < 1024 &&
      props.$larguraUsuario < 768 &&
      props.$larguraUsuario >= 425
    ) {
      return "28%";
    } else if (
      props.$larguraUsuario < 1024 &&
      props.$larguraUsuario < 768 &&
      props.$larguraUsuario <= 425
    ) {
      return "25%";
    }
  }};
  display: ${(props) => (props.$itens > 0 ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  border-radius: ${(props) => {
    return props.$larguraUsuario >= 768 ? "50px" : "25px";
  }};
  border: 1px solid transparent;
  color: white;
  font-weight: 600;

  font-size: ${(props) => {
    if (props.$larguraUsuario >= 1440) {
      return "1.5rem";
    } else if (props.$larguraUsuario >= 1024) {
      return ".7rem";
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
      return "1rem";
    }
  }};

  transition: 0.3s;
`;

export const StyledButtonOnProductIncDec = styled.span`
  display: flex;
  gap: ${(props) => {
    if (props.$larguraUsuario >= 1440) {
      return "3.5rem";
    } else if (props.$larguraUsuario >= 1024) {
      return "1.5rem";
    } else if (props.$larguraUsuario < 1024 && props.$larguraUsuario >= 768) {
      return "4rem";
    } else if (
      props.$larguraUsuario < 1024 &&
      props.$larguraUsuario < 768 &&
      props.$larguraUsuario >= 425
    ) {
      return "4rem";
    } else if (
      props.$larguraUsuario < 1024 &&
      props.$larguraUsuario < 768 &&
      props.$larguraUsuario <= 425
    ) {
      return "3rem";
    }
  }};
  transition: 0.2s;
`;

export const StyledspanIncDec = styled.span`
  display: flex;
  align-self: center;
  cursor: pointer;
  height: ${(props) => {
    if (props.$larguraUsuario >= 1440) {
      return "5px";
    } else if (props.$larguraUsuario >= 1024) {
      return "initial";
    } else if (props.$larguraUsuario < 1024 && props.$larguraUsuario >= 768) {
      return "6px";
    } else if (
      props.$larguraUsuario < 1024 &&
      props.$larguraUsuario < 768 &&
      props.$larguraUsuario >= 425
    ) {
      return "5px";
    } else if (
      props.$larguraUsuario < 1024 &&
      props.$larguraUsuario < 768 &&
      props.$larguraUsuario <= 425
    ) {
      return "initial";
    }
  }};
  transition: 0.2s;
`;
export const StyledspanIncMais = styled.span`
  display: flex;
  align-self: center;
  cursor: pointer;

  height: ${(props) => {
    if (props.$larguraUsuario >= 1440) {
      return "20px";
    } else if (props.$larguraUsuario >= 1024) {
      return "initial";
    } else if (props.$larguraUsuario < 1024 && props.$larguraUsuario >= 768) {
      return "25px";
    } else if (
      props.$larguraUsuario < 1024 &&
      props.$larguraUsuario < 768 &&
      props.$larguraUsuario >= 425
    ) {
      return "20px";
    } else if (
      props.$larguraUsuario < 1024 &&
      props.$larguraUsuario < 768 &&
      props.$larguraUsuario <= 425
    ) {
      return "initial";
    }
  }};
  transition: 0.2s;
`;
