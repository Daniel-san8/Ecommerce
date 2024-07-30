import React from "react";
import styled from "styled-components";

// Componente StyledDialog usando forwardRef para passar a ref para o dialog
export const StyledDialog = React.forwardRef((props, ref) => (
  <dialog ref={ref} {...props} />
));

// Componentes estilizados
export const StyledDivModal = styled.div`
  width: 100%;
  height: 100%;
`;

export const StyledModalCart = styled.div`
  background-color: white;
  border-radius: 1rem;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const StyledParagraphModal = styled.p`
  color: hsl(14, 25%, 72%);
`;

// Componente estilizado baseado em StyledDialog
export const StyledDialogStyled = styled(StyledDialog)`
  border: none;
  max-width: 100%;
  max-height: 80%;
  outline: none;
  margin-top: auto;

  &::backdrop {
    background-color: rgba(0 0 0 /0.5);
    transition: 1s;
  }
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;
