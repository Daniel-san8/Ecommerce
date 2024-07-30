import styled from "styled-components";

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

export const StyledOrderModal = styled.span`
  color: hsl(12, 20%, 44%);
`;

export const StyledDialog = styled.dialog`
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
