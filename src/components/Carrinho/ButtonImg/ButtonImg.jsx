import styled from "styled-components";

export const StyledContainerButtonCart = styled.div`
  background-color: white;
  width: 50%;
  height: 10%;
  position: absolute;
  bottom: 130px;
  right: 87px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border-radius: 25px;
  border: 1px solid hsl(7, 20%, 60%);
  cursor: pointer;
`;

export const StyledTextoButtonCart = styled.span`
  color: black;
  font-weight: 600;
`;

export const StyledButtonOnProduct = styled.div`
  background-color: hsl(14, 86%, 42%);
  width: 50%;
  height: 10%;
  position: absolute;
  bottom: 130px;
  right: 87px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  border: 1px solid transparent;
  color: white;
`;

export const StyledButtonOnProductIncDec = styled.span`
  display: flex;
  gap: 3rem;
`;

export const StyledspanIncDec = styled.span`
  display: flex;
  align-self: center;
  cursor: pointer;
`;
