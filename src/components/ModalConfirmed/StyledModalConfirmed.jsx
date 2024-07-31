import React from "react";
import styled from "styled-components";

const StyledDialog = React.forwardRef((props, ref) => (
  <dialog ref={ref} {...props} />
));

export const StyledDivModal = styled.div`
  width: 100%;
  height: 100%;
`;

export const StyledModalCart = styled.div`
  background-color: white;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const StyledParagraphModal = styled.p`
  color: hsl(14, 25%, 72%);
  padding: 0;
  margin: 0;
`;

export const StyledOrderModal = styled.span`
  color: hsl(12, 20%, 44%);
`;

export const StyledDialogStyled = styled(StyledDialog)`
  border: none;
  max-width: 100%;
  max-height: 80%;
  outline: none;
  /* height: ${({ larguraUsuario }) =>
    larguraUsuario < 768 ? "80%" : "30%"}; */

  border-radius: 1rem 1rem 0 0;
  /* padding: ${({ larguraUsuario }) =>
    larguraUsuario < 425 ? "2.5rem" : "4rem"}; */
  padding: 2.5rem;
  /* margin-bottom: ${({ larguraUsuario }) =>
    larguraUsuario < 768 ? "0" : "auto"}; */

  margin-bottom: 0;
  &::backdrop {
    background-color: rgba(0 0 0 /0.5);
    transition: 1s;
  }
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;
