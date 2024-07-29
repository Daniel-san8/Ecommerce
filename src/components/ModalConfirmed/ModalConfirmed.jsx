import React from "react";
import styled from "styled-components";
import {
  StyledDivModal,
  StyledModalCart,
  StyledParagraphModal,
} from "./StyledModalConfirmed";
import { GlobalContext } from "../../GlobalContext";
import ProdutosModal from "./ProdutosModal";

const ModalConfirmed = () => {
  const { modalState, totalItems } = React.useContext(GlobalContext);

  return (
    <>
      {modalState && totalItems > 0 ? (
        <StyledDivModal>
          <StyledModalCart>
            <img
              style={{ width: "35px", height: "35px", paddingBottom: ".6rem" }}
              src="./src/assets/images/icon-order-confirmed.svg"
            />
            <h1>
              Order <br /> Confirmed
            </h1>
            <StyledParagraphModal>
              We hope you enjoy your food!
            </StyledParagraphModal>
            <ProdutosModal />
            <p>Order Confirmed $46.50</p>
          </StyledModalCart>
        </StyledDivModal>
      ) : null}
    </>
  );
};

export default ModalConfirmed;
