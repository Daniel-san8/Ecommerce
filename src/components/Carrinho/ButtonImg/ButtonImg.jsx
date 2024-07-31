import styled from "styled-components";

export const StyledContainerButtonCart = styled.div`
  background-color: white;
  width: ${(props) => {
    return props.$larguraUsuario >= 768 ? "80%" : "50%";
  }};
  height: ${(props) => {
    return props.$larguraUsuario >= 768 ? "8%" : "10%";
  }};
  max-width: 300px;
  position: absolute;
  bottom: ${(props) => {
    return props.$larguraUsuario >= 768 ? "24%" : "130px";
  }};
  right: ${(props) => {
    return props.$larguraUsuario >= 768 ? "30%" : "25%";
  }};

  display: ${(props) => (props.$quantidade <= 0 ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border-radius: ${(props) => {
    return props.$larguraUsuario >= 768 ? "50px" : "25px";
  }};
  border: 1px solid hsl(7, 20%, 60%);
  cursor: pointer;
  font-size: ${(props) => {
    return props.$larguraUsuario >= 768 ? "1.5rem" : "1rem";
  }};
  transition: 0.2s;
  &:hover {
    filter: grayscale(0.5);
  }
`;

export const StyledTextoButtonCart = styled.span`
  color: black;
  font-weight: 600;
`;

export const StyledButtonOnProduct = styled.div`
  background-color: hsl(14, 86%, 42%);
  width: 50%;
  height: ${(props) => {
    return props.$larguraUsuario >= 768 ? "8%" : "10%";
  }};
  max-width: 300px;
  position: absolute;
  bottom: ${(props) => {
    return props.$larguraUsuario >= 768 ? "24%" : "130px";
  }};
  right: ${(props) => {
    return props.$larguraUsuario >= 768 ? "30%" : "25%";
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
    return props.$larguraUsuario >= 768 ? "1.5rem" : "1rem";
  }};

  transition: 0.3s;
`;

export const StyledButtonOnProductIncDec = styled.span`
  display: flex;
  transition: 0.2s;
  gap: ${(props) => {
    return props.$larguraUsuario >= 768 ? "4rem" : "3rem";
  }};
`;

export const StyledspanIncDec = styled.span`
  display: flex;
  align-self: center;
  cursor: pointer;
  height: ${(props) => {
    return props.$larguraUsuario >= 768 ? "5px" : "initial";
  }};

  transition: 0.2s;
`;
export const StyledspanIncMais = styled.span`
  display: flex;
  align-self: center;
  cursor: pointer;
  height: ${(props) => {
    return props.$larguraUsuario >= 768 ? "25px" : "initial";
  }};
  transition: 0.2s;
`;
